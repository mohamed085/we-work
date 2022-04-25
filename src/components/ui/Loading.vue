<template>
  <div v-if="$store.getters['main/getLang'] == 'en'" class="loading animate__animated animate__fadeIn">
    <div class="loading__logo">
      <img class="loading__logo__img"
           data-aos="zoom-in-right"
           data-aos-easing="ease-in-sine"
           data-aos-duration="1000"
           data-aos-offset="300"
           src="../../assets/img/iwork.png">
      <h1 class="loading__logo__title"
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-offset="300"
      >We Work</h1>
    </div>
  </div>

  <div v-else class="loading animate__animated animate__fadeIn">
    <div class="loading__logo">
      <h1 class="loading__logo__title"
          data-aos="zoom-in-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-offset="300"
      >We Work</h1>
      <img class="loading__logo__img"
           data-aos="zoom-in-left"
           data-aos-easing="ease-in-sine"
           data-aos-duration="1000"
           data-aos-offset="300"
           src="../../assets/img/iwork.png">
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Loading"
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";


.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-primary;

  &__logo {
    display: flex;
    justify-content: center;

    &__img {
      width: 100px;
      height: 100px;
    }

    &__title {
      font-family: "We work Bold";
      margin: auto 10px;
      color: $color-white;
    }
  }
}
</style>