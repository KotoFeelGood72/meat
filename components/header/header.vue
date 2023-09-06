<template>
  <header class="header text-white">
    <div class="container">
      <div class="flex items-center justify-between pt-[32px] pb-[40px]">
        <div class="flex items-center">
          <div class="logo w-[140px] mr-[48px]">
            <nuxt-link to="/">
              <img :src="require('~/assets/img/logo.svg')" alt="" class="logo-white">
              <img :src="require('~/assets/img/logo-dark.svg')" alt="" class="logo-dark">
            </nuxt-link>
          </div>
          <div class="relative">

            <div class="note w-[40px] min-w-[40px] h-[40px] mr-[57px] relative" :class="{'active': !getModalNews}">
              <button type="button" class="flex items-center w-full h-full" @click="changeVisibleModal()">
                <img class="w-full h-full" :src="require('~/assets/img/note.gif')" alt="">
              </button>
            </div>
            <transition name="fade">
              <modalNews v-if="getModalNews" :class="{'active': getModalNews}"/>
            </transition>
          </div>
          <div class="search flex items-center cursor-pointer animate-change-txt">
            <icons icon="ph:magnifying-glass" width="22" height="22" class="mr-[4px]"/>
            <p class="text-[16px] font-semibold" data-link="Поиск">Поиск</p>
          </div>
        </div>
        <div class="w-full flex items-center justify-end">
          <nav class="w-ful mr-[40px]">
            <ul class="navigation">
              <li v-for="(item, i) in nav.nav" :key="'navigation' + i">
                <nuxt-link :to="item.link" class="text-[16px] font-semibold">
                <p :data-link="item.name">{{ item.name }}</p>
                </nuxt-link>
              </li>
            </ul>
          </nav>
          <div class="burger-trigger" @click="openBurger">
            <span v-for="item in 4" :key="'burger-line-' + item"></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import nav from '@/data/nav';
  import modalNews from '@/components/modal/modalNews'
  import icons from '@/components/icons/icons'
  export default {
    data: () => ({
      nav
    }),
    components: {
      modalNews,
      icons
    },
    methods: {
      openBurger() {
        this.$emit('visible-burger')
      },
      changeVisibleModal() {
        this.$store.commit('openPopup', 'news')
      }
    },
    computed: {
      getModalNews() {
        return this.$store.getters.getPopup('news')
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";

.header {
  z-index: 100;
  position: relative;
  .logo-dark {
      display: none;
    }
  &.dark {
    color: #3F3F3F;

    .logo-white {
      display: none;
    }
    .logo-dark {
      display: block;
    }
    .burger-trigger {
      border-color: #3F3F3F!important;
      span {
        background-color: #3F3F3F;
      }
    }
    a {
      &:before {
        background-color: #3F3F3F;
      }
    }
  }
}


.fade-enter-active, .fade-leave-active {
  // transition: all .4s ease;
  // width: 392px;
  // height: 100%;
  transition: all .4s ease;
  opacity: 1;
  visibility: visible;
}
:deep(.news-modal) {
  width: 392px;
  height: 548px;
}

.fade-enter, .fade-leave-to {
  width: 0;
  height: 0;
  // transform: scaleY(0);
  // transform-origin: left top;
  transition: all .4s ease;
  opacity: 0;
  visibility: hidden;
}


.note {
  transition: all .4s ease;
  opacity: 0;
  visibility: hidden;
  &.active {
    position: relative;
    z-index: 999;
    opacity: 1;
    visibility: visible;
    button {
      border-radius: 0px 24px 24px 24px;
      overflow: hidden;
    }
  }
  button {
      border-radius: 24px;
      overflow: hidden;
    }
  position: relative;
  &:after {
    content: '';
    width: 13px;
    height: 13px;
    background-color: #61B743;
    border-radius: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}

.container {
  margin: 0 auto;
  padding: 0;
}



nav {
  overflow: hidden;
  height: 29px;
}

.navigation {
  margin: -37px -37px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  // width: 100%;
  li {
    padding: 37px 37px 0 0;
    a {
      
      padding-left: 28px;
      position: relative;
      display: flex;
      flex-direction: column;
      @include animate-text;
        &:before {
            height: 2px;
            width: 20px;
            background-color: #fff;
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
          }
    }
  }
}


.burger-trigger {
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  position: relative;
  border: 2px solid #fff;
  cursor: pointer;
  overflow: hidden;
  transition: all .3s ease;
  &:hover {
    transform: scale(1.10);
    span {
      &:nth-child(1), 
      &:nth-child(2) {
        top: -10px;
        opacity: 0;
      } 

      &:nth-child(3) {
        top: calc(50% - 3px);
        transform: translate(-50%, -50%);
        opacity: 1;
        visibility: visible;
      } 
      &:nth-child(4) {
        top: calc(50% + 3px);
        transform: translate(-50%, -50%);
        opacity: 1;
        visibility: visible;
      } 
    }
  }

  span {
    position: absolute;
    transition: all .3s ease;
    background-color: #fff;
    width: 24px;
    height: 2px;
    display: block;
    left: 50%;
    transform: translateX(-50%);
    &:nth-child(1), &:nth-child(3) {
      top: calc(50% - 3px);
      transform: translate(-50%, -50%);
    }
    &:nth-child(2), &:nth-child(4) {
      top: calc(50% + 3px);
      transform: translate(-50%, -50%);
    }

    &:nth-child(3), &:nth-child(4) {
      top: 80%;
      opacity: 0;
      visibility: hidden
    }
  }
}

.animate-change-txt {
  @include animate-text;
  height: 24px;
  overflow: hidden;
  position: relative;
}
</style>