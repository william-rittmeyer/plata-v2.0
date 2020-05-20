<template>
  <div class="table1">
    <mdb-datatable-2 v-model="data" :searching="{value: search, field: 'office'}" />
    <mdb-input class="mt-0" v-model="search" label="Search by office" />
  </div>
</template>

<script>
  import { mdbDatatable2, mdbInput } from 'mdbvue';
  export default {
    name: 'DatatablePage',
    components: {
      mdbDatatable2,
      mdbInput
    },
    data () {
      return {
        search: '',
        data: {
          columns: [
            {
              label: 'Data',
              field: 'data',
              sort: true
            },
            {
              label: 'Description',
              field: 'description',
              sort: true
            },
            {
              label: 'Price',
              field: 'price',
              sort: false,
              format: value => value + " ETH"
            },
            {
              label: 'Seller',
              field: 'seller',
              sort: true
            },
          ],
           rows: [
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Yo Yo',
              description: 'Boss',
              price: 'Seatle',
              seller: '53',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            },
            {
              data: 'Tiger Nixon',
              description: 'System Architect',
              price: 'Boston',
              seller: '61',
            }
            ]
        }
      }
    }
  }
</script>
