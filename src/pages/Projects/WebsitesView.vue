<template>
  <div>
    <div class="header">
      <navbar></navbar>
    </div>

    <div class="header-navbar" v-if="getLang === 'en'">
      <div class="page-header">
        <div class="container">
          <div class="breadcrumb-section">
            <router-link class="breadcrumb-section__link" to="/">Home</router-link>
            <i class="fas fa-angle-right breadcrumb-section__icon"></i>
            <router-link class="breadcrumb-section__link" to="/projects">Projects</router-link>
            <i class="fas fa-angle-right breadcrumb-section__icon"></i>
            <span class="breadcrumb-section__span">Websites</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">We Work Websites</h2>
          </div>

          <div class="calendar-section mt-5 mb-3">
            <i class="fas fa-calendar-alt mr-2"></i>
            <span>Last update 07/10/1443 corresponding to 02/11/2022</span>
          </div>
        </div>
      </div>

      <main class="mb-5 pb-5">
        <div class="websites-section">
          <div class="container">
            <div class="row row-cols-1 row-cols-md-4 justify-content-center">
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>Autobazeer</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>Autobazeer</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>Autobazeer</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>Autobazeer</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>Autobazeer</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>Autobazeer</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>Autobazeer</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>Autobazeer</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>Autobazeer</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

    </div>


    <div class="header-navbar ar" v-else-if="getLang === 'ar'">
      <div class="page-header">
        <div class="container">
          <div class="breadcrumb-section">
            <router-link class="breadcrumb-section__link" to="/">الصفحة الرئيسية</router-link>
            <i class="fas fa-angle-left breadcrumb-section__icon"></i>
            <router-link class="breadcrumb-section__link" to="/projects">كل المشاريع</router-link>
            <i class="fas fa-angle-left breadcrumb-section__icon"></i>
            <span class="breadcrumb-section__span">مواقع الويب</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">مواقع ويب وي ورك</h2>
          </div>

          <div class="calendar-section mt-5 mb-3">
            <i class="fas fa-calendar-alt ml-2"></i>
            <span>آخر تحديث 1443/07/10 الموافق 2022/02/11</span>
          </div>
        </div>
      </div>

      <main class="mb-5 pb-5">
        <div class="websites-section">
          <div class="container">
            <div class="row row-cols-1 row-cols-md-4 justify-content-center">
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>اوتو بازار</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>اوتو بازار</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>اوتو بازار</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>اوتو بازار</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>اوتو بازار</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>اوتو بازار</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>اوتو بازار</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>اوتو بازار</h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="websites-section__container">
                <div class="websites-section__website">
                  <div class="websites-section__initi-grad-bg"></div>
                  <router-link to="/website/64532">
                    <div class="websites-section__website__body">
                      <div class="websites-section__website__body__logo">
                        <img src="../../assets/img/websites/Asset3.png">
                      </div>
                      <div class="websites-section__website__body__title">
                        <h2>اوتو بازار</h2>
                      </div>
                    </div>
                  </router-link>
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
  name: "WebsitesView",
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

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/card";

.ar {
  text-align: right;
  direction: rtl;
}

.page-header {
  ackground-color: $color-primary;
  background-image: url(../../assets/img/bg-home.jpg);
  background-size: cover;
  background-position: center;
  padding-top: 100px;
  padding-bottom: 40px;
}

.websites-section {
  margin-top: 50px;

  &__container {
    margin-top: 20px;
    padding: 20px;
  }

  &__website {
    background: white;
    padding: 2rem;
    border-radius: 8px 8px 40px 8px !important;
    background-position-x: 0 !important;
    background-size: 100% !important;
    box-shadow: 0px 0px 20px #0000000d;
    position: relative;
    flex-direction: column;
    word-wrap: break-word;

    &:hover .websites-section__website__body {
      transform: translate3d(0, -3px, 0);
    }

    &:hover .websites-section__initi-grad-bg {
      top: 8px;
    }

    & a {
      text-decoration: none;
      color: #016B68;

    }

    &__body {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      &__logo {
        width: 90%;

        & img {
          max-width: 100%;
        }
      }

      &__title {
        margin-top: 20px;
        font-family: "The Sans Arabic";
      }
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
</style>