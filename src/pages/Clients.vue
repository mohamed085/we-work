<template>
  <div>
    <div class="header">
      <navbar></navbar>
    </div>

    <div class="ar" v-if="getLang === 'ar'">
      <div class="page-header">
        <div class="container">
          <div class="breadcrumb-section">
            <router-link class="breadcrumb-section__link" to="/">الصفحة الرئيسية</router-link>
            <i class="fas fa-angle-left breadcrumb-section__icon"></i>
            <span class="breadcrumb-section__span">عملائنا</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">عملائنا</h2>
          </div>
        </div>
      </div>

      <main class="clients">
        <div class="row">
          <div class="col-6 col-md-4">
            <div class="client">
              <div class="client__box-grad"></div>
              <div class="client__content">
                <div class="client__content__img">
                  <img src="../assets/img/re.png">
                </div>
                <span class="client__content__title">تست</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="client">
              <div class="client__box-grad"></div>
              <div class="client__content">
                <div class="client__content__img">
                  <img src="../assets/img/re.png">
                </div>
                <span class="client__content__title">تست</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="client">
              <div class="client__box-grad"></div>
              <div class="client__content">
                <div class="client__content__img">
                  <img src="../assets/img/re.png">
                </div>
                <span class="client__content__title">تست</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="client">
              <div class="client__box-grad"></div>
              <div class="client__content">
                <div class="client__content__img">
                  <img src="../assets/img/re.png">
                </div>
                <span class="client__content__title">تست</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="client">
              <div class="client__box-grad"></div>
              <div class="client__content">
                <div class="client__content__img">
                  <img src="../assets/img/re.png">
                </div>
                <span class="client__content__title">تست</span>
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
            <span class="breadcrumb-section__span">Our clients</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">Our clients</h2>
          </div>
        </div>
      </div>

      <main class="clients">
        <div class="row">
          <div class="col-6 col-md-4">
            <div class="client">
              <div class="client__box-grad"></div>
              <div class="client__content">
                <div class="client__content__img">
                  <img src="../assets/img/re.png">
                </div>
                <span class="client__content__title">Test</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="client">
              <div class="client__box-grad"></div>
              <div class="client__content">
                <div class="client__content__img">
                  <img src="../assets/img/re.png">
                </div>
                <span class="client__content__title">Test</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="client">
              <div class="client__box-grad"></div>
              <div class="client__content">
                <div class="client__content__img">
                  <img src="../assets/img/re.png">
                </div>
                <span class="client__content__title">Test</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="client">
              <div class="client__box-grad"></div>
              <div class="client__content">
                <div class="client__content__img">
                  <img src="../assets/img/re.png">
                </div>
                <span class="client__content__title">Test</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="client">
              <div class="client__box-grad"></div>
              <div class="client__content">
                <div class="client__content__img">
                  <img src="../assets/img/re.png">
                </div>
                <span class="client__content__title">Test</span>
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
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Clients",
  components: {
    Navbar
  },
  data() {
    return {
      message: {
        type: null
      }
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
@import "../assets/scss/variables";

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

.clients {
  margin: 100px 0 80px;
  padding: 20px 5%;
}

.client {
  position: relative;
  margin: 50px 10px 30px;
  cursor: pointer;

  &__box-grad {
    left: 0 !important;
    right: 0 !important;
    background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1) !important;
    display: block;
    height: 100%;
    position: absolute;
    top: 5px;
    bottom: 0;
    border-radius: 8px !important;
  }

  &__content {
    padding: 10px 12px;
    border-radius: 8px 8px 40px 8px !important;
    position: relative;
    background-color: #dfe8e8;
    box-shadow: 0px 0px 20px #0000000d;

    &:hover {
      transform: translate3d(0, -8px, 0);
    }

    &__img {
      width: 100%;
      border-radius: 8px;
      padding: 2%;

      & img {
        width: 100%;
      }
    }

    &__title {
      padding: 5px 5% 20px 2%;
      text-decoration: none;
      color: #343434;
      font-size: 24px;
      font-family: "We work Bold";
      font-weight: 500;

      &:hover {
        color: $color-primary-dark-1;
      }

    }
  }
}
</style>