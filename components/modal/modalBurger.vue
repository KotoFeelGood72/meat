<template>
  <div class="burger">
    Burger
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.burger {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  font-weight: 800;
  // transform: translateY(-100%);
  // transition: all .4s ease;

  // &.translateY {
  //   transform: translateY(0);
  // }
}

.translate-enter-active, .translate-leave-active {
  transition: all .4s ease;
  // transform: translateY(0);
}

.translate-enter, .translate-leave-to {
  transform: translateY(-100%);
  transition: all .4s ease;
}
</style>