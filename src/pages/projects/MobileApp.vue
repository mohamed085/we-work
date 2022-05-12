<template>
  <div class="mobile-app">
    <navbar></navbar>

    <div class="ar" v-if="getLang === 'ar'">
      <div class="page-header">
        <div class="container">
          <div class="breadcrumb-section">
            <router-link class="breadcrumb-section__link" to="/">الصفحة الرئيسية</router-link>
            <i class="fas fa-angle-left breadcrumb-section__icon"></i>
            <router-link class="breadcrumb-section__link" to="/projects">المشاريع</router-link>
            <i class="fas fa-angle-left breadcrumb-section__icon"></i>
            <router-link class="breadcrumb-section__link" to="/mobile-applications">تطبيقات الهاتف الجوال</router-link>
            <i class="fas fa-angle-left breadcrumb-section__icon"></i>
            <span class="breadcrumb-section__span">تطبيق تست</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">تطبيق تست</h2>
          </div>

          <div class="calendar-section mt-5 mb-3">
            <i class="fas fa-calendar-alt ml-2"></i>
            <span>آخر تحديث 1443/07/10 الموافق 2022/02/11</span>
          </div>
        </div>
      </div>

      <main class="app">
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="app__details">
              <div class="row">
                <div class="col-12 col-md-6 app__details__info">
                  <div class="app__details__info__logo">
                    <img src="../../assets/img/mobile_apps/app_logo.png">
                  </div>
                  <span class="app__details__info__title">تطبيق تست</span>
                  <span class="app__details__info__sub-title">عن التطبيق</span>
                  <span class="app__details__info__about">
                    الأول كل ملفوظ مفهوم المعنى من الكتاب والسنة سواء كان ظاهرا أو نصا أو مفسرا حقيقة أو مجازا عاما أو خاصا اعتبارا منهم للغالب، لأن عامة ما ورد من صاحب الشرع نصوص، وهذا المعنى هو المراد بالنصوص في قولهم عبارة النص وإشارة النص ودلالة النص واقتضاء النص. فقوله من الكتاب والسنة بيان لقوله ملفوظ، وليس المقصود حصر ذلك الملفوظ فيهما بدليل أن عبارة النص وأخواتها لا يختص بالكتاب والسنة، ولهذا قيل إن الكتاب والسنة والإجماع كلها يشترك في المتن أي ما يتضمنه الثلاثة من أمر ونهي وعام وخاص ومجمل ومبين ومنطوق ومفهوم ونحوها.
                  </span>
                  <span class="app__details__info__sub-title">تحميل التطبيق</span>
                  <div class="app__details__info__download">
                    <router-link to="">
                      <img src="../../assets/svg/play-store.svg">
                    </router-link>
                    <router-link to="">
                      <img src="../../assets/svg/app-store.svg">
                    </router-link>
                  </div>
                </div>
                <div class="col-12 col-md-6 app__details__img">
                  <div class="app__details__img__slider">
                    <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                  </div>
                  <div class="app__details__img__owl">
                    <div class="app__details__img__owl__previous"><i class="fas fa-angle-right"></i></div>
                    <div class="app__details__img__owl__slide">
                      <div class="app__details__img__owl__slide__item active"></div>
                      <div class="app__details__img__owl__slide__item"></div>
                      <div class="app__details__img__owl__slide__item"></div>
                    </div>
                    <div class="app__details__img__owl__next"><i class="fas fa-angle-left"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="app__suggest">
              <span class="app__suggest__title">أطلع أيضًا على</span>
              <div class="app__suggest__items">
                <div class="app__suggest__items__item">
                  <div class="app__suggest__items__item__logo">
                    <img src="../../assets/img/mobile_apps/app_logo.png">
                  </div>
                  <span class="app__suggest__items__item__title">تطبيق تست</span>
                </div>
                <div class="app__suggest__items__item">
                  <div class="app__suggest__items__item__logo">
                    <img src="../../assets/img/mobile_apps/app_logo.png">
                  </div>
                  <span class="app__suggest__items__item__title">تطبيق تست</span>
                </div>
                <div class="app__suggest__items__item">
                  <div class="app__suggest__items__item__logo">
                    <img src="../../assets/img/mobile_apps/app_logo.png">
                  </div>
                  <span class="app__suggest__items__item__title">تطبيق تست</span>
                </div>
                <div class="app__suggest__items__btn">
                  <router-link to="/mobile-applications">تعرف علي المزيد</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <div class="en" v-else-if="getLang === 'en'">
      <div class="page-header">
        <div class="container">
          <div class="breadcrumb-section">
            <router-link class="breadcrumb-section__link" to="/">Home</router-link>
            <i class="fas fa-angle-right breadcrumb-section__icon"></i>
            <router-link class="breadcrumb-section__link" to="/projects">Projects</router-link>
            <i class="fas fa-angle-right breadcrumb-section__icon"></i>
            <router-link class="breadcrumb-section__link" to="/mobile-applications">Mobile Applications</router-link>
            <i class="fas fa-angle-right breadcrumb-section__icon"></i>
            <span class="breadcrumb-section__span">Test app</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">Test app</h2>
          </div>

          <div class="calendar-section mt-5 mb-3">
            <i class="fas fa-calendar-alt mr-2"></i>
            <span>Last update 07/10/1443 corresponding to 02/11/2022</span>
          </div>
        </div>
      </div>

      <main class="app">
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="app__details">
              <div class="row">
                <div class="col-12 col-md-6 app__details__info">
                  <div class="app__details__info__logo">
                    <img src="../../assets/img/mobile_apps/app_logo.png">
                  </div>
                  <span class="app__details__info__title">Test App</span>
                  <span class="app__details__info__sub-title">about app</span>
                  <span class="app__details__info__about">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </span>
                  <span class="app__details__info__sub-title">Download app</span>
                  <div class="app__details__info__download">
                    <router-link to="">
                      <img src="../../assets/svg/play-store.svg">
                    </router-link>
                    <router-link to="">
                      <img src="../../assets/svg/app-store.svg">
                    </router-link>
                  </div>
                </div>
                <div class="col-12 col-md-6 app__details__img">
                  <div class="app__details__img__slider">
                    <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                  </div>
                  <div class="app__details__img__owl">
                    <div class="app__details__img__owl__previous"><i class="fas fa-angle-left"></i></div>
                    <div class="app__details__img__owl__slide">
                      <div class="app__details__img__owl__slide__item active"></div>
                      <div class="app__details__img__owl__slide__item"></div>
                      <div class="app__details__img__owl__slide__item"></div>
                    </div>
                    <div class="app__details__img__owl__next"><i class="fas fa-angle-right"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="app__suggest">
              <span class="app__suggest__title">Discover more apps</span>
              <div class="app__suggest__items">
                <div class="app__suggest__items__item">
                  <div class="app__suggest__items__item__logo">
                    <img src="../../assets/img/mobile_apps/app_logo.png">
                  </div>
                  <span class="app__suggest__items__item__title">Test App</span>
                </div>
                <div class="app__suggest__items__item">
                  <div class="app__suggest__items__item__logo">
                    <img src="../../assets/img/mobile_apps/app_logo.png">
                  </div>
                  <span class="app__suggest__items__item__title">Test App</span>
                </div>
                <div class="app__suggest__items__item">
                  <div class="app__suggest__items__item__logo">
                    <img src="../../assets/img/mobile_apps/app_logo.png">
                  </div>
                  <span class="app__suggest__items__item__title">Test App</span>
                </div>
                <div class="app__suggest__items__btn">
                  <router-link to="/mobile-applications">Show all apps</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";

