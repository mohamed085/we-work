<template>
  <div class="mobile-apps">
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

      <main>
        <div class="apps">
          <div class="row apps__container">
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="">
                        <img src="../../assets/img/websites/1.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>الخدمات المتاحة بالتطبيق خدمات الأنشطة التجارية خدمة حاسبة الرسوم خدمة بلاغات 940 تقديم بلاغ جديد متابعة البلاغات السابق تقديمها إرسال شكوى…</p>
                      </div>
                      <router-link to="" class="app__content__body__desc__btn">شاهد المزيد</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="">
                        <img src="../../assets/img/websites/1.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>الخدمات المتاحة بالتطبيق خدمات الأنشطة التجارية خدمة حاسبة الرسوم خدمة بلاغات 940 تقديم بلاغ جديد متابعة البلاغات السابق تقديمها إرسال شكوى…</p>
                      </div>
                      <router-link to="" class="app__content__body__desc__btn">شاهد المزيد</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="">
                        <img src="../../assets/img/websites/1.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>الخدمات المتاحة بالتطبيق خدمات الأنشطة التجارية خدمة حاسبة الرسوم خدمة بلاغات 940 تقديم بلاغ جديد متابعة البلاغات السابق تقديمها إرسال شكوى…</p>
                      </div>
                      <router-link to="" class="app__content__body__desc__btn">شاهد المزيد</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="">
                        <img src="../../assets/img/websites/1.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>الخدمات المتاحة بالتطبيق خدمات الأنشطة التجارية خدمة حاسبة الرسوم خدمة بلاغات 940 تقديم بلاغ جديد متابعة البلاغات السابق تقديمها إرسال شكوى…</p>
                      </div>
                      <router-link to="" class="app__content__body__desc__btn">شاهد المزيد</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="">
                        <img src="../../assets/img/websites/1.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>الخدمات المتاحة بالتطبيق خدمات الأنشطة التجارية خدمة حاسبة الرسوم خدمة بلاغات 940 تقديم بلاغ جديد متابعة البلاغات السابق تقديمها إرسال شكوى…</p>
                      </div>
                      <router-link to="" class="app__content__body__desc__btn">شاهد المزيد</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="">
                        <img src="../../assets/img/websites/1.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>الخدمات المتاحة بالتطبيق خدمات الأنشطة التجارية خدمة حاسبة الرسوم خدمة بلاغات 940 تقديم بلاغ جديد متابعة البلاغات السابق تقديمها إرسال شكوى…</p>
                      </div>
                      <router-link to="" class="app__content__body__desc__btn">شاهد المزيد</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="">
                        <img src="../../assets/img/websites/1.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">تطبيق تست</h3>
                      <div class="app__content__body__desc__text">
                        <p>الخدمات المتاحة بالتطبيق خدمات الأنشطة التجارية خدمة حاسبة الرسوم خدمة بلاغات 940 تقديم بلاغ جديد متابعة البلاغات السابق تقديمها إرسال شكوى…</p>
                      </div>
                      <router-link to="" class="app__content__body__desc__btn">شاهد المزيد</router-link>
                    </div>
                  </div>
                </div>
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

      <main>
        <div class="apps">
          <div class="row apps__container">
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="">
                        <img src="../../assets/img/websites/1.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">Project Test</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      <router-link to="" class="app__content__body__desc__btn">See more</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="">
                        <img src="../../assets/img/websites/1.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">Project Test</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      <router-link to="" class="app__content__body__desc__btn">See more</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="">
                        <img src="../../assets/img/websites/1.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">Project Test</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      <router-link to="" class="app__content__body__desc__btn">See more</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="">
                        <img src="../../assets/img/websites/1.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">Project Test</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      <router-link to="" class="app__content__body__desc__btn">See more</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="">
                        <img src="../../assets/img/websites/1.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">Project Test</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      <router-link to="" class="app__content__body__desc__btn">See more</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="app">
                <div class="app__box-grad"></div>
                <div class="app__content">
                  <div class="app__content__body">
                    <div class="app__content__body__img">
                      <router-link to="">
                        <img src="../../assets/img/websites/1.png">
                      </router-link>
                    </div>
                    <div class="app__content__body__desc">
                      <h3 class="app__content__body__desc__title">Project Test</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      <router-link to="" class="app__content__body__desc__btn">See more</router-link>
                    </div>
                  </div>
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
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Websites",
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

.mobile-apps {
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

.apps {

  &__container {
    padding: 5%;
  }
}

.app {
  margin-top: 180px;
  padding: 0;
  position: relative;
  width: 100%;
  user-select: none;

  &__box-grad {
    background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1) !important;
    display: block;
    height: 100%;
    position: absolute;
    top: 5px;
    bottom: 0;
    border-radius: 8px !important;
    z-index: 0;
    left: 0 !important;
    right: 0 !important;
  }

  &__content {
    background: $color-white;
    padding: 10px 12px;
    border-radius: 8px 8px 40px 8px !important;
    position: relative;
    width: 100%;

    &:hover {
      transform: translate3d(0, -8px, 0);
    }

    &__body {
      padding: 10px !important;
      flex: 1 1 auto;
      min-height: 1px;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__img {
        width: 95%;
        margin: -120px 5px 10px;

        & img {
          width: 100%;
          vertical-align: middle;
          border-style: none;
          border-radius: 15px;

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      &__desc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;

        &__title {
          font-family: "We work Bold";
          font-size: 34px;
          color: $color-primary-dark-1;
        }

        &__text {
          max-height: 100px;
          overflow: hidden;
          margin-bottom: 15px;

          & p {
            font-weight: 100 !important;
            font-family: 'The Sans Arabic' !important;
            color: #6f7070;
            line-height: 1.8;
            margin: 0;
            font-size: 14px;
            padding: 0 0 10px;
          }
        }

        &__btn {
          background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
          color: $color-white;
          padding: 10px 20px;
          width: 130px;
          border-radius: 25px;
          margin: 10px 0 15px;
          text-decoration: none;
          display: flex;
          justify-content: center;

          &:hover {
            background: linear-gradient(90deg, $color-primary-dark-1, $color-primary-light);
            transform: translateY(-3px);
          }
        }

        &__download {
          display: flex;

          &__link {
            margin: 0 3px;
          }
        }

      }

    }
  }
}

@media (max-width: 1024px) {
  .app {
    margin-top: 180px;
  }


  .app__content__body__img {
    width: 300px;
    margin: -100px 10px 30px;
  }
}

</style>