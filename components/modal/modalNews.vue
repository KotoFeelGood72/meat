<template>
  <div class="news-modal">
    <div class="news_modal--main">
      <div class="news-head flex items-center justify-between mb-[24px]">
        <h3 class="text-24xl font-extrabold">Новости</h3>
        <div class="news-close w-[40px] h-[40px] flex items-center justify-center">
          <button type="button" @click="changeVisibleModal">
            <img :src="require('@/assets/img/icons/close.svg')" alt="">
          </button>
        </div>
      </div>
      <div class="news-body border-b border-1 border-[#D1D1D1] pb-[8px] mb-[24px]">
        <ul>
          <li v-for="item in 3" :key="'popup-news-item-' + item" class="mb-[16px]">
            <nuxt-link to="/">
              <p class="mb-[4px]">Сегодня день рождения нашего директора! Поздравляем всем коллективом!</p>
              <span class="text-customGrey font-semibold">18.11.2022</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="news-bottom flex items-center justify-between">
        <p class="font-semibold text-dark">Все новости</p>
        <nuxt-link to="/" class="w-[48px] h-[48px] flex items-center justify-center bg-honey rounded-full">
          <img :src="require('@/assets/img/icons/arrow.svg')" alt="" class="w-[26px] h-[22px]">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      changeVisibleModal() {
        this.$store.commit('openPopup', 'news')
      }
    },
  }
</script>

<style lang="scss" scoped>


.news-modal {
  position: absolute;
  top: 0;
  left: 0;
  // width: 392px;
  padding: 24px 32px 32px 40px;
  border-radius: 24px;
  background-color: #fff;
  color: #242424;
  transition: all .4s ease;
  overflow: hidden;

  &.active {
   .news_modal--main {
    opacity: 1;
    visibility: visible;
   } 
  }
}

.news_modal--main {
  transition-delay: 1s;
  opacity: 0;
  visibility: hidden;
}

</style>