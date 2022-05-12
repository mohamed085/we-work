<template>
  <div>
    <div className="header">
      <navbar></navbar>
    </div>

    <div className="ar" v-if="getLang === 'ar'">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb-section">
            <router-link className="breadcrumb-section__link" to="/">الصفحة الرئيسية</router-link>
            <i className="fas fa-angle-left breadcrumb-section__icon"></i>
            <span className="breadcrumb-section__span">بوابة التوظيف</span>
          </div>

          <div className="title-section mt-5">
            <h2 className="title-section__text">بوابة التوظيف</h2>
          </div>

          <div className="calendar-section mt-5 mb-3">
            <i className="fas fa-calendar-alt ml-2"></i>
            <span>آخر تحديث 1443/07/10 الموافق 2022/02/11</span>
          </div>
        </div>
      </div>

      <main className="recruitment">
        <div className="row">
          <div className="col-12 col-md-4">
            <ul className="recruitment__items">
              <li className="recruitment__items__item">
                <router-link to="/recruitment-portal" className="recruitment__items__item__link">وظائف شاغره
                </router-link>
              </li>
              <li className="recruitment__items__item">
                <router-link to="/create-cv" className="recruitment__items__item__link">انشاء السيرة الذاتية
                </router-link>
              </li>
              <li className="recruitment__items__item">
                <router-link to="/asd" className="recruitment__items__item__link">متابعة طلباتي</router-link>
              </li>
              <li className="recruitment__items__item">
                <router-link to="/asd" className="recruitment__items__item__link">تغيير كلمة المرور</router-link>
              </li>
              <li className="recruitment__items__item">
                <router-link to="/contact-us" className="recruitment__items__item__link">اتصل بنا</router-link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-12">
            <router-view></router-view>
          </div>
        </div>
      </main>
    </div>

    <div className="en" v-else-if="getLang === 'en'">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb-section">
            <router-link className="breadcrumb-section__link" to="/">Home</router-link>
            <i className="fas fa-angle-right breadcrumb-section__icon"></i>
            <span className="breadcrumb-section__span">Recruitment portal</span>
          </div>

          <div className="title-section mt-5">
            <h2 className="title-section__text">Recruitment portal</h2>
          </div>

          <div className="calendar-section mt-5 mb-3">
            <i className="fas fa-calendar-alt mr-2"></i>
            <span>Last update 07/10/1443 corresponding to 02/11/2022</span>
          </div>
        </div>
      </div>

      <main className="recruitment">
        <div className="row">
          <div className="col-12 col-md-4">
            <ul className="recruitment__items">
              <li className="recruitment__items__item">
                <router-link to="/recruitment-portal" className="recruitment__items__item__link">Vacancies</router-link>
              </li>
              <li className="recruitment__items__item">
                <router-link to="/create-cv" className="recruitment__items__item__link">Create CV</router-link>
              </li>
              <li className="recruitment__items__item">
                <router-link to="/asd" className="recruitment__items__item__link">Follow my orders</router-link>
              </li>
              <li className="recruitment__items__item">
                <router-link to="/asd" className="recruitment__items__item__link">Change password</router-link>
              </li>
              <li className="recruitment__items__item">
                <router-link to="/contact-us" className="recruitment__items__item__link">Call us</router-link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-8">
            <router-view></router-view>
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
  name: "Index",
  components: {
    Navbar
  },
  data() {
    return {}
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
  ackground-color: $color-primary;
  background-image: url(../../assets/img/bg-home.jpg);
  background-size: cover;
  background-position: center;
  padding-top: 100px;
  padding-bottom: 40px;
}

.recruitment {
  margin: 100px 0 50px;
  padding: 0 5%;

  &__items {

    &__item {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      padding-bottom: 20px;

      &__link {
        display: block;
        padding: 5px;
        font-weight: 700;
        font-size: 20px;
        font-family: "We work Bold";
        padding-bottom: 20px !important;
        vertical-align: middle;
        color: $color-primary-dark-1;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0%;
          width: 0;
          height: 4px;
          background-color: $color-primary-dark;
          transition: width .4s ease-in-out;
        }

        &:hover,
        &.router-link-active,
        &.router-link-exact-active,
        &.active {
          color: $color-primary;
        }

        &:hover:after,
        &.router-link-active:after,
        &.router-link-exact-active:after,
        &.active:after {
          width: 80% !important;
        }

      }
    }
  }
}

.en .recruitment__items__item__link {
  &::after {
    left: 0;
    bottom: 0%;
  }
}
</style>