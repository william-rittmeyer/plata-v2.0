<template>
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
      <nav>
        <div class="">
          <div class="flex justify-between items-center mx-auto p-4 sm:px-6 lg:px-8">
            <div class="flex items-center">
              <img src="../assets/placeholder_logo.png" class="corner_logo mr-4">
              <h1 class="logo_title">Plata 2.0</h1>
            </div>
            <div class="header-text flex justify-between">
              <nuxt-link
                to="/"
                class="nav-link text-base lg:text-xl text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out"
              >
                Home
              </nuxt-link>
              <nuxt-link
                to="/sell"
                class="nav-link text-base lg:text-xl text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out"
              >
              File Exchange
              </nuxt-link>
              <nuxt-link
                to="/labeling"
                class="nav-link text-base lg:text-xl text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out"
              >
              Labeling
              </nuxt-link>
              <nuxt-link
                to="/about"
                class="nav-link text-base lg:text-xl text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out"
              >
              About
              </nuxt-link>
              <nuxt-link
                v-if="!$store.state.user"
                to="/register"
                class="nav-link text-base lg:text-xl text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out"
              >
                Register
              </nuxt-link>
              <nuxt-link
                v-if="!$store.state.user"
                to="/login"
                class="nav-link text-base lg:text-xl text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out"
              >
                Login
              </nuxt-link>
              <a
                v-if="$store.state.user"
                @click="logout"
                class="nav-link text-base lg:text-xl text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out"
              >
                Logout
              </a>
              <div
                class="account inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white"
                id = "account"
              >
                {{account}}
              </div>
              <div
                class="account inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white"
                id = "accountBalance"
              >
                {{balance*(10**-18)}} ETH
              </div>
            </div>
            <nuxt-link
              to="/profile" 
              v-if="$store.state.user"
            >
              <svg
                fill="currentColor" 
                viewBox="0 0 20 20" 
                class="mt-1 w-8 h-8 text-white"
              >
                <path 
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"
                ></path>
              </svg>
            </nuxt-link>
            <nuxt-link
              v-if="$store.state.user"
              to="/profile"
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
            >Profile
            </nuxt-link>
          </div>
        </div>
      </nav>
      <div>
        <p class="text-bottom" credit><a href="https://sensorweb.engr.uga.edu/">SensorWeb Research Laboratory</a> - &copy; 2020 - <a href="https://sensorweb.engr.uga.edu/index.php/people/">William Rittmeyer</a> and <a href="https://sensorweb.engr.uga.edu/index.php/people/">Soumya Pal</a></p>
      </div>
      <div class="container">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import { web3 } from '@/mixins/web3'

export default {
  mixins: [web3],
  methods: {
    async logout() {
      try {
        await this.$axios.post('/api/logout')
        this.$store.commit('SET_USER',null)
        if ((this.$route.path === '/profile') ||
          (this.$route.path === '/sell') ||
          (this.$route.path === '/database'))
          { 
            this.$router.push('/')
          }
      }  catch (err) {
        throw new Error(err)
      }
    }
  }

}
</script>

<style lang="scss">

/* DEFAULT */

.body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
}


*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.account{
  font-family: sans-serif;

}

.background {
  position: absolute;
  width: 100%;
  height: 100vh;
}

nav {
  position: relative;
  z-index: 100;
}

.nav-link {
  &:hover {
    color: #03e9f4;
  }
}

.nuxt-link-exact-active {
  color: #03e9f4;
}

.button--1 {
  font-family: sans-serif;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid white;
  color: white;
  width: 7%;
  text-decoration: none;
  padding: 10px 30px;
  position: fixed;
  top: 87%;
  left: 47%;
  margin-top: -50px;
  margin-left: -100px;
  text-align: center;

}

.button--1:hover {
  color: black;
  background-color: white;
}

.button--2 {
  font-family: sans-serif;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid white;
  width: 7%;
  color: white;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
  position: fixed;
  top: 87%;
  left: 57%;
  margin-top: -50px;
  margin-left: -100px;
  text-align: center;
}


.button--2:hover {
  color: black;
  background-color: white;
}

.header-text {
  font-family: sans-serif;
  }

/* ANIMATION BACKGROUND */

.animation-area{
  background: linear-gradient(to left, rgb(0, 0, 0), rgb(55, 55, 55));
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


.box-area li {
  position: absolute;
  display: block;
  list-style: none;
  width: 25px;
  height: 25px;
  background: rgba(255,255,255,0.2);
  animation: animate 20s linear infinite;
  bottom: -150px;
}

.box-area li:nth-child(1) {
  left: 86%;
  width: 80px;
  height: 80px;
  animation-delay: 14s;
}
.box-area li:nth-child(2) {
  left: 30%;
  width: 30px;
  height: 30px;
  animation-delay: 5s;
  animation-duration: 12s;
}
.box-area li:nth-child(3) {
  left: 70%;
  width: 60px;
  height: 60px;
  animation-delay: 25s;
}
.box-area li:nth-child(4) {
  left: 42%;
  width: 30px;
  height: 30px;
  animation-delay: 22s;
  animation-duration: 27s;
}

.box-area li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-duration: 20s;
  animation-delay:8s;
}

.box-area li:nth-child(6) {
  left: 5%;
  width: 150px;
  height: 150px;
  animation-duration: 25s;
  animation-delay: 12s;
}

.box-area li:nth-child(7) {
  left: 28%;
  width: 30px;
  height: 30px;
  animation-duration: 10s;
  animation-delay: 25s;
}

.box-area li:nth-child(8) {
  left: 50%;
  width: 180px;
  height: 180px;
  animation-duration: 30s;
  animation-delay: 0s;
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

/* FOOTER */

.text-bottom {
  color: white;
  position: fixed;
  bottom: 1px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: sans-serif;
}

.text-bottom a {
  font-family: sans-serif;
}

.text-bottom a:hover {
  color: #03e9f4;
}

/* CORNER LOGO */

.corner_logo {
  width: 80px;
}

.logo_title {
  font-size: 35px;
  color: white;
  font-family: sans-serif;
}

</style>
