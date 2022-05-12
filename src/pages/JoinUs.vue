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
            <span class="breadcrumb-section__span">إنضم الينا</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">إنضم الينا</h2>
          </div>
        </div>
      </div>

      <main class="recruitment">
        <div class="create-cv">
          <h3 class="create-cv__title">إنشاء سيرة ذاتية</h3>
          <b-form class="create-cv__form">
            <div class="row">
              <div class="col-6 col-md-3">
                <span class="create-cv__form__title">الإيميل</span>
              </div>
              <div class="col-6 col-md-9">
                <b-form-input class="create-cv__form__input" placeholder="اضف الايميل"></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-3">
                <span class="create-cv__form__title">الإسم</span>
              </div>
              <div class="col-6 col-md-9">
                <b-form-input class="create-cv__form__input" placeholder="اضف الإسم"></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-3">
                <span class="create-cv__form__title">رقم الهاتف</span>
              </div>
              <div class="col-6 col-md-9">
                <b-form-input class="create-cv__form__input" placeholder="اضف رقم الهاتف"></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-3">
                <span class="create-cv__form__title">الوظيفة</span>
              </div>
              <div class="col-6 col-md-9">
                <b-form-input class="create-cv__form__input" placeholder="اضف الوظيفة"></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-3">
                <span class="create-cv__form__title">السيرة الذاتية</span>
              </div>
              <div class="col-6 col-md-9">
              </div>
            </div>


            <button class="create-cv__form__btn" type="submit">إرسال سيرة ذاتية</button>
          </b-form>
        </div>
      </main>
    </div>

    <div class="en" v-else-if="getLang === 'en'">
      <div class="page-header">
        <div class="container">
          <div class="breadcrumb-section">
            <router-link class="breadcrumb-section__link" to="/">Home</router-link>
            <i class="fas fa-angle-right breadcrumb-section__icon"></i>
            <span class="breadcrumb-section__span">Join us</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">Join us</h2>
          </div>
        </div>
      </div>

      <main class="recruitment">
        <div class="create-cv">
          <h3 class="create-cv__title">Create CV</h3>
          <b-form class="create-cv__form">
            <div class="row">
              <div class="col-6 col-md-3">
                <span class="create-cv__form__title">Email</span>
              </div>
              <div class="col-6 col-md-9">
                <b-form-input class="create-cv__form__input" placeholder="Add email"></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-3">
                <span class="create-cv__form__title">Name</span>
              </div>
              <div class="col-6 col-md-9">
                <b-form-input class="create-cv__form__input" placeholder="Add name"></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-3">
                <span class="create-cv__form__title">Phone number</span>
              </div>
              <div class="col-6 col-md-9">
                <b-form-input class="create-cv__form__input" placeholder="Add phone number"></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-3">
                <span class="create-cv__form__title">Job</span>
              </div>
              <div class="col-6 col-md-9">
                <b-form-input class="create-cv__form__input" placeholder="Add job"></b-form-input>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-3">
                <span class="create-cv__form__title">CV</span>
              </div>
              <div class="col-6 col-md-9">
                <b-form-file drop-placeholder="Drop file here..."></b-form-file>
              </div>
            </div>


            <button class="create-cv__form__btn" type="submit">Send CV</button>
          </b-form>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";
export default {
  name: "JoinUs",
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
}

.recruitment {
  margin: 100px 0 50px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.create-cv {
  border-radius: 15px;
  border: 2px solid #034869;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 5%;

  &__title {
    display: flex;
    justify-content: center;
    font-family: "We work Bold";
    color: #262626;
  }

  &__form {
    padding: 20px 1% 0;

    & .col-6, .col-md-3, .col-md-9 {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }

    &__btn {
      margin-top: 30px;
      font-size: 16px;
      color: white;
      font-family: "We work Bold";
      border: 0;
      text-align: center;
      border-radius: 50px;
      background: #0c5879;
      padding: 10px 30px;
      overflow: hidden;
      user-select: none;

      &:hover {
        background: #0ca2de;
      }
    }
  }
}
</style>