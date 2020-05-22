<template>

  <section>

  <div class="table1" id="article-list">
      <div class="panel-heading">
        <br/>
      <pre> Item           Description                   Price(ETH)      Seller</pre>
      <br/>
      </div>
        <div id="articlesRow" class="row">
        Loading Items for Sale...
        <!-- ARTICLES LOAD HERE -->

        </div>    
      </div>

      <div class ="table1-header">
        Current Marketplace
      </div>

      <div class ="table2-header">
        Events
      </div>

    


      <div class="table2" id="article-list2">


      <div class="row panel panel-default">
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

      
      </div>

       <div class="col-3" id="article-list2">
      
      </div>

      
        



        <div id="articleTemplate" style="display: none;">
          <div class="row-lg-12">
            <div class="panel panel-default panel-article">
              
              <div class="panel-body">
                <pre class="panel-title" style ="display: inline-block;"></pre>
                <div class="article-description" style ="display: inline-block;"></div>
                <div class="article-price" style ="display: inline-block;"></div>
                <div class="article-seller" style ="display: inline-block;"></div>
                <button type="article-button" style ="display: inline-block;" class="article-button" onclick="App.buyArticle(event); return false;">Buy</button>
            </div>
          </div>
        </div>
      </div>
  </div>




    


  

  <!-- Modal form to sell an article -->
  <div class="modal fade" id="sellArticle" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" onclick="App.unblurBackground();" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Sell your article</h4>
        </div>
        <div class="modal-body">

          <div class="row">
            <div class="col-lg-12">
              <form>
                <div class="form-group">
                  <label for="article_name">Article name</label>
                  <input type="text" class="form-control" id="article_name" placeholder="Enter the name of your article">
                </div>
                <div class="form-group">
                  <label for="price">Price in ETH</label>
                  <input type="number" class="form-control" id="article_price" placeholder="1" pattern="[0-9]+([\.,][0-9]+)?"
                    step="0.01">
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <textarea type="text" class="form-control vresize" id="article_description" placeholder="Describe your article"
                    maxlength="255"></textarea>
                </div>
                <input type ="file" id="input" onchange='uploadFile();' />
                <label type="text" id="hashvalue" hidden="hidden"></label>
                <p id="ipfslinktitle"></p>
                <p id="ipfslink"><a href=''></a></p>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary btn-success" data-dismiss="modal" onclick="App.sellArticle(); submitFile(); return false;">Submit</button>
          <button type="button" class="btn" data-dismiss="modal" onclick="App.unblurBackground();" >Close</button>
          
        </div>
      </div>

    </div>
  </div>

    
  <div class="modal-loading" id ="modal-loading" hidden="true">
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

      <button type="button" class="modal-close" onclick="App.CloseWindow();">&times;</button>
    </div>





  <div class="modal-submission" id ="modal-submission" hidden="true">
    <div id= "modal-sale" >
      <h1> Your file has successfully been put up for sale</h1>
          <button type="button" class="modal-close" onclick="App.CloseSubmission();">&times;</button>
    </div>
  </div>
  
  <div class="modal-receipt" id ="modal-receipt" hidden="true">
    <div id= "modal-purchase" >
      <h1> Thank you for your purchase!</h1>
      <h2 id ="purchaselink"></h2>
          <button type="button" class="modal-close" onclick="App.CloseReceipt();">&times;</button>
    </div>
  </div>

  <div class="modal-error" id ="modal-error" hidden="true">
      <h1> Whoops! Looks like something went wrong.</h1>
          <button type="button" class="modal-close" onclick="App.CloseError();">&times;</button>
  </div>




  </section>
</template>

<script>
export default {

  fetch({store, redirect}) {
  if (
  !store.state.user || 
  (store.state.user && store.state.user.
  isAuthenticated ===false)
  ) {
  return redirect('/')
  }
  else {
  }
  },

}

</script>

<style lang="css">

