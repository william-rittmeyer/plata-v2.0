<template>
  <div class="container mx-auto text-center py-16 px-6">

   <div v-if="$store.state.user">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h1 class="title">
        Welcome <b><u class="user">{{$store.state.user.email}}!</u></b> you are logged in to the home screen
      </h1>


      </div>

    <div v-if="!$store.state.user">

    <br></br>



   <img src="../assets/placeholder_logo.png" class="front_image">



      <h1 class="title text-white">
        Plata 2.0
      </h1>
      <br></br>
      <h2 class="subtitle">
        An Ethereum-based platform for exchanging digital assets
      </h2>


      <nuxt-link
            to="/login"
            class="button--green "
          >
          Login
          </nuxt-link>

          <nuxt-link
            to="/register"
            class="button--grey "
          >
          Register
          </nuxt-link>
      </div>

   
    </div>
  </div>
  </div>

</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  }
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
  font-family: sans-serif;

}
*/

.front_image {
  width: 300px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.title {
  font-family: sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: white;
  letter-spacing: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.subtitle {
  font-weight: 300;
  font-size: 35px;
  text-allign: center;
  color: white;
  word-spacing: 5px;
  padding-bottom: 15px;
  font-family: sans-serif;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);


}

.links {
  padding-top: 15px;
  font-family: sans-serif;
  
}

.user{
    font-family: sans-serif;

}




</style>
