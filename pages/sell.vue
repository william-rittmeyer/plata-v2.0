<template>
  <section class="flex justify-between">
    <div class="articles-container mr-6 p-5 rounded-md">
      <div class="table1-header mb-5 text-3xl antialiased">
        Current Marketplace
      </div>
      <div class="search mb-4">
        <input
          type="text"
          name="search"
          placeholder="Search by title"
          class="transition-colors duration-100 ease-in-out focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-4 block w-full appearance-none leading-normal ds-input"
          v-model="content"
          v-on:keyup="handleSearch"
        />
      </div>
      <div>
        <p class="text-sm my-4 text-white">Sort by:
          <span class="cursor-pointer mx-2" :class="activeSort === 'name' ? 'active' : ''" @click="handleSort('name')">Name</span>
          <span class="cursor-pointer mx-2" :class="activeSort === 'desc' ? 'active' : ''" @click="handleSort('desc')">Description</span>
          <span class="cursor-pointer mx-2" :class="activeSort === 'price' ? 'active' : ''" @click="handleSort('price')">Price</span>
          <span class="cursor-pointer mx-2" :class="activeSort === 'seller' ? 'active' : ''" @click="handleSort('seller')">Seller</span></p>
      </div>
      <exchanges
        :list="articles"
        account />
      <!-- <table class="table1 table-auto text-left">
        <thead>
          <tr>
            <th class="px-4 py-2" @click="handleSort('name')">Item</th>
            <th class="px-4 py-2" @click="handleSort('desc')">Description</th>
            <th class="px-4 py-2" @click="handleSort('price')">Price(ETH)</th>
            <th class="px-4 py-2" @click="handleSort('seller')">Seller</th>
            <th class="px-4 py-2">Buy</th>
          </tr>
        </thead>
        <tbody id="articlesRow">
          <tr v-for="(article, key) in articles" :key="key">
            <td class="border p-2 sm:text-sm md:text-base panel-title">{{article.name}}</td>
            <td class="border p-2 sm:text-sm md:text-base article-description">{{article.description}}</td>
            <td class="border p-2 sm:text-sm md:text-base article-price">{{article.etherPrice}}</td>
            <td class="border p-2 sm:text-sm md:text-base article-seller">{{article.sellerType}}</td>
            <td class="border p-2">
              <button
                class="text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="button"
                v-if="account !== article.sellerType"
                v-on:data-id="article.id"
                v-on:data-value="article.etherPrice"
                @click="buyArticle(event)">Buy</button>
            </td>
          </tr>
        </tbody>
      </table> -->
    </div>
    
    <!--EVENTS TABLE -->
    <!-- <div class="table-container p-5 rounded-md overflow-auto">
      <div class ="table2-header mb-5">
        Events
      </div>
      

      <div class="table2" id="article-list2">
        <div class="panel-heading clearfix">
          <div class="panel-title">
            <button class="btn btn-info btn-lg pull-left btn-event btn-unsubscribe" onclick="App.stopListeningToEvents(); return false;">Unsubscribe</button>
            <button class="btn btn-info btn-lg pull-left btn-event btn-subscribe" style="display: none" onclick="App.listenToEvents(); return false;">Subscribe</button>
            <button class="btn btn-info btn-lg pull-left btn-show-events" data-toggle="collapse" data-target="#events" aria-expanded="false"
                    aria-controls="events">Show Events</button>
            <button class="btn btn-info btn-lg pull-right" data-toggle="modal" data-target="#sellArticle" onclick="App.blurBackground();" >Sell an
              article</button>
          </div>
          <br/>
        </div>
          <ul id="events" class="collapse list-group"></ul>
      </div>

      <div class="col-3" id="article-list2"> </div>
    </div> -->

    <!-- MODAL FORM TO SELL AN ARTICLE -->

    <div class="modal " id="sellArticle" role="dialog">
      <div class="modal-dialog">
        <button type="button" onclick="App.unblurBackground(); App.resetModal();" class="close" data-dismiss="modal">&times;</button>

        <form>

          <div class="modal-header">
            
            <h4 class="modal-title">Sell your article</h4>
          </div>


          <div class="user-box">
            <input type="text" name="" required="" id="article_name">
            <label>Article name</label>
          </div>

          <div class="user-box">
            <input type="number" name="" required="" id="article_price" pattern="[0-9]+([\.,][0-9]+)?" step="0.01">
            <label>Price in ETH</label>
          </div>

          <div class="user-box">
            <input type="text" class="form-control btn" name="" required="" id="article_description">
            <label>Description</label>
          </div>
          
          <label type="text" id="hashvalue" hidden="hidden"></label>
          <input type ="file" id="input" class="filename" onchange='uploadFile();'/>

          
          <p id="ipfslink" hidden = "hidden"><a href=''></a></p>
          
          
          <div id="submission-load" class = "loading-animation2" hidden="true">
            <h1>Uploading file..</h1>
            <div class="sk-grid">
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-primary btn-success" data-dismiss="modal" onclick="App.sellArticle(); submitFile(); return false;">Submit</button>
          </div>

        </form>

      </div>
    </div>


    <!-- LOADING MODAL -->

    <div class="modal-loading modal-dialog" id="modal-loading" hidden="true">
      <br/>
      <h1> Please wait as the transaction is processed</h1>
      <div class = "loading-animation">
        <div class="sk-grid">
          <div class="sk-grid-cube"></div>
          <div class="sk-grid-cube"></div>
          <div class="sk-grid-cube"></div>
          <div class="sk-grid-cube"></div>
          <div class="sk-grid-cube"></div>
          <div class="sk-grid-cube"></div>
          <div class="sk-grid-cube"></div>
          <div class="sk-grid-cube"></div>
          <div class="sk-grid-cube"></div>
        </div>
      </div>
      <button type="button" class="modal-close" @click="closeWindow()">&times;</button>
    </div>



    <!-- SUBMISSION COMPLETE MODAL -->

    <div class="modal-submission modal-dialog" id="modal-submission" hidden="true">
      <div id= "modal-sale" >
        <br/>
        <h1> Your file has successfully been put up for sale</h1>
        <button type="button" class="modal-close" @click="closeSubmission()">&times;</button>
        <img src="../assets/checkmark.png" class="checkmark-image">
      </div>
    </div>

    <!-- RECEIPT MODAL -->
  
    <div class="modal-receipt modal-dialog" id="modal-receipt" hidden="true">
      <div id= "modal-purchase">
        <h1> Thank you for your purchase!</h1>
        <br/>
        <br/>
        <br/>
        <p id="result-url"></p>
        <button type="button" class="modal-close" @click="closeReceipt()">&times;</button>
      </div>
    </div>

    <!-- ERROR MODAL -->

    <div class="modal-error modal-dialog" id="modal-error" hidden="true">
          <br/>
        <h1> Whoops! Looks like something went wrong.</h1>
        <button type="button" class="modal-close" @click="closeError()">&times;</button>
        <img src="../assets/error.png" class="error_image">
    </div>

  </section>
