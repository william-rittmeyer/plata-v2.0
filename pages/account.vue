<template>
  <section>

    <h1>Account Page</h1>

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
	return redirect('/registration')
	}
	}
}
</script>




<style lang="css"></style>
