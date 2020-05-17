<template>

  <section>
   <h1 class="sell">
        File exchange page
      </h1>


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
	}

}

</script>

<style lang="css">

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


</style>

