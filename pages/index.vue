<template>
  <div class="hero">
    <h1>Копченыеи полукопченые колбасы </h1>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layouts: 'default',
}
</script>


<style lang="scss">
  .hero {
    height: calc(100vh + 128px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../assets/img/hero.jpg') center/cover no-repeat;
    margin-top: -128px;

    h1 {
      font-size: 100px;
      color: white;
      font-weight: 800;
      max-width: 60%;
      text-align: center;
      line-height: 100px;
    }
  }
</style>