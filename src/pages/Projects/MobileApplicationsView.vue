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
            <span class="breadcrumb-section__span">Mobile Applications</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">We Work Mobile Applications</h2>
          </div>

          <div class="calendar-section mt-5 mb-3">
            <i class="fas fa-calendar-alt mr-2"></i>
            <span>Last update 07/10/1443 corresponding to 02/11/2022</span>
          </div>
        </div>
      </div>

      <main class="mb-5 pb-5">
        <div class="apps-section">
          <div class="container">
            <div class="apps-section-row row row-cols-1 row-cols-md-2">
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">Fix it</h2>
                        <p class="apps-section__app__des__des mb-4">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        </p>
                        <div>
                          <router-link to="mobile-app/4532" class="apps-section__app__des__btn">Read more</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">Fix it</h2>
                        <p class="apps-section__app__des__des mb-4">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        </p>
                        <div>
                          <router-link to="mobile-app/4532" class="apps-section__app__des__btn">Read more</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">Fix it</h2>
                        <p class="apps-section__app__des__des mb-4">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        </p>
                        <div>
                          <router-link to="mobile-app/4532" class="apps-section__app__des__btn">Read more</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">Fix it</h2>
                        <p class="apps-section__app__des__des mb-4">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        </p>
                        <div>
                          <router-link to="mobile-app/4532" class="apps-section__app__des__btn">Read more</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">Fix it</h2>
                        <p class="apps-section__app__des__des mb-4">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        </p>
                        <div>
                          <router-link to="mobile-app/4532" class="apps-section__app__des__btn">Read more</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">Fix it</h2>
                        <p class="apps-section__app__des__des mb-4">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        </p>
                        <div>
                          <router-link to="mobile-app/4532" class="apps-section__app__des__btn">Read more</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">Fix it</h2>
                        <p class="apps-section__app__des__des mb-4">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        </p>
                        <div>
                          <router-link to="mobile-app/4532" class="apps-section__app__des__btn">Read more</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">Fix it</h2>
                        <p class="apps-section__app__des__des mb-4">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        </p>
                        <div>
                          <router-link to="mobile-app/4532" class="apps-section__app__des__btn">Read more</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">Fix it</h2>
                        <p class="apps-section__app__des__des mb-4">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        </p>
                        <div>
                          <router-link to="mobile-app/4532" class="apps-section__app__des__btn">Read more</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
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
            <span class="breadcrumb-section__span"> تطبيقات الهاتف الجوال</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text"> تطبيقات وي ورك للهاتف الجوال </h2>
          </div>

          <div class="calendar-section mt-5 mb-3">
            <i class="fas fa-calendar-alt ml-2"></i>
            <span>آخر تحديث 1443/07/10 الموافق 2022/02/11</span>
          </div>
        </div>
      </div>

      <main class="mb-5 pb-5">
        <div class="apps-section">
          <div class="container">
            <div class="apps-section-row row row-cols-1 row-cols-md-2">
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">وندر جايد</h2>
                        <p class="apps-section__app__des__des mb-4">
                          هي منصة لحجز ( حفلات - رحلات - ألخ ) يستطيع حجز الحفلة سواء أون لاين أو اوف لاين في حالة الاون لاين
                        </p>
                        <div>
                          <router-link to="/mobile-app/4532" class="apps-section__app__des__btn">تعرف علي المزيد</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">وندر جايد</h2>
                        <p class="apps-section__app__des__des mb-4">
                          هي منصة لحجز ( حفلات - رحلات - ألخ ) يستطيع حجز الحفلة سواء أون لاين أو اوف لاين في حالة الاون لاين
                        </p>
                        <div>
                          <router-link to="/mobile-app/4532" class="apps-section__app__des__btn">تعرف علي المزيد</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">وندر جايد</h2>
                        <p class="apps-section__app__des__des mb-4">
                          هي منصة لحجز ( حفلات - رحلات - ألخ ) يستطيع حجز الحفلة سواء أون لاين أو اوف لاين في حالة الاون لاين
                        </p>
                        <div>
                          <router-link to="/mobile-app/4532" class="apps-section__app__des__btn">تعرف علي المزيد</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">وندر جايد</h2>
                        <p class="apps-section__app__des__des mb-4">
                          هي منصة لحجز ( حفلات - رحلات - ألخ ) يستطيع حجز الحفلة سواء أون لاين أو اوف لاين في حالة الاون لاين
                        </p>
                        <div>
                          <router-link to="/mobile-app/4532" class="apps-section__app__des__btn">تعرف علي المزيد</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">وندر جايد</h2>
                        <p class="apps-section__app__des__des mb-4">
                          هي منصة لحجز ( حفلات - رحلات - ألخ ) يستطيع حجز الحفلة سواء أون لاين أو اوف لاين في حالة الاون لاين
                        </p>
                        <div>
                          <router-link to="/mobile-app/4532" class="apps-section__app__des__btn">تعرف علي المزيد</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">وندر جايد</h2>
                        <p class="apps-section__app__des__des mb-4">
                          هي منصة لحجز ( حفلات - رحلات - ألخ ) يستطيع حجز الحفلة سواء أون لاين أو اوف لاين في حالة الاون لاين
                        </p>
                        <div>
                          <router-link to="/mobile-app/4532" class="apps-section__app__des__btn">تعرف علي المزيد</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">وندر جايد</h2>
                        <p class="apps-section__app__des__des mb-4">
                          هي منصة لحجز ( حفلات - رحلات - ألخ ) يستطيع حجز الحفلة سواء أون لاين أو اوف لاين في حالة الاون لاين
                        </p>
                        <div>
                          <router-link to="/mobile-app/4532" class="apps-section__app__des__btn">تعرف علي المزيد</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="container">
                  <div class="apps-section__app-container">
                    <div class="apps-section__initi-grad-bg"></div>
                    <div class="apps-section__app">
                      <div class="apps-section__app__img">
                        <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                      </div>
                      <div class="apps-section__app__des">
                        <h2 class="apps-section__app__des__title">وندر جايد</h2>
                        <p class="apps-section__app__des__des mb-4">
                          هي منصة لحجز ( حفلات - رحلات - ألخ ) يستطيع حجز الحفلة سواء أون لاين أو اوف لاين في حالة الاون لاين
                        </p>
                        <div>
                          <router-link to="/mobile-app/4532" class="apps-section__app__des__btn">تعرف علي المزيد</router-link>
                        </div>
                        <div class="apps-section__app__des__access mt-4">
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/play-store.svg">
                          </router-link>
                          <router-link to="" class="mr-1 ml-1">
                            <img src="../../assets/svg/app-store.svg">
                          </router-link>
                        </div>
                      </div>
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
  name: "MobileApplicationsView",
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