</template>


<script>
import { web3 } from '@/mixins/web3'
import Exchanges from '@/components/Exchanges'

export default {
  data() {
    return {
      content: '',
      original: [],
      activeSort: '',
      forceRender: false,
      resultUrl: ''
    }
  },
  mixins: [web3],
  created() {
    this.original = this.articles
  },
  methods: {
    handleSearch(e) {
      const { value } = e.target
      if (!value) {
        this.articles = this.original
        return
      }
      this.articles = this.original.length ? 
        this.original.filter(article => {
          const articleName = article.name.toLowerCase()
          if (articleName.includes(value.toLowerCase())) return article
        }) : []
    },
    handleSort(param) {
      this.activeSort = param
      this.articles.sort((a, b) => (a[param] > b[param]) ? 1 : -1)
    },
    closeReceipt() {
      $('#modal-receipt').attr('hidden', true)
      console.log('hello');
    },
    closeSubmission() {
      $('#modal-submission').attr('hidden', true)
      console.log('closed submission');
    },
    closeWindow() {
      $('#modal-loading').attr('hidden', true)
      console.log('hello');
    },
    closeError() {
      $('#modal-error').attr('hidden', true)
      console.log('hello');
    }
  },
  fetch({store, redirect}) {
    if ((!store.state.user) || (!store.state.user)) {}
  	else {}
  },
  components: {
    Exchanges
  }
}
</script>

