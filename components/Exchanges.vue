<template>
  <ul class="exchange-list">
    <li
      class="exchange-list-item"
      v-for="(item, key) in list"
      :key="key">
      <exchange-card
        :article="item" />
    </li>
  </ul>
</template>
<script>
import ExchangeCard from '@/components/ExchangeCard'

export default {
  name: 'exchanges',
  data() {
    return {
      
    }
  },
  created() {
    console.log('Exchange created', this.list)
  },
  props: {
    list: {
      type: Array,
      default: [],
      required: false
    },
    account: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    handleBuy(article) {
      this.$emit('buyArticle', article)
    }
  },
  components: {
    ExchangeCard
  }
}
</script>
<style lang="scss">
  .exchange-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    &-item {
      box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.16);
      border-radius: 5px;
    }
  }

  @media screen and (max-width: 1180px) {
    .exchange-list {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 10px;
    }
  }
</style>
