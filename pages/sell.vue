<template>

  <section>

  <!--ARTICLE TABLE -->

  <div class="table1" id="article-list">
      <div class="panel-heading">
        <br/>
      <pre> Item           Description                      Price(ETH)       Seller</pre>
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

    
      <!--EVENTS TABLE -->

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

      
      </div>

       <div class="col-3" id="article-list2">
      
      </div>

      
        <!--ARTICLE TEMPLATE -->



        <div id="articleTemplate" style="display: none;">
          <div class="row-lg-12">
            <div class="panel panel-default panel-article">
              
              <div class="panel-body">
                <pre class="panel-title" style ="display: inline-block;"></pre>
                <div class="article-description" style ="display: inline-block;"></div>
                <div class="article-price" style ="display: inline-block;"></div>
                <div class="article-seller" style ="display: inline-block;"></div>
                <button type="button" style ="display: inline-block;" class="btn btn-primary btn-success btn-buy article-button" onclick="App.buyArticle(event); return false;">Buy</button>
                <br/>
            </div>
          </div>
        </div>
      </div>
  </div>




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
          <p id="ipfslinktitle" hidden = "hidden"></p>
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

    <div class="modal-loading modal-dialog" id ="modal-loading" hidden="true">
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



    <!-- SUBMISSION COMPLETE MODAL -->

  <div class="modal-submission modal-dialog" id ="modal-submission" hidden="false">
    <div id= "modal-sale" >
    <br/>
      <h1> Your file has successfully been put up for sale</h1>
          <button type="button" class="modal-close" onclick="App.CloseSubmission();">&times;</button>
    </div>
  </div>

    <!-- RECEIPT MODAL -->
  
  <div class="modal-receipt modal-dialog" id ="modal-receipt" hidden="true">
    <div id= "modal-purchase" >
      <h1> Thank you for your purchase!</h1>
        <br/>
        <br/>
        <br/>
      <a id="readlink" href="somelink.com"><button class="download-button">Download Link</button></a>
      <button type="button" class="modal-close" onclick="App.CloseReceipt();">&times;</button>
    </div>
  </div>

    <!-- ERROR MODAL -->

  <div class="modal-error modal-dialog" id ="modal-error" hidden="true">
      <h1> Whoops! Looks like something went wrong.</h1>
          <button type="button" class="modal-close" onclick="App.CloseError();">&times;</button>
  </div>


  </section>
</template>


<script>
export default {
fetch({store, redirect}) {
	if ((!store.state.user) || (!store.state.user)) {
	App.reloadArticlesPage()
	}
	else {
	App.reloadArticlesPage()
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
.table1-header{

    
    height: 40px;
    width: 1150px;
    position: absolute;
    left: 80px;
    top:100px;
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

}


.navbar-default {
    text-align: center;
    color: white;
}




.modal{
    display: none;
    

}


.modal-receipt{

    height: 300px;
    width: 650px;
    position: absolute;
    left: 700px;
    top:200px;
    color: white;


}

.modal-submission{

    height: 300px;
    width: 650px;
    position: absolute;
    left: 700px;
    top:500px;
}

.modal-submission h1{

    font-size: 20px;
    color:white;
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
    color:white;
    position: absolute;
    top:50px;

}

.modal-error{

    height: 400px;
    width: 400px;
    position: absolute;
    left: 700px;
    top:200px;
    color: white;
    transition: all 5s ease-in-out;

}



.loading-animation{

    
    position: absolute;
    left: 160px;
    top:200px;



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

.modal-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.9);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
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


</style>
