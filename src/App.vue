<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

</script>

<style lang="scss">
@import 'animate.css';
@import "assets/scss/variables";

@font-face {
  font-family: 'We work Regular';
  src: url(assets/fonts/SWCC-2-Regular.ttf);
}

@font-face {
  font-family: 'We work Medium';
  src: url(assets/fonts/SWCC-3-Medium.ttf);
}

@font-face {
  font-family: 'We work Bold';
  src: url(assets/fonts/SWCC-4-Bold.ttf);
}

@font-face {
  font-family: 'The Sans Arabic';
  src: url(assets/fonts/THESANSARABIC-BOLD.ttf);
}

* {
  box-sizing: border-box;
}
nav {
  position: fixed;
  top: 0;

  a {
    color: #2c3e50;

    &.active {
      color: #42b983;
    }
  }
}

.breadcrumb-section {
  color: $color-white;

  &__link {
    color: $color-white;
    margin: 0 5px;
    text-decoration: none;

    &:hover {
      color: $color-white;
      text-decoration: none;
      padding-bottom: 8px;
      border-bottom: 1px solid $color-white;
    }
  }

  &__icon, &__span {
    margin: 0 5px;

  }
}

.title-section__text {
  color: $color-white;
  font-weight: 700 !important;
  font-size: 28px;
  font-family: 'The Sans Arabic' !important;
  line-height: 1.4;
  letter-spacing: 3px;
}

.calendar-section {
  color: $color-white;
  padding: 0 10px;
}


</style>
