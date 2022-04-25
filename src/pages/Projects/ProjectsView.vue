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
            <span class="breadcrumb-section__span">Projects</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">We Work Projects</h2>
          </div>

          <div class="calendar-section mt-5 mb-3">
            <i class="fas fa-calendar-alt mr-2"></i>
            <span>Last update 07/10/1443 corresponding to 02/11/2022</span>
          </div>
        </div>
      </div>

      <main class="pt-5 pb-5 mb-5">

        <!-- Mobile apps -->
        <div class="section mt-5 mb-5">
          <div class="section__container">
            <div class="row section__row">
              <div class="section__sub col-12 col-md-4"
                   data-aos="fade-right"
                   data-aos-duration="3000"
              >
                <div class="section__sub__container">
                  <h3 class="section__sub__heading">See all We Work apps</h3>
                  <router-link to="/mobile-applications" class="section__sub__btn mt-3">Discover all</router-link>
                </div>
              </div>
              <div class="section__sub section__sub-2 col-12 col-md-8"
                   data-aos="fade-left"
                   data-aos-duration="3000"
              >
                <div class="mobile-apps">
                  <router-link class="mobile-apps__app" to="">
                    <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                  </router-link>
                  <router-link class="mobile-apps__app" to="">
                    <img src="../../assets/img/mobile_apps/mobiles2-600.png">
                  </router-link>
                  <router-link class="mobile-apps__app" to="">
                    <img src="../../assets/img/mobile_apps/mobiles3-600.png">
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Websites -->
        <div class="section mt-5 mb-5">
          <div class="section__container">
            <div class="row section__row">
              <div class="composition-container col-12 col-md-8"
                   data-aos="fade-right"
                   data-aos-duration="3000"
              >
                <div class="composition">
                  <img srcset="../../assets/img/websites/2.jpg 300w, ../../assets/img/websites/2.jpg 1000w"
                       sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                       alt="Photo 1"
                       class="composition__photo composition__photo--p1"
                       src="../../assets/img/websites/2.jpg">
                  <img srcset="../../assets/img/websites/2.jpg 300w, ../../assets/img/websites/2.jpg 1000w"
                       sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                       alt="Photo 2"
                       class="composition__photo composition__photo--p2"
                       src="../../assets/img/websites/2.jpg">
                  <img srcset="../../assets/img/websites/2.jpg 300w, ../../assets/img/websites/2.jpg 1000w"
                       sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                       alt="Photo 3"
                       class="composition__photo composition__photo--p3"
                       src="../../assets/img/websites/2.jpg">
                </div>
              </div>
              <div class="section__sub section__sub-2 col-12 col-md-4"
                   data-aos="fade-left"
                   data-aos-duration="3000"
              >
                <div class="section__sub__container">
                  <h3 class="section__sub__heading">Watch all We Work websites</h3>
                  <router-link to="/websites" class="section__sub__btn mt-3">Discover all</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Photography -->
        <div class="section mt-5 mb-5">
          <div class="section__container">
            <div class="row section__row">
              <div class="section__sub col-12 col-md-4"
                   data-aos="fade-right"
                   data-aos-duration="3000"
              >
                <div class="section__sub__container">
                  <h3 class="section__sub__heading">See all We Work photography work</h3>
                  <router-link to="" class="section__sub__btn mt-3">Discover all</router-link>
                </div>
              </div>
              <div class="section__sub section__sub-2 col-12 col-md-8"
                   data-aos="fade-left"
                   data-aos-duration="3000"
              >
                <figure class="snip1104 red">
                  <img src="../../assets/img/photography/1.jpeg" alt="sample33" />
                  <figcaption>
                    <h2>Hotel  <span> Donatello</span></h2>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
            </div>
          </div>
        </div>

        <!-- UI/UX -->
        <div class="section mt-5 mb-5">
          <div class="section__container">
            <div class="row section__row">
              <div class="section__sub col-12 col-md-8"
                   data-aos="fade-right"
                   data-aos-duration="3000"
              >
                <div class="ui-section__bg">
                  <div class="ui-section">
                    <figure class="snip1543">
                      <img src="../../assets/img/UI-UX/انتظرونا.png" alt="sample108" />
                      <figcaption>
                        <h3>SWCC PMO</h3>
                        <p>Experimental copy.</p>
                      </figcaption>
                      <router-link to=""></router-link>
                    </figure>
                    <figure class="snip1543">
                      <img src="../../assets/img/UI-UX/راماكين.png" alt="sample108" />
                      <figcaption>
                        <h3>Ramakeen</h3>
                        <p>Introductory site.</p>
                      </figcaption>
                      <router-link to=""></router-link>
                    </figure>
                  </div>
                </div>
                <div class="ui-section__mobile">
                  <div class="d-flex justify-content-center">
                    <figure class="snip1543">
                      <img src="../../assets/img/UI-UX/انتظرونا.png" alt="sample108" />
                      <figcaption>
                        <h3>SWCC PMO</h3>
                        <p>Experimental copy.</p>
                      </figcaption>
                      <router-link to=""></router-link>
                    </figure>
                  </div>
                </div>
              </div>
              <div class="section__sub section__sub-2 col-12 col-md-4"
                   data-aos="fade-left"
                   data-aos-duration="3000"
              >
                <div class="section__sub__container">
                  <h3 class="section__sub__heading">See all We Work UI/UX</h3>
                  <router-link to="" class="section__sub__btn mt-3">Discover all</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Motion Graphics -->
        <div class="section mt-5 mb-5">
          <div class="section__container">
            <div class="row section__row">
              <div class="section__sub col-12 col-md-4"
                   data-aos="fade-right"
                   data-aos-duration="3000"
              >
                <div class="section__sub__container">
                  <h3 class="section__sub__heading">See all We Work photography work</h3>
                  <router-link to="" class="section__sub__btn mt-3">Discover all</router-link>
                </div>
              </div>
              <div class="section__sub section__sub-2 col-12 col-md-8"
                   data-aos="fade-left"
                   data-aos-duration="3000"
              >
                <figure class="snip1321">
                  <img src="../../assets/img/motion-graphics/اوتو-بازار.jpeg" alt="sq-sample26"/>
                  <figcaption>
                    <h4>Marketing    </h4>
                    <h2>Auto Bazaar</h2>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
                <figure class="snip1321 ui-section__bg">
                  <img src="../../assets/img/motion-graphics/زنبيلك-معك.jpeg" alt="sq-sample26"/>
                  <figcaption>
                    <h4>Marketing    </h4>
                    <h2 style="font-family: 'The Sans Arabic'">زنبيلك معك</h2>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>

              </div>
            </div>
          </div>
        </div>

        <!-- Interior Design -->
        <div class="design-section mt-5 mb-5">
          <div class="design-section__title-section"
               data-aos="fade-right"
               data-aos-duration="3000"
          >
            <h3 class="design-section__title-section__title">Interior Design</h3>
          </div>
          <div class="design-section__designs-section"
               data-aos="fade-left"
               data-aos-duration="3000"
          >
            <VueSlickCarousel v-bind="settings">
              <div class="d-flex justify-content-center">
                <figure class="snip1543">
                  <img src="../../assets/img/interior-design/BaDROOM.jpg" alt="sample108" />
                  <figcaption>
                    <h3>Bedroom</h3>
                    <p>Decoration.</p>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
              <div class="d-flex justify-content-center">
                <figure class="snip1543">
                  <img src="../../assets/img/interior-design/bathRoom.jpg" alt="sample108" />
                  <figcaption>
                    <h3>Bathroom</h3>
                    <p>Decoration.</p>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
              <div class="d-flex justify-content-center">
                <figure class="snip1543">
                  <img src="../../assets/img/interior-design/living-room.jpg" alt="sample108" />
                  <figcaption>
                    <h3>Living room</h3>
                    <p>Decoration.</p>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
              <div class="d-flex justify-content-center">
                <figure class="snip1543">
                  <img src="../../assets/img/interior-design/dressing-room.jpg" alt="sample108" />
                  <figcaption>
                    <h3>Dressing Room</h3>
                    <p>Decoration.</p>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
              <div class="d-flex justify-content-center">
                <figure class="snip1543">
                  <img src="../../assets/img/interior-design/BadRooM2.jpg" alt="sample108" />
                  <figcaption>
                    <h3>Bedroom</h3>
                    <p>Decoration.</p>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
            </VueSlickCarousel>
          </div>
        </div>

        <!-- Exterior Design -->
        <div class="design-section mt-5 mb-5">
          <div class="design-section__title-section"
               data-aos="fade-right"
               data-aos-duration="3000"
          >
            <h3 class="design-section__title-section__title">Exterior Design</h3>
          </div>
          <div class="design-section__designs-section"
               data-aos="fade-left"
               data-aos-duration="3000"
          >
            <VueSlickCarousel v-bind="settings">
              <div class="d-flex justify-content-center">
                <figure class="snip1104 primary">
                  <img src="../../assets/img/exterior-design/فيلا-سلطان-2.jpg" alt="sample33" />
                  <figcaption>
                    <h2>Decoration  <span> Villa</span></h2>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
              <div class="d-flex justify-content-center">
                <figure class="snip1104 primary">
                  <img src="../../assets/img/exterior-design/mall.jpg" alt="sample33" />
                  <figcaption>
                    <h2>Decoration  <span> Shopping mall</span></h2>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
              <div class="d-flex justify-content-center">
                <figure class="snip1104 primary">
                  <img src="../../assets/img/exterior-design/hotel.jpg" alt="sample33" />
                  <figcaption>
                    <h2>Decoration  <span> Hotel</span></h2>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
              <div class="d-flex justify-content-center">
                <figure class="snip1104 primary">
                  <img src="../../assets/img/exterior-design/فيلا-سلطان-2.jpg" alt="sample33" />
                  <figcaption>
                    <h2>Decoration  <span> Villa</span></h2>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
            </VueSlickCarousel>
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
            <span class="breadcrumb-section__span">المشاريع</span>
          </div>

          <div class="title-section mt-5">
            <h2 class="title-section__text">مشاريع وي ورك</h2>
          </div>

          <div class="calendar-section mt-5 mb-3">
            <i class="fas fa-calendar-alt ml-2"></i>
            <span>آخر تحديث 1443/07/10 الموافق 2022/02/11</span>
          </div>
        </div>
      </div>

      <main class="pt-5 pb-5 mb-5">

        <!-- Mobile apps -->
        <div class="section mt-5 mb-5">
          <div class="section__container">
            <div class="row section__row">
              <div class="section__sub col-12 col-md-4"
                  data-aos="fade-left"
                  data-aos-duration="3000"
              >
                <div class="section__sub__container">
                  <h3 class="section__sub__heading">تعرف علي تطبيقات وي ورك</h3>
                  <router-link to="/mobile-applications" class="section__sub__btn mt-3">اكتشف الكل</router-link>
                </div>
              </div>
              <div class="section__sub section__sub-2 col-12 col-md-8"
                   data-aos="fade-right"
                   data-aos-duration="3000"
                >
                <div class="mobile-apps">
                  <router-link class="mobile-apps__app" to="">
                    <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                  </router-link>
                  <router-link class="mobile-apps__app" to="">
                    <img src="../../assets/img/mobile_apps/mobiles2-600.png">
                  </router-link>
                  <router-link class="mobile-apps__app" to="">
                    <img src="../../assets/img/mobile_apps/mobiles3-600.png">
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Websites -->
        <div class="section mt-5 mb-5">
          <div class="section__container">
            <div class="row section__row">
              <div class="composition-container col-12 col-md-8"
                   data-aos="fade-left"
                   data-aos-duration="3000"
              >
                <div class="composition">
                  <img srcset="../../assets/img/websites/2.jpg 300w, ../../assets/img/websites/2.jpg 1000w"
                       sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                       alt="Photo 1"
                       class="composition__photo composition__photo--p1"
                       src="../../assets/img/websites/2.jpg">
                  <img srcset="../../assets/img/websites/2.jpg 300w, ../../assets/img/websites/2.jpg 1000w"
                       sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                       alt="Photo 2"
                       class="composition__photo composition__photo--p2"
                       src="../../assets/img/websites/2.jpg">
                  <img srcset="../../assets/img/websites/2.jpg 300w, ../../assets/img/websites/2.jpg 1000w"
                       sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                       alt="Photo 3"
                       class="composition__photo composition__photo--p3"
                       src="../../assets/img/websites/2.jpg">
                </div>
              </div>
              <div class="section__sub section__sub-2 col-12 col-md-4"
                   data-aos="fade-right"
                   data-aos-duration="3000"
              >
                <div class="section__sub__container">
                  <h3 class="section__sub__heading">شاهد جميع موقع وي ورك</h3>
                  <router-link to="/websites" class="section__sub__btn mt-3">اكتشف الكل</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Photography -->
        <div class="section mt-5 mb-5">
          <div class="section__container">
            <div class="row section__row">
              <div class="section__sub col-12 col-md-4"
                   data-aos="fade-left"
                   data-aos-duration="3000"
              >
                <div class="section__sub__container">
                  <h3 class="section__sub__heading">شاهد جميع أعمال وي ورك للتصوير الفوتوغرافي</h3>
                  <router-link to="" class="section__sub__btn mt-3">اكتشف الكل</router-link>
                </div>
              </div>
              <div class="section__sub section__sub-2 col-12 col-md-8"
                   data-aos="fade-right"
                   data-aos-duration="3000"
              >
                <div class="d-flex align-items-center justify-content-center">
                  <figure class="snip1104 red">
                    <img src="../../assets/img/photography/1.jpeg" alt="sample33" />
                    <figcaption>
                      <h2>Hotel  <span> Donatello</span></h2>
                    </figcaption>
                    <router-link to=""></router-link>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- UI/UX -->
        <div class="section mt-5 mb-5">
          <div class="section__container">
            <div class="row section__row">
              <div class="section__sub col-12 col-md-8"
                   data-aos="fade-left"
                   data-aos-duration="3000"
              >
                <div class="ui-section__bg">
                  <div class="ui-section">
                    <figure class="snip1543">
                      <img src="../../assets/img/UI-UX/انتظرونا.png" alt="sample108" />
                      <figcaption>
                        <h3>SWCC PMO</h3>
                        <p>Experimental copy.</p>
                      </figcaption>
                      <router-link to=""></router-link>
                    </figure>
                    <figure class="snip1543">
                      <img src="../../assets/img/UI-UX/راماكين.png" alt="sample108" />
                      <figcaption>
                        <h3>Ramakeen</h3>
                        <p>Introductory site.</p>
                      </figcaption>
                      <router-link to=""></router-link>
                    </figure>
                  </div>
                </div>
                <div class="ui-section__mobile">
                  <div class="d-flex justify-content-center">
                    <figure class="snip1543">
                      <img src="../../assets/img/UI-UX/انتظرونا.png" alt="sample108" />
                      <figcaption>
                        <h3>SWCC PMO</h3>
                        <p>Experimental copy.</p>
                      </figcaption>
                      <router-link to=""></router-link>
                    </figure>
                  </div>
                </div>

              </div>
              <div class="section__sub section__sub-2 col-12 col-md-4"
                   data-aos="fade-right"
                   data-aos-duration="3000"
              >
                <div class="section__sub__container">
                  <h3 class="section__sub__heading">شاهد جميع تصميمات وي ورك</h3>
                  <router-link to="" class="section__sub__btn mt-3">اكتشف الكل</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Motion Graphics -->
        <div class="section mt-5 mb-5">
          <div class="section__container">
            <div class="row section__row">
              <div class="section__sub col-12 col-md-4"
                   data-aos="fade-left"
                   data-aos-duration="3000"
              >
                <div class="section__sub__container">
                  <h3 class="section__sub__heading">شاهد جميع أعمال وي ورك في الرسوم المتحركة</h3>
                  <router-link to="" class="section__sub__btn mt-3">اكتشف الكل</router-link>
                </div>
              </div>
              <div class="section__sub section__sub-2 col-12 col-md-8"
                   data-aos="fade-right"
                   data-aos-duration="3000"
              >
                <figure class="snip1321">
                  <img src="../../assets/img/motion-graphics/اوتو-بازار.jpeg" alt="sq-sample26"/>
                  <figcaption>
                    <h4>Marketing    </h4>
                    <h2>Auto Bazaar</h2>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
                <figure class="snip1321 ui-section__bg">
                  <img src="../../assets/img/motion-graphics/زنبيلك-معك.jpeg" alt="sq-sample26"/>
                  <figcaption>
                    <h4>Marketing    </h4>
                    <h2 style="font-family: 'The Sans Arabic'">زنبيلك معك</h2>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>

              </div>
            </div>
          </div>
        </div>

        <!-- Interior Design -->
        <div class="design-section mt-5 mb-5">
          <div class="design-section__title-section"
               data-aos="fade-left"
               data-aos-duration="3000"
          >
            <h3 class="design-section__title-section__title">تصميم داخلي</h3>
          </div>
          <div class="design-section__designs-section"
               data-aos="fade-right"
               data-aos-duration="3000"
          >
            <VueSlickCarousel v-bind="settings">
              <div class="d-flex justify-content-center">
                <figure class="snip1543">
                  <img src="../../assets/img/interior-design/BaDROOM.jpg" alt="sample108" />
                  <figcaption>
                    <h3>غرفة نوم</h3>
                    <p>ديكور</p>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
              <div class="d-flex justify-content-center">
                <figure class="snip1543">
                  <img src="../../assets/img/interior-design/bathRoom.jpg" alt="sample108" />
                  <figcaption>
                    <h3>دوره المياه</h3>
                    <p>ديكور</p>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
              <div class="d-flex justify-content-center">
                <figure class="snip1543">
                  <img src="../../assets/img/interior-design/living-room.jpg" alt="sample108" />
                  <figcaption>
                    <h3>غرفة المعيشة</h3>
                    <p>ديكور</p>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
              <div class="d-flex justify-content-center">
                <figure class="snip1543">
                  <img src="../../assets/img/interior-design/dressing-room.jpg" alt="sample108" />
                  <figcaption>
                    <h3>غرفة الملابس</h3>
                    <p>ديكور</p>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
              <div class="d-flex justify-content-center">
                <figure class="snip1543">
                  <img src="../../assets/img/interior-design/BadRooM2.jpg" alt="sample108" />
                  <figcaption>
                    <h3>غرفة نوم</h3>
                    <p>ديكور</p>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
            </VueSlickCarousel>
          </div>
        </div>

        <!-- Interior Design -->
        <div class="design-section mt-5 mb-5">
          <div class="design-section__title-section"
               data-aos="fade-left"
               data-aos-duration="3000"
          >
            <h3 class="design-section__title-section__title">تصميم خارجي</h3>
          </div>
          <div class="design-section__designs-section"
               data-aos="fade-right"
               data-aos-duration="3000"
          >
            <VueSlickCarousel v-bind="settings">
              <div class="d-flex justify-content-center">
                <figure class="snip1104 primary">
                  <img src="../../assets/img/exterior-design/فيلا-سلطان-2.jpg" alt="sample33" />
                  <figcaption>
                    <h2 style="font-family: 'The Sans Arabic' !important;">ديكور
                      <br>
                      <span>فيلا</span>
                    </h2>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
              <div class="d-flex justify-content-center">
                <figure class="snip1104 primary">
                  <img src="../../assets/img/exterior-design/mall.jpg" alt="sample33" />
                  <figcaption>
                    <h2 style="font-family: 'The Sans Arabic' !important;">ديكور
                      <br>
                      <span>مول تجاري</span>
                    </h2>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
              <div class="d-flex justify-content-center">
                <figure class="snip1104 primary">
                  <img src="../../assets/img/exterior-design/hotel.jpg" alt="sample33" />
                  <figcaption>
                    <h2 style="font-family: 'The Sans Arabic' !important;">ديكور
                      <br>
                      <span>فندق</span>
                    </h2>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
              <div class="d-flex justify-content-center">
                <figure class="snip1104 primary">
                  <img src="../../assets/img/exterior-design/فيلا-سلطان-2.jpg" alt="sample33" />
                  <figcaption>
                    <h2 style="font-family: 'The Sans Arabic' !important;">ديكور
                      <br>
                      <span>فيلا</span>
                    </h2>
                  </figcaption>
                  <router-link to=""></router-link>
                </figure>
              </div>
            </VueSlickCarousel>
          </div>
        </div>

      </main>

    </div>


  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "ProjectsView",
  components: {
    Navbar,
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        "dots": true,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "initialSlide": 0,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "initialSlide": 2
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
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
@import url(https://fonts.googleapis.com/css?family=Raleway:400,800);
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);
@import url(https://fonts.googleapis.com/css?family=Teko:700);
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,500,800);
@import "../../assets/scss/variables";
@import "../../assets/scss/mixins";
@import "../../assets/scss/composition";
@import "../../assets/scss/figure";

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

.section {
  background-color: $color-grey-light-2;
  padding: 30px 0;

  &__container {
    padding: 20px 10%;
  }

  &__row {
    width: 100%;
  }

  &__sub {
    display: flex;
    justify-content: center;
    align-items: center;

    &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__heading {
      text-align: center !important;
      color: $color-primary-dark;
      font-weight: 700 !important;
      line-height: 1.4;
      font-size: 34px;
      font-family: 'We work Bold' !important;
    }

    &__btn {
      text-decoration: none;
      background-color: $color-primary-light;
      color: $color-white;
      padding: 12px 30px;
      border-radius: 100px !important;

      &:active,
      &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba($color-black,.2);
      }

      &:hover {
        background-color: $color-primary-dark;
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba($color-black,.2);
      }
    }
  }
}

