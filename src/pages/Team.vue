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
            <span class="breadcrumb-section__span">الفريق</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">الفريق</h2>
          </div>
        </div>
      </div>

      <main class="team">
        <div class="row">
          <div class="col-6 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">مطور برامج</span>
                <span class="employee__details__sub-title">مطور الواجهة الأمامية</span>
                <span class="employee__details__name">م.محمد عماد حشاد</span>
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
            <span class="breadcrumb-section__span">Our Team</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">Our Team</h2>
          </div>

        </div>
      </div>

      <main class="team">
        <div class="row">
          <div class="col-6 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">Software Developer</span>
                <span class="employee__details__sub-title">Front-end developer</span>
                <span class="employee__details__name">Eng.Mohamed Emad Hashad</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">Software Developer</span>
                <span class="employee__details__sub-title">Front-end developer</span>
                <span class="employee__details__name">Eng.Mohamed Emad Hashad</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">Software Developer</span>
                <span class="employee__details__sub-title">Front-end developer</span>
                <span class="employee__details__name">Eng.Mohamed Emad Hashad</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">Software Developer</span>
                <span class="employee__details__sub-title">Front-end developer</span>
                <span class="employee__details__name">Eng.Mohamed Emad Hashad</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">Software Developer</span>
                <span class="employee__details__sub-title">Front-end developer</span>
                <span class="employee__details__name">Eng.Mohamed Emad Hashad</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">Software Developer</span>
                <span class="employee__details__sub-title">Front-end developer</span>
                <span class="employee__details__name">Eng.Mohamed Emad Hashad</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="employee">
              <div class="employee__img">
                <img src="../assets/img/ww.jpeg">
              </div>
              <div class="employee__details">
                <span class="employee__details__title">Software Developer</span>
                <span class="employee__details__sub-title">Front-end developer</span>
                <span class="employee__details__name">Eng.Mohamed Emad Hashad</span>
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
  name: "Team",
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
  padding-bottom: 40px;
}

.team {
  padding: 50px 5%;
}

.employee {
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 7px 2px rgb(0 0 0 / 20%);
  margin-top: 30px;

  &__img {
    width: 100%;
    display: inline-block;
    margin-bottom: 15px;

    & img {
      width: 100%;
      padding: 5px;
      border-radius: 10px;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    font-family: "The Sans Arabic";
    padding: 0 15px;

    &__title {
      font-weight: 600;
      font-size: 16px;
      line-height: 25px;
      color: #00a3ff;
    }

    &__sub-title {
      font-weight: 300;
      font-size: 13px;
      line-height: 20px;
      color: #003057;
      margin: 0;
    }

    &__name {
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      color: #003057;
      margin: 10px 0 15px;
    }
  }
}

</style>