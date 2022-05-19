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
            <span class="breadcrumb-section__span">معلومات عنا</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">معلومات عنا</h2>
          </div>
        </div>
      </div>

      <main class="about-us">
      </main>
    </div>

    <div class="en" v-else-if="getLang === 'en'">
      <div class="page-header">
        <div class="container">
          <div class="breadcrumb-section">
            <router-link class="breadcrumb-section__link" to="/">Home</router-link>
            <i class="fas fa-angle-right breadcrumb-section__icon"></i>
            <span class="breadcrumb-section__span">About us</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">About us</h2>
          </div>
        </div>
      </div>

      <main class="about-us">
      </main>

    </div>
  </div>

</template>

<script>
import Navbar from "@/components/ui/Navbar";

export default {
  name: "AboutUs",
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

.about-us {
  margin: 100px 0 80px;
  padding: 20px 5%;
}

</style>