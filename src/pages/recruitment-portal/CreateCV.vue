<template>
  <div class="main">
    <div class="ar" v-if="getLang === 'ar'">
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
    </div>

    <div class="en" v-else-if="getLang === 'en'">

    </div>
  </div>
</template>

<script>
export default {
  name: "CreateCV",
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

.ar, .en {
  width: 100%;
}

.main {
  display: flex;
  justify-content: center;
  width: 100%;
}

.create-cv {
  border-radius: 15px;
  border: 2px solid #034869;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 5%;

  &__title {
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