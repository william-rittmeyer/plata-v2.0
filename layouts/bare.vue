<template>
  <section>
  <div class="animation-area" id ="animation-area" style="filter: blur(0px); filter: brightness(1);">  

    <ul class="box-area">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>  

  	<nuxt />

  </div>
  	
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css">

.animation-area{
    background: linear-gradient(to left, rgb(0, 69, 231), rgb(0, 219, 243));
    width:100%;
    height: 100vh;
    z-index: -5;

}


.box-area{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    overflow: hidden;
    z-index: -3;


}


.box-area li{
    position: absolute;
    display: block;
    list-style: none;
    width: 25px;
    height: 25px;
    background: rgba(255,255,255,0.2);
    animation: animate 20s linear infinite;
    bottom: -150px;
   

}

.box-area li:nth-child(1){
    left: 86%;
    width: 80px;
    height: 80px;
    animation-delay: 14s;

}
.box-area li:nth-child(2){
    left: 30%;
    width: 30px;
    height: 30px;
    animation-delay: 5s;
    animation-duration: 12s;

}
.box-area li:nth-child(3){
    left: 70%;
    width: 60px;
    height: 60px;
    animation-delay: 25s;

}
.box-area li:nth-child(4){
    left: 42%;
    width: 30px;
    height: 30px;
    animation-delay: 22s;
    animation-duration: 27s;
}

.box-area li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-duration: 20s;
    animation-delay:8s;
}
.box-area li:nth-child(6){
    left: 5%;
    width: 150px;
    height: 150px;
    animation-duration: 25s;
    animation-delay:12s;
}
.box-area li:nth-child(7){
    left: 28%;
    width: 30px;
    height: 30px;
    animation-duration: 10s;
    animation-delay:25s;
}

.box-area li:nth-child(8){
    left: 50%;
    width: 180px;
    height: 180px;
    animation-duration: 30s;
    animation-delay:0s;
}


@keyframes animate{
    0%{
        transform: translateY(200px) rotate(0deg);
        opacity: 1;
    }
    100%{
        transform: translateY(-800px) rotate(360deg);
        opacity: 0;
    }

}




</style>