export default {
  name: "MobileApp",
  components: {
    Navbar
  },
  data() {
    return {
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
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";

* {
  transition: .4s all;
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}

.ar {
  text-align: right;
  direction: rtl;
}

.page-header {
  padding-top: 100px;
}

.mobile-app {
  background: $color-grey-light-4;
  padding-bottom: 100px;
  min-height: 100vh;
}

.app {
  padding: 100px 5% 10px;

  &__details,
  &__suggest {
    background-color: #fff;
    padding: 30px;
    border-radius: 5px !important;
    box-shadow: 0 3px 20px rgb(0 0 0 / 10%);
    height: 100%;
  }

  &__details {

    &__info {
      display: flex;
      flex-direction: column;
      padding: 0 15px;
      font-family: "The Sans Arabic";

      &__logo {
        margin-bottom: 20px;

        & img {
          max-width: 100%;
          height: auto;
          border-radius: 15px;
        }
      }

      &__title {
        color: $color-primary-dark-1;
        font-weight: 700 !important;
        font-size: 30px;
        line-height: 1.4;
        margin-bottom: 20px;
      }

      &__sub-title {
        margin-bottom: 10px;
        font-size: 18px;
        color: #656565;
        font-weight: 500;
      }

      &__about {
        text-align: justify;
        margin-bottom: 20px;
        font-size: 14px;
        color: #818181;
        font-weight: 200;
      }

      &__download {
        display: flex;

        & a {
          margin: 0 5px;
        }
      }
    }

    &__img {

      &__slider {
        display: flex;
        padding: 0 3%;
        height: 85%;

        & img {
          width: 100%;
          height: 100%;
        }
      }

      &__owl {
        display: flex;
        width: 100%;
        margin-top: 30px;

        &__next,
        &__previous {
          display: flex;
          justify-content: center;
          align-items: center;
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
          width: calc(100% - 50px);

          &__item {
            width: 60px;
            height: 3px;
            background-color: $color-primary-dark-1;
            border-radius: 10px;

            &.active {
              height: 9px;
            }
          }
        }
      }

    }

  }

  &__suggest {
    display: flex;
    flex-direction: column;

    &__title {
      margin-bottom: 10px;
      font-size: 22px;
      color: #656565;
      font-weight: 500;
      font-family: "The Sans Arabic";
    }

    &__items {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      &__item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        padding: 3%;
        width: 100%;
        border-bottom: 1px solid #cccccc;

        &__logo {
          margin-bottom: 10px;
          & img {
            border-radius: 10px;
          }
        }

        &__title {
          color: $color-primary-dark-1;
          font-weight: 700 !important;
          font-size: 24px;
          line-height: 1.4;
          font-family: "The Sans Arabic";
        }
      }

      &__btn {
        padding-top: 20px;
        & a {
          display: block;
          background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
          color: $color-white;
          padding: 10px 20px;
          border-radius: 25px;
          margin: 10px 0 15px;
          text-decoration: none;

          &:hover {
            background: linear-gradient(90deg, $color-primary-dark-1, $color-primary-light);
            transform: translateY(-3px);
          }
        }
      }
    }

  }
}


@media (max-width: 1024px) {
  .app__details__img,
  .app__suggest {
    margin-top: 40px;
  }

}
</style>