.row  {
  margin: 0;
}

.mobile-apps {
  display: flex;
  justify-content: center;
  align-items: center;

  &__app {
    margin: 10px 10px 0;

    & img {
      margin: 0;
      padding: 0;
      max-height: 300px;
      max-width: 100%;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

.composition-container {
  padding-top: 40px;
  height: 400px;
}

.ui-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ui-section__mobile {
  display: none;
}

.design-section {
  padding: 40px 30px 60px;
  display: flex;
  background-color: $color-grey-light-2;

  &__title-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 24%;

    &__title {
      color: #016B68;
      font-size: 2.25rem;
      font-family: "We work Bold";
    }
  }

  &__designs-section {
    width: 75%;
  }
}

@media (max-width: 1024px) {
  .title-section__text {
    font-size: 22px;
  }

  .section__sub-2 {
    margin-top: 20px;
  }

  .section__sub__heading {
    font-size: 28px;
  }

  .mobile-apps__app {
    margin: 0;

    & img {
      margin: 0 5%;
      width: 89%;
    }
  }

  .composition-container {
    height: max-content;
  }

  .ui-section__bg {
    display: none;
  }

  .ui-section__mobile {
    display: block;
  }

  .design-section {
    display: block;

    &__title-section {
      width: 100%;

      &__title {
        font-size: 2.25rem;
      }
    }

    &__designs-section {
      width: 100%;
    }
  }

}


</style>