<template>
  <div class="body">
<!--    <navbar></navbar>-->

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

    <div class="hidden" :class="{scroll: scrollPosition > 300}">
      <button @click="upToTop" class="arrow-btn"><i class="fas fa-chevron-up"></i></button>
    </div>

    <div class=" ar" v-if="getLang === 'ar'">
      <div class="slider">
        <div class="slider__owl-main">
          <div class="slider__owl-main__slide-items">
            <div v-if="slider_1" class="slider__owl-main__slide-items__item animate__animated animate__fadeIn">
              <div class="slider__owl-main__slide-items__item__overlay"></div>
              <img class="slider__owl-main__slide-items__item__bg" src="../assets/img/slide_1_ar.jpg">
              <div class="slider__owl-main__slide-items__item__content">
                <div class="slider__owl-main__slide-items__item__content__main-title">
                  منصة البيانات المفتوحة للرخص التجارية
                </div>
                <div class="slider__owl-main__slide-items__item__content__sub-title">
                  تمكنك من معرفة الانتشار الجغرافي على الخارطة للرخص التجارية الصادرة حسب الأنشطة
                </div>
                <div class="slider__owl-main__slide-items__item__content__btn btn--animated mt-4 mr-3">
                  <router-link to="">تعرف علي المزيد</router-link>
                </div>
              </div>
            </div>
            <div v-if="slider_2" class="slider__owl-main__slide-items__item animate__animated animate__fadeIn">
              <div class="slider__owl-main__slide-items__item__overlay"></div>
              <img class="slider__owl-main__slide-items__item__bg" src="../assets/img/slide_2_ar.jpg">
              <div class="slider__owl-main__slide-items__item__content">
                <div class="slider__owl-main__slide-items__item__content__main-title">
                  منصة البيانات المفتوحة للرخص التجارية
                </div>
                <div class="slider__owl-main__slide-items__item__content__sub-title">
                  تمكنك من معرفة الانتشار الجغرافي على الخارطة للرخص التجارية الصادرة حسب الأنشطة
                </div>
                <div class="slider__owl-main__slide-items__item__content__btn btn--animated mt-4 mr-3">
                  <router-link to="">تعرف علي المزيد</router-link>
                </div>
              </div>
            </div>
            <div v-if="slider_3" class="slider__owl-main__slide-items__item animate__animated animate__fadeIn">
              <div class="slider__owl-main__slide-items__item__overlay"></div>
              <img class="slider__owl-main__slide-items__item__bg" src="../assets/img/slider_3_ar.jpg">
              <div class="slider__owl-main__slide-items__item__content">
                <div class="slider__owl-main__slide-items__item__content__main-title">
                  منصة البيانات المفتوحة للرخص التجارية
                </div>
                <div class="slider__owl-main__slide-items__item__content__sub-title">
                  تمكنك من معرفة الانتشار الجغرافي على الخارطة للرخص التجارية الصادرة حسب الأنشطة
                </div>
                <div class="slider__owl-main__slide-items__item__content__btn btn--animated mt-4 mr-3">
                  <router-link to="">تعرف علي المزيد</router-link>
                </div>
              </div>
            </div>
          </div>


          <div class="slider__owl-dots">
            <div  @click="displaySlider('last')" class="slider__owl-dots__next"><i class="fas fa-angle-right"></i></div>
            <div class="slider__owl-dots__slide">
              <div @click="displaySlider('slider_1')" :class="{active: slider_1}" class="slider__owl-dots__slide__item"></div>
              <div @click="displaySlider('slider_2')" :class="{active: slider_2}" class="slider__owl-dots__slide__item"></div>
              <div @click="displaySlider('slider_3')" :class="{active: slider_3}" class="slider__owl-dots__slide__item"></div>
            </div>
            <div @click="displaySlider('next')"  class="slider__owl-dots__previous"><i class="fas fa-angle-left"></i></div>
          </div>
        </div>

      </div>


    </div>

    <div v-else-if="getLang === 'en'" class="en">
      <div class="slider">
        <div class="slider__owl-main">
          <div class="slider__owl-main__slide-items">
            <div v-if="slider_1" class="slider__owl-main__slide-items__item animate__animated animate__fadeIn">
              <div class="slider__owl-main__slide-items__item__overlay"></div>
              <img class="slider__owl-main__slide-items__item__bg" src="../assets/img/slide_1_en.jpg">
              <div class="slider__owl-main__slide-items__item__content">
                <div class="slider__owl-main__slide-items__item__content__main-title">
                  What is Lorem Ipsum
                </div>
                <div class="slider__owl-main__slide-items__item__content__sub-title">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </div>
                <div class="slider__owl-main__slide-items__item__content__btn btn--animated mt-4 mr-3">
                  <router-link to="">Learn more</router-link>
                </div>
              </div>
            </div>
            <div v-if="slider_2" class="slider__owl-main__slide-items__item animate__animated animate__fadeIn">
              <div class="slider__owl-main__slide-items__item__overlay"></div>
              <img class="slider__owl-main__slide-items__item__bg" src="../assets/img/slide_2_en.jpg">
              <div class="slider__owl-main__slide-items__item__content">
                <div class="slider__owl-main__slide-items__item__content__main-title">
                  What is Lorem Ipsum
                </div>
                <div class="slider__owl-main__slide-items__item__content__sub-title">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </div>
                <div class="slider__owl-main__slide-items__item__content__btn btn--animated mt-4 mr-3">
                  <router-link to="">Learn more</router-link>
                </div>
              </div>
            </div>
            <div v-if="slider_3" class="slider__owl-main__slide-items__item animate__animated animate__fadeIn">
              <div class="slider__owl-main__slide-items__item__overlay"></div>
              <img class="slider__owl-main__slide-items__item__bg" src="../assets/img/slider_3_en.png">
              <div class="slider__owl-main__slide-items__item__content">
                <div class="slider__owl-main__slide-items__item__content__main-title">
                  What is Lorem Ipsum
                </div>
                <div class="slider__owl-main__slide-items__item__content__sub-title">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </div>
                <div class="slider__owl-main__slide-items__item__content__btn btn--animated mt-4 mr-3">
                  <router-link to="">Learn more</router-link>
                </div>
              </div>
            </div>
          </div>


          <div class="slider__owl-dots">
            <div @click="displaySlider('last')"  class="slider__owl-dots__previous"><i class="fas fa-angle-left"></i></div>
            <div class="slider__owl-dots__slide">
              <div @click="displaySlider('slider_1')" :class="{active: slider_1}" class="slider__owl-dots__slide__item"></div>
              <div @click="displaySlider('slider_2')" :class="{active: slider_2}" class="slider__owl-dots__slide__item"></div>
              <div @click="displaySlider('slider_3')" :class="{active: slider_3}" class="slider__owl-dots__slide__item"></div>
            </div>
            <div  @click="displaySlider('next')" class="slider__owl-dots__next"><i class="fas fa-angle-right"></i></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import Navbar from "@/components/ui/Navbar";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  // components: {Navbar},
  data() {
    return {
      scrollPosition: null,
      slider_1: true,
      slider_2: false,
      slider_3: false,
    }
  },
  mounted: function () {
    window.setInterval(() => {
      this.displaySlider('next')
    }, 10000);
    window.addEventListener('scroll', this.updateScroll);

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
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    upToTop() {
      window.scrollTo(0,0)
    },
    displaySlider(slider) {
      if (slider == 'slider_1') {
        this.slider_3 = false
        this.slider_2 = false
        this.slider_1 = true
      }
      else if (slider == 'slider_2') {
        this.slider_3 = false
        this.slider_1 = false
        this.slider_2 = true
      }
      else if (slider == 'slider_3') {
        this.slider_1 = false
        this.slider_2 = false
        this.slider_3 = true
      }
      else if (slider == 'next') {
        if (this.slider_1) {
          this.slider_3 = false
          this.slider_1 = false
          this.slider_2 = true
        }
        else if (this.slider_2) {
          this.slider_2 = false
          this.slider_1 = false
          this.slider_3 = true
        }
        else if (this.slider_3) {
          this.slider_2 = false
          this.slider_3 = false
          this.slider_1 = true
        }
      }
      else if (slider == 'last') {
        if (this.slider_1) {
          this.slider_1 = false
          this.slider_2 = false
          this.slider_3 = true
        }
        else if (this.slider_2) {
          this.slider_2 = false
          this.slider_3 = false
          this.slider_1 = true
        }
        else if (this.slider_3) {
          this.slider_3 = false
          this.slider_1 = false
          this.slider_2 = true
        }

      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/typography";

.body {
  height: 6000px;
}

.hidden {
  display: none;
}

.scroll {
  display: block;
  position: fixed;
  right: 5%;
  bottom: 5%;
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

.ar {
  direction: rtl;
  text-align: right;
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

      &:hover {
        background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
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

.slider {
  height: 100vh;
  position: relative;
  z-index: 999;
  opacity: 1;

  &__owl-main {
    height: 100%;

    &__slide-items {
      height: 100%;

      &__item {
        height: 100%;
        overflow: hidden;
        background-image: linear-gradient(45deg, rgba(194, 233, 221, 0.5) 1%, rgba(104, 119, 132, 0.5) 100%), linear-gradient(-45deg, #494d71 0%, rgba(217, 230, 185, 0.5) 80%);

        &__bg {
          height: 100%;
          width: 100%;
          object-fit: cover;
          vertical-align: middle;
          border-style: none;
        }

        &__overlay {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;

          &:after {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            content: "";
            background: -webkit-linear-gradient(90deg, rgba(127, 191, 65, 0) 0%, rgba(255, 255, 255, 0.9) 60%, rgba(255, 255, 255, 1) 100%);
            background: linear-gradient(90deg, rgba(127, 191, 65, 0) 0%, rgba(255, 255, 255, 0.9) 60%, rgba(255, 255, 255, 1) 100%);
            background-image: url(../assets/img/hero-after.png);
            background-size: cover;
            background-repeat: no-repeat;
          }
        }

        &__content {
          z-index: 4;
          opacity: 1 !important;
          height: 100%;
          width: 50%;
          position: absolute;
          top: 0;
          right: 0;
          padding: 0 12% 0 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-family: "The Sans Arabic";
          user-select: none;

          &__main-title {
            color: $color-primary-dark-1;
            font-size: 2.25rem;
            animation-name: moveInLeft;
            animation-duration: 1s;
            animation-timing-function: ease-out;
          }

          &__sub-title {
            text-align: justify;
            margin: 1.1rem 0;
            font-weight: 200 !important;
            padding: 0 15px;
            color: #656565;
            line-height: 1.8;
            font-size: 16px;
            animation: moveInRight 1s ease-out;
            line-height: 1.8;
          }

          &__btn a {
            text-decoration: none;
            background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
            border: 0;
            padding: 0.7rem 2rem;
            border-radius: 100px !important;
            color: $color-white;
            font-size: 1rem;
            width: max-content;
            box-shadow: 0 10px 20px rgba($color-black,.2);

            &:hover,
            &:active,
            &:focus {
              background: linear-gradient(90deg, $color-primary-dark-1, $color-primary-light);
              transform: translateY(-3px);
              box-shadow: 0 20px 30px rgba($color-black,.2);
            }

          }
        }
      }
    }

  }

  &__owl-dots {
    display: flex;
    position: absolute;
    bottom: 10%;
    right: 10%;
    z-index: 5;

    &__next,
    &__previous {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 20px;
      width: 50px;
      height: 50px;
      background-color: $color-white;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }

      i {
        font-size: 40px;
        font-weight: 100;
        color: $color-primary-dark-1;
      }
    }

    &__slide {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto 0;
      cursor: pointer;

      &__item {
        width: 80px;
        height: 3px;
        background-color: $color-primary-dark-1;
        border-radius: 10px;

        &.active {
          height: 13px;
        }
      }
    }
  }
}

.en {

  & .slider__owl-dots {
    left: 10%;
  }

  & .slider {
    &__owl-main {

      &__slide-items {

        &__item {
          background-image: linear-gradient(45deg, rgba(104, 119, 132, 0.5) 1%, rgba(194, 233, 221, 0.5) 100%), linear-gradient(-45deg, rgba(217, 230, 185, 0.5) 0%, #494d71 80%);

          &__content {
            top: 0;
            left: 0;
            padding: 0 0 0 12%;
            font-family: "We work Bold";

            &__btn a {
              background: linear-gradient(90deg, $color-primary-dark-1, $color-primary-light);

              &:hover,
              &:active,
              &:focus {
                background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
              }
            }
          }

          &__overlay {
            background-image: url(../assets/img/hero-after-en.png);
          }

        }
      }
    }

    &__owl-dots {
      right: 10%;
    }
  }

}

.btn--animated {
  animation: moveInBottom .5s ease-out .75s;
  animation-fill-mode: backwards;
}




@media (max-width: 1024px) {
  .social-media__content__button {
    margin-bottom: 7px;
  }

  .slider__owl-dots {
    right: 10%;
    bottom: 15%;

    &__next,
    &__previous {
      margin: 0 10px;
      width: 30px;
      height: 30px;

      i {
        font-size: 28px;
      }
    }

    &__slide {

      &__item {
        width: 50px;
        height: 3px;
        background-color: $color-primary-dark-1;
        border-radius: 10px;

        &.active {
          height: 10px;
        }

      }
    }
  }

  .slider__owl-main__slide-items__item__bg {
    opacity: .3;
  }

  .slider__owl-main__slide-items__item__content {
    width: 100%;
  }

  .en {
    .slider__owl-dots {
      left: 10%;
      bottom: 15%;
    }

  }
}
</style>