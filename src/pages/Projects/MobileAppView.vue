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
            <router-link class="breadcrumb-section__link" to="/mobile-applications">Mobile Applications</router-link>
            <i class="fas fa-angle-right breadcrumb-section__icon"></i>
            <span class="breadcrumb-section__span">Wander guide</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">Wander guide</h2>
          </div>

          <div class="calendar-section mt-5 mb-3">
            <i class="fas fa-calendar-alt mr-2"></i>
            <span>Last update 07/10/1443 corresponding to 02/11/2022</span>
          </div>
        </div>
      </div>


    </div>

    <div class="header-navbar ar" v-else-if="getLang === 'ar'">
      <div class="page-header">
        <div class="container">
          <div class="breadcrumb-section">
            <router-link class="breadcrumb-section__link" to="/">الصفحة الرئيسية</router-link>
            <i class="fas fa-angle-left breadcrumb-section__icon"></i>
            <router-link class="breadcrumb-section__link" to="/projects">كل المشاريع</router-link>
            <i class="fas fa-angle-left breadcrumb-section__icon"></i>
            <router-link class="breadcrumb-section__link" to="/mobile-applications">تطبيقات الهاتف الجوال</router-link>
            <i class="fas fa-angle-left breadcrumb-section__icon"></i>
            <span class="breadcrumb-section__span">وندر جايد</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">وندر جايد</h2>
          </div>

          <div class="calendar-section mt-5 mb-3">
            <i class="fas fa-calendar-alt ml-2"></i>
            <span>آخر تحديث 1443/07/10 الموافق 2022/02/11</span>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";

export default {
  name: "MobileAppView",
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

</style>