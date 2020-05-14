<template>
  <section>

 
    <h1>Sell Data Here</h1>

    <v-data-table :items="videos" :headers="headers">

    </v-data-table>

  </section>
</template>

<script>
export default {
computed: {
	headers(){
		return [
		{text: 'Data', value: 'data'},
		{text: 'Decription', value: 'description'},
		{text: 'Seller', value: 'seller'},
		{text: 'Price', value: 'price'},
		{text: 'Tags', value: 'tags'}
		]
	}
}


}


</script>

<style lang="css">




</style>