.table1{

    
    height: 500px;
    width: 1150px;
    position: absolute;
    left: 80px;
    top:200px;
    background-color: white;
    opacity: .8;
    overflow: auto;
    white-space: nowrap;
    z-index: 0;

    

}

.sell{
  position: absolute;
  top:50%;
  left: 37%;
  font-family: sans-serif;
    display: block;
    font-weight: 300;
    font-size: 50px;
    color: white;
    letter-spacing: 1px;
}


.row h1{

    position: absolute;
    left: 300px;
    top:100px;

}

.row p1{
    position: absolute;
    top:140px;
}

.row p2{
    position: absolute;
    top:160px;
}




.col-1{

    
    height: 500px;
    width: 1150px;
    position: absolute;
    left: 80px;
    top:200px;
    background-color: white;
    opacity: .8;
    overflow: auto;
    white-space: nowrap;
    z-index: 0;

    

}

.table1-header{

    
    height: 30px;
    width: 1150px;
    position: absolute;
    left: 80px;
    top:170px;
    background-color: white;
    opacity: .82;
    overflow: auto;
    white-space: nowrap;
    font-size: 20px;
    font-weight: bolder;
    text-align: center;
}









.table2{

    
    height: 500px;
    width: 400px;
    position: absolute;
    left: 1350px;
    top:200px;
    background-color: white;
    opacity: .8;
    overflow: auto;
    white-space: nowrap;
    

    

}

.table2-header{

    
    height: 30px;
    width: 400px;
    position: absolute;
    left: 1350px;
    top:170px;
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

.panel-title{
    position: absolute;
    left: 10px;
    font-size: 10px;
}

.article-description{
    position: absolute;
    left: 190px;
    font-size: 10px;

}

.article-price{
    width: 10%;
    position: absolute;
    left: 550px;
    font-size: 10px;
}

.article-seller{
    width: 30%;
    position: absolute;
    left: 750px;
    font-size: 10px;

}



.article-button{
    position: absolute;
    left: 1050px;
    font-size: 10px;

}


.navbar-default {
    text-align: center;
    color: white;
}




.modal{
    display: none;
    

}

.modal:target {
    visibility: visible;
    opacity: 1;
  }

.modal-dialog{

    height: 600px;
    width: 650px;
    position: absolute;
    left: 700px;
    top:200px;
    background:white;
    transition: all 5s ease-in-out;
}

.modal-receipt{

    height: 600px;
    width: 650px;
    position: absolute;
    left: 700px;
    top:200px;
    background: white;
    transition: all 5s ease-in-out;
}

.modal-submission{

    height: 600px;
    width: 650px;
    position: absolute;
    left: 700px;
    top:200px;
    background: white;
    transition: all 5s ease-in-out;
}

.modal-submission h1{

    font-size: 20px;
    position: absolute;
    top:50px;

}

.modal-loading{

    height: 400px;
    width: 400px;
    position: absolute;
    left: 700px;
    top:200px;
    background: white;
    transition: all 5s ease-in-out;

}

.modal-loading h1{

    font-size: 20px;
    position: absolute;
    top:50px;

}

.modal-error{

    height: 400px;
    width: 400px;
    position: absolute;
    left: 700px;
    top:200px;
    background: white;
    transition: all 5s ease-in-out;

}



.loading-animation{

    
    position: absolute;
    left: 160px;
    top:200px;



}

.modal .close{
    position: absolute;
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }

.modal-close{
    position: absolute;
    top: 10px;
    right: 15px;
    transition: all 200ms;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }


.collapse {
    list-style-type: none;
    font-size: 20px;
}



.uga-engr{
    width: 300px;
    height: auto;
    position: fixed;
    left: 900px;;
    top:730px;
}

.front-link {
    background-color: black;
  color: white;
  padding: 50px 100px;
    color: #ffffff;
    position: absolute;
    top: 10px;
    left: 60px;
    z-index: 50;
}


</style>