.apps-section {
  padding: 30px 60px;
  margin: 25px 0 100px;

  &__app-container {
    background: white;
    padding-bottom: 10px;
    border-radius: 15px 15px 60px 15px !important;
    background-position-x: 0 !important;
    background-size: 340px !important;
    box-shadow: 0px 0px 20px #0000000d;
    position: relative;
    flex-direction: column;
    word-wrap: break-word;
  }

  &__initi-grad-bg {
    z-index: -1;
    left: 0 !important;
    right: 0 !important;
    background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
    display: block;
    height: 100%;
    position: absolute;
    top: 6px;
    bottom: 0;
    border-radius: 8px !important;
  }

  &__app {
    display: flex;
    padding: 20px 10px;


    &__img {
      margin-left: 10px;
      margin-right: 10px;
      margin-top: -80px;

      & img {
        width: 140px;

        &:hover {
          transform: scale(1.2);
        }
      }
    }

    &__des {

      &__title {
        margin: 10px 10px !important;
        font-family: "We work Bold";
        color: $color-primary;
        font-weight: 700;
      }

      &__des {
        padding: 0 10px;
        color: $color-grey-dark;
      }

      &__btn {
        margin: 10px 10px !important;
        padding: 10px 30px;
        border-radius: 25px;
        text-decoration: none;
        background-color: $color-white;
        color: $color-primary;
        border: 1px solid $color-primary;

        &:hover {
          background-color: $color-primary;
          color: $color-white;
        }
      }
    }
  }
}

.apps-section-row .col {
  margin-top: 140px;
}


@media (max-width: 1024px) {
  .apps-section {
    padding: 10px 20px;
    margin: 100px 0;

    &__app {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &__img {
        margin: -120px auto 10px;

        & img {
          width: 200px;

          &:hover {
            margin-bottom: 20px;
          }
        }
      }

      &__des {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__title {
          text-align: center;
        }

        &__des {
          text-align: center;
        }

        &__access {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
      }
    }
  }

  .apps-section-row .col:not(:first-child) {
    margin-top: 200px;
  }

}
</style>