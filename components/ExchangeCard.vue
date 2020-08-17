<template>
  <div class="exchange-detail flex">
    <div class="exchange-detail-side">
      <img class="exchange-detail-image" :src="images[Math.floor(Math.random() * images.length)]" :alt="'bg-item' + article.id">
    </div>
    <div class="exchange-detail-side">
      <p class="exchange-detail-name sm:text-sm md:text-base">{{article.name}}</p>
      <p class="exchange-detail-text sm:text-sm">{{article.description}}</p>
      <p class="exchange-detail-text sm:text-sm">{{article.etherPrice}} ETH</p>
      <p class="exchange-detail-text sm:text-sm">{{article.sellerType}}</p>
      <p class="my-2">
        <button
          class="text-base text-white font-bold py-2 px-4 rounded"
          type="button"
          v-on:data-value="article.etherPrice"
          v-if="account !== article.sellerType"
          @click="buyArticle(article)">Buy</button>
      </p>
    </div>
  </div>
</template>
<script>
import { web3 } from '@/mixins/web3'

export default {
  name: 'exchange-card',
  mixins: [web3],
  data() {
    return {
      images: [
        '/backgrounds/1bg.jpeg',
        '/backgrounds/2bg.jpeg',
        '/backgrounds/3bg.jpeg',
        '/backgrounds/4bg.jpeg',
        '/backgrounds/5bg.jpeg',
        '/backgrounds/6bg.jpeg',
        '/backgrounds/7bg.jpeg',
        '/backgrounds/8bg.jpeg',
        '/backgrounds/9bg.jpeg',
        '/backgrounds/10bg.jpeg',
        '/backgrounds/11bg.jpeg',
        '/backgrounds/12bg.jpeg',
        '/backgrounds/13bg.jpeg',
        '/backgrounds/14bg.jpeg'
      ]
    }
  },
  created() {
    console.log('Exchange article created', this.article)
  },
  props: {
    article: {
      type: Object,
      default: {},
      required: true
    }
  }
}
</script>
<style lang="scss">
  .exchange-detail {
    &-image {
      max-width: 170px;
      margin-right: 15px;
    }

    &-name {
      color: #03e9f4;
      font-size: 11px;
      margin: 10px 0;
      letter-spacing: 2px;
      text-transform: uppercase;
      transition: .5s;
    }

    &-text {
      color: white;
      font-size: 12px;
      word-break: break-word;
    }

    button {
      background-color: transparent;
      border: 1px solid #03e9f4;
      color: #03e9f4;
      display: inline-block;
      font-size: 14px;
      letter-spacing: 4px;
      overflow: hidden;
      padding: 10px 20px;
      position: relative;
      transition: .5s;
      text-decoration: none;
      text-transform: uppercase;

      &:hover {
        background-color: #03e9f4;
        border-radius: 5px;
        box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 0px #03e9f4, 0 0 0px #03e9f4;
        color: #fff;
      }
    }
  }
</style>
