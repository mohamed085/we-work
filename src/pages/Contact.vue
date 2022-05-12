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
            <span class="breadcrumb-section__span">اتصل بنا</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">اتصل بنا</h2>
          </div>
        </div>
      </div>

      <main class="contact">
        <p class="contact__top-text">
          نحن نرحب دائماً بتعاونك معنا ومشاركتنا كل مقترحاتك. يمكنك الاتصال على أي من الأرقام المذكورة أدناه وستسعدنا خدمتك:
        </p>

        <div class="contact__info">
          <div class="row">
            <div class="col-12 col-md-4">
              <div class="contact__info__contact-info">
                <div class="contact__info__title">معلومات التواصل</div>
                <div class="contact__info__contact-info__details">
                  <div class="contact__info__contact-info__detail">
                    <span>الهاتف</span>
                    <p>01012703464</p>
                  </div>
                  <div class="contact__info__contact-info__detail">
                    <span>الفاكس</span>
                    <p>01012703464</p>
                  </div>
                  <div class="contact__info__contact-info__detail">
                    <span>البريد الإلكتروني</span>
                    <p>we-work@gmail.com</p>
                  </div>
                  <div class="contact__info__contact-info__detail">
                    <span>رسائل نصية</span>
                    <p>546456</p>
                  </div>
                  <div class="contact__info__contact-info__detail">
                    <span>صندوق البريد</span>
                    <p>1325645</p>
                  </div>
                  <div class="contact__info__contact-info__detail">
                    <span>الرمز البريدي</span>
                    <p>1325645</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-8">
              <div class="contact__info__contact-form">
                <div class="contact__info__title">نموذج التواصل الالكتروني</div>
                <b-form>
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <span>الإسم*</span>
                        <b-form-input class="input" type="text" placeholder="الإسم" required></b-form-input>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <span>رقم الهوية/الإقامة/خليجي*</span>
                        <b-form-input class="input" type="text" placeholder="رقم الهوية/الإقامة/خليجي" required></b-form-input>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <span>البريد الإلكتروني*</span>
                        <b-form-input class="input" type="email" placeholder="البريد الإلكتروني" required></b-form-input>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <span>رقم الجوال*</span>
                        <b-form-input class="input" type="tel" placeholder="رقم الجوال" required></b-form-input>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <span>نوع المراسلة*</span>
                        <b-form-select class="input" v-model="message.type">
                          <b-form-select-option :value="null">نوع المراسلة</b-form-select-option>
                          <b-form-select-option value="إستفسار">إستفسار</b-form-select-option>
                          <b-form-select-option value="إقتراح">إقتراح</b-form-select-option>
                        </b-form-select>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <span>عنوان الرسالة*</span>
                        <b-form-input class="input" type="text" placeholder="عنوان الرسالة" required></b-form-input>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <span>الرسالة*</span>
                        <b-form-textarea class="input" rows="5"></b-form-textarea>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group form-group-btn">
                        <button type="submit" class="form-btn">إرسال</button>
                      </div>
                    </div>
                  </div>
                </b-form>
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
            <span class="breadcrumb-section__span">Contact us</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">Contact us</h2>
          </div>
        </div>
      </div>

      <main class="contact">

      </main>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
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

.contact {
  margin: 100px 0 80px;
  padding: 20px 5%;

  &__top-text {
    padding: 0 5%;
    font-size: 1.563rem;
    color: #434343;
    font-family: 'The Sans Arabic' !important;
    line-height: 1.8;
    margin-bottom: 60px;
    text-align: justify;
  }

  &__info {


    &__title {
      margin-bottom: 40px;
      font-size: 22px;
      font-weight: 500 !important;
      color: #016b68;
      line-height: 1.4;
      font-family: 'The Sans Arabic' !important;
    }

    &__contact-info {
      padding: 30px 25px;
      background-color: #dfe8e8;
      height: 100%;
      border-radius: 4px !important;

      &__detail {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;

        & span {
          font-family: 'The Sans Arabic' !important;
          font-size: 16px;
          color: #016b68;
          font-weight: 400;
          line-height: 1.5;
        }

        & p {
          font-family: 'The Sans Arabic' !important;
          font-size: 16px;
          color: #434343;
          font-weight: 500 !important;
          padding: 5px 0 0;
        }
      }
    }

    &__contact-form {
      padding: 30px 25px;
      background-color: #dfe8e8;
      height: 100%;
      border-radius: 4px !important;
    }
  }

}

.form-group {
  padding: 10px 5px;

  & span {
    color: #6F7070;
    font-size: 16px;
    font-weight: 600;
    display: block;
    margin-bottom: 10px;
  }

  & .input {
    padding: 10px 13px;
    border-radius: 10px !important;
    box-shadow: 0px 0px 20px #0000000d;
    height: auto;
    background: #f5f7f7;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    border: 1px solid #ffffff;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
      color: #495057;
      background-color: #fff;
      outline: 0;
      box-shadow: 0 0 0 1px $color-primary-dark-1 !important;
      border-color: $color-primary-dark-1;
    }
  }
}

.form-group-btn {
  display: flex;
  justify-content: end;
}

.form-btn {
  color: #fff;
  background-color: $color-primary-dark-1;
  border: 1px solid $color-primary-dark-1 !important;
  padding: 9px 78px;
  border-radius: 30px !important;
  font-weight: 500;
  font-family: "The Sans Arabic";

  &:hover,
  &:checked,
  &:active,
  &:any-link {
    color: $color-primary-dark-1;
    background-color: #fff;
    border: 1px solid $color-primary-dark-1 !important;

  }
}


@media (max-width: 1024px) {
  .contact__info__contact-info__details {
    display: flex;
    flex-wrap: wrap;
  }

  .contact__info__contact-info__detail {
    width: 50%;
  }

  .contact__info__contact-form {
    margin-top: 30px;
  }
}
</style>