export const web3 = {
  data() {
    return {
      web3Provider: null,
      contracts: {},
      account: 'Account not connected:',
      balance: 'N/A',
      loading: false,
      logSellArticleEventListener: null,
      logBuyArticleEventListener: null,
      articles: [],
      force: false
    }
  },
  created() {
    this.initWeb3()
  },
  methods: {
    async initWeb3() {
      if(window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        try {
          await window.ethereum.enable()
          this.displayAccountInfo()
          this.initContract()
        } catch (error) {
          //user denied access
          console.error("Unable to retrieve your accounts! You have to approve this application on Metamask")
        }
      } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider || "ws://localhost:8545")
        this.displayAccountInfo()
        this.initContract()
      } else {
        //no dapp browser
        console.log("Non-ethereum browser detected. You should consider trying Metamask")
      }
    },
    async displayAccountInfo() {
      const accounts = await window.web3.eth.getAccounts()
      this.account = accounts[0]
      this.balance = await window.web3.eth.getBalance(this.account)
    },
    async initContract() {
      $.getJSON('Market.json', artifact => {
        this.contracts.Market = TruffleContract(artifact)
        this.contracts.Market.setProvider(window.web3.currentProvider)
        this.listenToEvents()
        this.reloadArticles()
      })
    },
    // Listen to events raised from the contract
    async listenToEvents() {
      const marketInstance = await this.contracts.Market.deployed()
      if (this.logSellArticleEventListener == null) {
        this.logSellArticleEventListener = marketInstance.LogSellArticle({fromBlock: '0'}).on("data", event => {
          $('#' + event.id).remove()
          $('#events').append('<li class="list-group-item text-xs" id="' + event.id + '">' + event.returnValues._name + ' is for sale</li>')
          this.reloadArticles()
        })
        .on("error", error => {
          console.error(error)
        })
      }
      if (this.logBuyArticleEventListener == null) {
        this.logBuyArticleEventListener = marketInstance.LogBuyArticle({fromBlock: '0'}).on("data", event => {
          $('#' + event.id).remove()
          $('#events').append('<li class="list-group-item text-xs" id="' + event.id + '">' + event.returnValues._buyer + ' bought ' + event.returnValues._name + '</li>' )
          this.reloadArticles()
        })
        .on("error", error => {
          console.error(error)
        })
      }

      $('.btn-subscribe').hide()
      $('.btn-unsubscribe').show()
      $('.btn-show-events').show()
    },
    async stopListeningToEvents() {
      if (this.logSellArticleEventListener != null) {
        console.log("unsubscribe from sell events")
        await this.logSellArticleEventListener.removeAllListeners()
        this.logSellArticleEventListener = null
      }
      if(this.logBuyArticleEventListener != null) {
        console.log("unsubscribe from buy events")
        await this.logBuyArticleEventListener.removeAllListeners()
        this.logBuyArticleEventListener = null
      }

      $('#events')[0].className = "list-group-collapse"

      $('.btn-subscribe').show()
      $('.btn-unsubscribe').hide()
      $('.btn-show-events').hide()
    },
    async sellArticle() {
      const articlePriceValue = parseFloat($('#article_price').val())
      const articlePrice = isNaN(articlePriceValue) ? "0" : articlePriceValue.toString()
      const _name = $('#article_name').val()
      const _description = $('#article_description').val()
      const _price = window.web3.utils.toWei(articlePrice, "ether")
      const _hashvalue = $('#hashvalue').text()
      console.log(_hashvalue)
      
      if (_name.trim() == "" || _price === "0") {
        return false
      }

      try {
        const marketInstance = await this.contracts.Market.deployed()
        const transactionReceipt = await marketInstance.sellArticle(
          _name,
          _description,
          _price,
          _hashvalue,
          {from: App.account, gas: 5000000}
        ).on("transactionHash", hash => {
          console.log("transaction hash", hash)
          $('#modal-loading').attr('hidden', false)
        })
        console.log("transaction receipt" + transactionReceipt)
        $('#modal-loading').attr('hidden', true)
        $('#modal-submission').attr('hidden', false)
      } catch(error) {
        console.error(error)
        $('#modal-loading').attr('hidden', true)
        $('#modal-error').attr('hidden', false)
      }
    },
    async buyArticle(article) {
      const _self = this
      const _articleId = article.id.words ? article.id.words[0] : 0;
      // retrieve the article price
      const articlePriceValue = parseFloat(article.etherPrice);
      const articlePrice = isNaN(articlePriceValue) ? "0" : articlePriceValue.toString();
      const _price = window.web3.utils.toWei(articlePrice, "ether");
      const account = this.account
      
      try {
        const marketInstance = await this.contracts.Market.deployed()
        
        // const articleIds = await marketInstance.getArticlesForSale()
        const transactionReceipt = await marketInstance.buyArticle(
          _articleId, {
            from: account,
            value: _price,
            gas: 500000
          }
        ).on("transactionHash", hash => {
          console.log("transaction hash", hash)
          var number = 0
          marketInstance.LogSellArticle({fromBlock: "0"}).on("data", async function(event) {
            number++
            if (number == _articleId) {
              console.log('https://ipfs.infura.io/ipfs/' + event.returnValues._hashvalue)
              console.log(event.returnValues._name)
              console.log(event.returnValues._seller)
              $('#modal-loading').attr('hidden', false)
              _self.reloadArticles()
              _self.force = true
              _self.resultUrl = 'https://ipfs.infura.io/ipfs/' + event.returnValues._hashvalue
              return 'https://ipfs.infura.io/ipfs/' + event.returnValues._hashvalue
            } else {
              return
            }
          })
        })
        
        console.log("transaction receipt", transactionReceipt)
        $('#modal-loading').attr('hidden', true)
        $('#modal-receipt').attr('hidden', false)
        $('#result-url').text(_self.resultUrl)
      } catch(error) {
        console.log(error)
        $('#modal-loading').attr('hidden', true)
        $('#modal-error').attr('hidden', false)
      }
    },
    async reloadArticles() {
      // avoid reentry
      if (this.loading) {
        return
      }

      this.loading = true;
      // refresh account information because the balance may have changed
      this.displayAccountInfo()

      try {
        const marketInstance = await this.contracts.Market.deployed()
        const articleIds = await marketInstance.getArticlesForSale()
        $('#articlesRow').empty()
        for (let i = 0; i < articleIds.length; i++) {
          const article = await marketInstance.articles(articleIds[i])
          this.displayArticle(article[0], article[1], article[3], article[4], article[5]);
        }
        this.loading = false;
      } catch(error) {
        console.error(error);
        this.loading = false;
      }
    },
    async asyncreloadArticlesPage() {
      // refresh account information because the balance may have changed
      this.displayAccountInfo();
      try {
        const marketInstance = await this.contracts.Market.deployed();
        const articleIds = await marketInstance.getArticlesForSale();
        $('#articlesRow').empty();
        for (let i = 0; i < articleIds.length; i++) {
          const article = await marketInstance.articles(articleIds[i]);
          this.displayArticle(article[0], article[1], article[3], article[4], article[5]);
        }
        this.loading = false;
      } catch(error) {
        console.error(error);
        this.loading = false;
      }
    },
    displayArticle(id, seller, name, description, price) {
      // Retrieve the article placeholder
      const articlesRow = $('#articlesRow')
      const etherPrice = window.web3.utils.fromWei(price, "ether")
      const sellerType = seller === this.account ? 'you' : seller
      const article = {
        id,
        name,
        description,
        etherPrice,
        sellerType
      }

      // add this new article
      this.articles.push(article)
    },
    resetModal() {
      $('#article_name').val('');
      $('#article_price').val('');
      $('#article_description').val('');
      $('#hashvalue').text('');
      $('#ipfslink').text('');
      $('#ipfslinktitle').text('');
      $('#input').val('');
    }
  },
  watch: {
    force(newValue) {
      if (newValue) {
        console.log(this.resultUrl)
        this.forceRender = true
        this.$forceUpdate()
      }
    }
  }
}
