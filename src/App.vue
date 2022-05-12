<template>
  <div id="app">
    <div class="social-media">
      <div class="social-media__initi-grad-bg"></div>
      <div class="social-media__content">
        <a href="https://www.facebook.com/" target="_blank" class="social-media__content__button"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/" target="_blank" class="social-media__content__button"><i class="fab fa-twitter"></i></a>
        <a href="https://www.facebook.com/" target="_blank" class="social-media__content__button"><i class="fab fa-youtube"></i></a>
        <a href="https://www.facebook.com/" target="_blank" class="social-media__content__button"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.facebook.com/" target="_blank" class="social-media__content__button"><i class="fab fa-snapchat"></i></a>
        <a href="https://www.facebook.com/" target="_blank" class="social-media__content__button"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>

    <div class="hidden" :class="{scroll: scrollPosition > 200}">
      <button @click="upToTop" class="arrow-btn"><i class="fas fa-chevron-up"></i></button>
    </div>

    <router-view />
  </div>
</template>

<script>

export default {
  data() {
    return {
      scrollPosition: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  created() {
    this.$store.dispatch('main/tryToGetLang');
    console.log("App -- Lang = " , this.$store.getters["main/getLang"])
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    upToTop() {
      window.scrollTo(0,0)
    },
  }
}
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
  transition: .4s all;
}

.ar {
  text-align: right;
  direction: rtl;
}

.en {
  text-align: left;
  direction: ltr;
}


.breadcrumb-section {
  color: $color-primary;

  &__link {
    color: $color-primary;
    margin: 0 5px;
    text-decoration: none;

    &:hover {
      color: $color-primary;
      text-decoration: none;
      padding-bottom: 8px;
      border-bottom: 1px solid $color-primary;
    }
  }

  &__icon, &__span {
    margin: 0 5px;

  }
}

.title-section__text {
  color: $color-primary;
  font-weight: 700 !important;
  font-size: 28px;
  font-family: 'We work Bold' !important;
  line-height: 1.4;
}

.calendar-section {
  color: $color-primary;
  padding: 0 10px;
}

.hidden {
  display: none;
}

.scroll {
  display: block;
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 10000;
}

.arrow-btn {
  border: none;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);

  &:hover {
    transform: scale(1.2);
  }

  & i {
    color: $color-white;
    font-size: 30px;
  }
}

.social-media {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translate(0, -35%);
  z-index: 1000;
  height: auto;
  width: auto;
  transition: 0.3s;

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    background: white;
    border-radius: 0 8px 40px 0 !important;
    background-position-x: 0 !important;
    background-size: 100% !important;
    box-shadow: 0 0 20px #0000000d;
    position: relative;
    word-wrap: break-word;

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      color: $color-white;
      width: 30px;
      height: 30px;
      background: $color-grey-dark-2;
      border-radius: 100px !important;
      text-decoration: none;
      text-decoration: none;

      &:hover {
        background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
        text-decoration: none;
      }
    }

    & i {
      color: $color-white;
      transition: 0.4s all;
    }
  }

  &__initi-grad-bg {
    z-index: -1;
    left: 0 !important;
    right: 0 !important;
    background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
    display: block;
    height: 100%;
    position: absolute;
    top: 5px;
    bottom: 0;
    border-radius: 8px !important;
  }

}

@media (max-width: 1024px) {
  .social-media__content__button {
    margin-bottom: 7px;
  }
}
</style>