<style lang="scss">

#result-url {
  word-break: break-all;
}

.table1 {
  overflow: auto;
  z-index: 0;
}

.articles-container {
  background: rgba(0,0,0,.7);
  max-height: 700px;
  opacity: .8;
  overflow-y: auto;
  width: 100%;
  
  /* thead {
    th {
      cursor: pointer;
    }
  }

  tbody {
    tr:nth-child(even) {
      --bg-opacity: 1;
      background-color: #f7fafc;
      background-color: rgba(247, 250, 252, var(--bg-opacity));
    }
  } */
}

.table1-header {
  color: white;
  opacity: .82;
  overflow: auto;
  white-space: nowrap;
  font-weight: 600;
  text-align: center;
}


.table2 {
  width: 400px;
  background-color: white;
  opacity: .8;
  overflow: auto;
  white-space: nowrap;
}

.table2-header {
  height: 30px;
  background-color: white;
  opacity: .82;
  overflow: auto;
  white-space: nowrap;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  z-index: 1;
}

.panel-heading{
    font-weight: 300;
    font-size: 20px;
    font-weight: 700;
}

.panel-body{
    font-size: 16px;
}

.panel-body:after{
  content: "";
  display: table;
  clear: both
}

.navbar-default {
  text-align: center;
  color: white;
}

.modal{
  display: none;
}

.modal-receipt {
  height: 300px;
  width: 650px;
  position: absolute;
  left: 700px;
  top:200px;
  color: white;
}

.modal-submission{
    height: 400px;
    width: 650px;
    position: absolute;
    left: 700px;
    top:500px;
}

.modal-submission h1{
    font-size: 20px;
    font-weight: bold;
    color:white;
    position: absolute;
    top:70px;
}


.modal-loading{
    height: 400px;
    width: 400px;
    position: absolute;
    left: 700px;
    top:200px;
    background: white;
    transition: all 5s ease-in-out;
    font-size: 20px;
    font-weight: bold;
}

.modal-loading h1{
    font-size: 20px;
    color:white;
    font-weight: bold;
    position: absolute;
    top:70px;
}

.modal-error{
    height: 400px;
    width: 400px;
    position: absolute;
    left: 700px;
    top:200px;
    color: white;
    font-size:20px;
    font-weight: bold;
}



.loading-animation{
    position: absolute;
    left: 150px;
    top:200px;
    --sk-size:90px;
}


.loading-animation2{
    position: absolute;
    left: 225px;
    top: 330px;
    --sk-size:30px;
}


.loading-animation2 h1{
    color: white;
}


.filename{
  color: white;
}

.row{
  float: left;
}


.modal .close{
    position: absolute;
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 30px;
    width: 45px;
    height: 45px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }

.modal-close{
    position: absolute;
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 30px;
    width: 45px;
    height: 45px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }


.collapse {
    list-style-type: none;
    font-size: 20px;
}

.modal-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.9);
  box-sizing: border-box;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 0px #03e9f4, 0 0 0px #03e9f4;
  border-radius: 10px;
}

.modal-dialog h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.modal-dialog .user-box {
  position: relative;
}

.modal-dialog .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.modal-dialog .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.modal-dialog .user-box input:focus ~ label,
.modal-dialog .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.modal-dialog form button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}


.modal-dialog form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.modal-dialog a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 0px #03e9f4,
              0 0 0px #03e9f4;
} 

.modal-dialog button:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 0px #03e9f4,
              0 0 0px red;
}



.modal-dialog a span {
  position: absolute;
  display: block;
}

.modal-dialog button span {
  position: absolute;
  display: block;
}

.modal-dialog a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}



.modal-dialog a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}



.modal-dialog a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}



.modal-dialog a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

.error_image {

position: absolute;
top: 40px;
left: 0px;
  
}

.checkmark-image{
  position: absolute;
  top: 160px;
  left: 120px;
  width: 160px;;
}

p span {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;

  &.active {
    color: #03e9f4;
  }
}

</style>
