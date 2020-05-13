<template>
  <div class="container mx-auto text-center py-16 px-6">

   <div v-if="$store.state.user">
      <h1 class="text-4xl text-white">
        Plata 2.0
      </h1>
      <h2 class="subtitle">
        Welcome!!! you are logged in to the home screen
      </h2>


      <nuxt-link
            to="/account"
            class="button--green "
          >
          Login
          </nuxt-link>

          <nuxt-link
            to="/about"
            class="button--grey "
          >
          About
          </nuxt-link>

      </div>

    <div v-if="!$store.state.user">
      <h1 class="text-4xl text-white">
        Plata 2.0
      </h1>
      <h2 class="subtitle">
        An Ethereum-based platform for exchanging digital assets
      </h2>

      <nuxt-link
            to="/account"
            class="button--green "
          >
          Login
          </nuxt-link>

          <nuxt-link
            to="/about"
            class="button--grey "
          >
          About
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
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;

}
*/


.title {
  font-family: 'Arial', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: white;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  text-allign: center;
  color: white;
  word-spacing: 5px;
  padding-bottom: 15px;

}

.links {
  padding-top: 15px;
}


</style>
