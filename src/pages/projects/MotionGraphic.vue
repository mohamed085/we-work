<template>
  <div class="motion-graphic">
    <div class="header">
      <navbar></navbar>
    </div>

    <div class="ar" v-if="getLang === 'ar'">
      <div class="page-header">
        <div class="container">
          <div class="breadcrumb-section">
            <router-link class="breadcrumb-section__link" to="/">الصفحة الرئيسية</router-link>
            <i class="fas fa-angle-left breadcrumb-section__icon"></i>
            <router-link class="breadcrumb-section__link" to="/projects">المشاريع</router-link>
            <i class="fas fa-angle-left breadcrumb-section__icon"></i>
            <span class="breadcrumb-section__span">الرسوم المتحركة</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">الرسوم المتحركة</h2>
          </div>

          <div class="calendar-section mt-5 mb-3">
            <i class="fas fa-calendar-alt ml-2"></i>
            <span>آخر تحديث 1443/07/10 الموافق 2022/02/11</span>
          </div>
        </div>
      </div>

      <main class="motion-graphic__items">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">تست</span>
              <span class="motion-graphic__items__item__desc">
                النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">تست</span>
              <span class="motion-graphic__items__item__desc">
                النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">تست</span>
              <span class="motion-graphic__items__item__desc">
                النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">تست</span>
              <span class="motion-graphic__items__item__desc">
                النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">تست</span>
              <span class="motion-graphic__items__item__desc">
                النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته. وما لا يحتمل إلا معنى واحدا، وقيل ما لا يحتمل التأويل.
              </span>
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
            <span class="breadcrumb-section__span">Motion Graphics</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">Motion Graphics</h2>
          </div>

          <div class="calendar-section mt-5 mb-3">
            <i class="fas fa-calendar-alt mr-2"></i>
            <span>Last update 07/10/1443 corresponding to 02/11/2022</span>
          </div>
        </div>
      </div>

      <main class="motion-graphic__items">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">Test</span>
              <span class="motion-graphic__items__item__desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">Test</span>
              <span class="motion-graphic__items__item__desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">Test</span>
              <span class="motion-graphic__items__item__desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">Test</span>
              <span class="motion-graphic__items__item__desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="motion-graphic__items__item">
              <div class="motion-graphic__items__item__video">
                <video width="100%" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
              <span class="motion-graphic__items__item__title">Test</span>
              <span class="motion-graphic__items__item__desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
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
  name: "MotionGraphic",
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

.motion-graphic {
  background: $color-grey-light-4;
  padding-bottom: 100px;
  min-height: 100vh;
}

.ar {
  text-align: right;
  direction: rtl;
}

.page-header {
  padding-top: 100px;
}

.motion-graphic__items {
  padding: 70px 5%;

  & .col-12, .col-md-4 {
    margin-top: 40px;
  }

  &__item {
    background-color: #fff;
    padding: 30px;
    border-radius: 5px !important;
    box-shadow: 0 3px 20px rgb(0 0 0 / 10%);
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: "The Sans Arabic";

    &__title {
      padding: 0 3%;
      margin: 15px 0;
      color: $color-primary-dark-1;
      font-weight: 700 !important;
      font-size: 24px;
      line-height: 1.4;
    }

    &__desc {
      padding: 0 3%;
      text-align: justify;
      margin-bottom: 15px;
      font-size: 14px;
      color: #656565;
      font-weight: 400;
    }
  }
}

</style>