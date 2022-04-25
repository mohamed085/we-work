<template>
  <div class="carousel" v-if="getLang === 'en'">
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
          <div class="carousel-section">
            <img
                class="d-block img-fluid w-100 carousel-section__carousel-img"
                width="1024"
                height="480"
                src="../../assets/img/slideshow/slideshow1.jpg"
                alt="image slot"
            >
            <div class="carousel-section__carousel-content">
              <h1 class="heading-primary">
                <span class="heading-primary--main">We Work</span>
                <span class="heading-primary--sub mt-2">We Are Creative</span>
              </h1>
              <router-link to="/" class="carousel-section__carousel-content__btn btn--animated">Read more</router-link>

            </div>
          </div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <div class="carousel-section">
            <img
                class="d-block img-fluid w-100 carousel-section__carousel-img"
                width="1024"
                height="480"
                src="../../assets/img/slideshow/slideshow2.jpg"
                alt="image slot"
            >
            <div class="carousel-section__carousel-content">
              <h1 class="heading-primary">
                <span class="heading-primary--main">If You Do,</span>
                <span class="heading-primary--sub mt-2">You Will Never Cease To Grow</span>
              </h1>
              <router-link to="/" class="carousel-section__carousel-content__btn btn--animated">Read more</router-link>

            </div>
          </div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <div class="carousel-section">
            <img
                class="d-block img-fluid w-100 carousel-section__carousel-img"
                width="1024"
                height="480"
                src="../../assets/img/slideshow/slideshow3.jpg"
                alt="image slot"
            >
            <div class="carousel-section__carousel-content">
              <h1 class="heading-primary">
                <span class="heading-primary--sub">Develop a Passion For Learning</span>
              </h1>
              <router-link to="/" class="carousel-section__carousel-content__btn btn--animated">Read more</router-link>

            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>

  <div class="carousel" v-else-if="getLang === 'ar'">
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
          <div class="carousel-section">
            <img
                class="d-block img-fluid w-100 carousel-section__carousel-img"
                width="1024"
                height="480"
                src="../../assets/img/slideshow/slideshow1.jpg"
                alt="image slot"
            >
            <div class="carousel-section__carousel-content">
              <h1 class="heading-primary">
                <span class="heading-primary--main">وي ورك</span>
                <span class="heading-primary--sub mt-2">نحن مبدعون</span>
              </h1>
              <router-link to="/" class="carousel-section__carousel-content__btn btn--animated">اقرأ أكثر</router-link>

            </div>
          </div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <div class="carousel-section">
            <img
                class="d-block img-fluid w-100 carousel-section__carousel-img"
                width="1024"
                height="480"
                src="../../assets/img/slideshow/slideshow2.jpg"
                alt="image slot"
            >
            <div class="carousel-section__carousel-content">
              <h1 class="heading-primary">
                <span class="heading-primary--main">اذا اردت</span>
                <span class="heading-primary--sub mt-2">لا تتوقف عن النمو</span>
              </h1>
              <router-link to="/" class="carousel-section__carousel-content__btn btn--animated">اقرأ أكثر</router-link>

            </div>
          </div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <div class="carousel-section">
            <img
                class="d-block img-fluid w-100 carousel-section__carousel-img"
                width="1024"
                height="480"
                src="../../assets/img/slideshow/slideshow3.jpg"
                alt="image slot"
            >
            <div class="carousel-section__carousel-content">
              <h1 class="heading-primary">
                <span class="heading-primary--sub">تطوير العاطفة للتعلم</span>
              </h1>
              <router-link to="/" class="carousel-section__carousel-content__btn btn--animated">اقرأ أكثر</router-link>

            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  methods: {
    setLang(lang) {
      this.$store.dispatch('main/setLang', lang);
    },
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";
@import "../../assets/scss/typography";

.carousel-section {
  position: relative;

  &__carousel-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $color-white;

    &__btn {
      text-align: center;
      text-decoration: none;
      background-color: $color-white;
      border-radius: 25px;
      color: $color-primary;
      text-transform: uppercase;
      padding: 15px 40px;
      display: inline-block;
      transition: all .2s;
      position: relative;
      font-size: 16px;
      margin: 0 10px;
      //Change for the <button> element
      border: none;
      cursor: pointer;

      &:active,
      &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba($color-black,.2);
      }

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba($color-black,.2);
        color: $color-white;
        background-color: $color-primary;

        &::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;
        }
      }

    }
  }
}

.btn--animated {
  animation: moveInBottom .5s ease-out .75s;
  animation-fill-mode: backwards;
}

.ar {
  direction: rtl;
  text-align: right ;
}

</style>