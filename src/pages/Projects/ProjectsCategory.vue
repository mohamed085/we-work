<template>
  <div class="projects">
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
            <span class="breadcrumb-section__span">التصميم داخلي</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">التصميم داخلي</h2>
          </div>

          <div class="calendar-section mt-5 mb-3">
            <i class="fas fa-calendar-alt ml-2"></i>
            <span>آخر تحديث 1443/07/10 الموافق 2022/02/11</span>
          </div>
        </div>
      </div>

      <div class="main row">
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">مشاريع مميزه</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">مشاريع مميزه</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">مشاريع مميزه</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">مشاريع مميزه</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">مشاريع مميزه</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">مشاريع مميزه</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="en" v-else-if="getLang === 'en'">
      <div class="page-header">
        <div class="container">
          <div class="breadcrumb-section">
            <router-link class="breadcrumb-section__link" to="/">Home</router-link>
            <i class="fas fa-angle-right breadcrumb-section__icon"></i>
            <router-link class="breadcrumb-section__link" to="/projects">Projects</router-link>
            <i class="fas fa-angle-right breadcrumb-section__icon"></i>
            <span class="breadcrumb-section__span">Interior Design</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">Interior Design</h2>
          </div>

          <div class="calendar-section mt-5 mb-3">
            <i class="fas fa-calendar-alt mr-2"></i>
            <span>Last update 07/10/1443 corresponding to 02/11/2022</span>
          </div>
        </div>
      </div>

      <div class="main row">
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="project col-12 col-md-4">
          <div class="project__container">
            <div class="project__box-grad"></div>
            <div class="project__content">
              <router-link to="/">
                <img class="project__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                <div class="project__content__title">
                  <router-link to="">Test project</router-link>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Navbar from "@/components/ui/Navbar";

export default {
  name: "ProjectsCategory",
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

.projects {
  background: $color-grey-light-4;
  padding-bottom: 100px;
}

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

.main {
  padding: 0 5%;
  display: flex;
  justify-content: center;
}

.project {
  margin-top: 80px;

  &__container {
    position: relative;
    width: 100%;

  }

  &__box-grad {
    left: 0 !important;
    right: 0 !important;
    background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1) !important;
    display: block;
    height: 100%;
    position: absolute;
    top: 8px;
    bottom: 0;
    width: 100%;
    border-radius: 8px !important;
  }

  &__content {
    background: $color-white;
    padding: 12px 12px 0;
    border-radius: 8px 8px 40px 8px !important;
    position: relative;
    width: 100%;

    &__img {
      width: 100%;
      height: 250px;
      border-radius: 8px;
    }

    &__title {
      padding: 10px 0;
      display: flex;
      justify-content: center;

      & a {
        text-decoration: none;
        color: #343434;
        font-size: 22px;
        font-family: "We work Bold";
        font-weight: 500;

        &:hover {
          color: $color-primary-dark-1;
        }
      }
    }

    &:hover {
      transform: translate3d(0, -4px, 0);
    }
  }

}




</style>