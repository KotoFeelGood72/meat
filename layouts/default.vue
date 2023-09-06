<template>
  <div>
    <Header @visible-burger="openBurger" :class="{'dark': getModalBurger}"/>
    <Nuxt />
    <transition name="translate">
      <modalBurger v-if="getModalBurger" :class="{'translateY': getModalBurger}"/>
    </transition>
  </div>
</template>

<script>
  import Header from '@/components/header/header.vue';
  import modalBurger from '../components/modal/modalBurger.vue';
  export default {
    components: {
      Header,
      modalBurger
    },
    methods: {
      openBurger() {
        this.$store.commit('openPopup', 'burger')
      }
    },
    computed: {
      getModalBurger() {
        return this.$store.getters.getPopup('burger')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>