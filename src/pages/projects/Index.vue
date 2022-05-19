<template>
  <div class="projects">
    <div class="header">
      <navbar></navbar>
    </div>

    <div class="ar" v-if="getLang === 'ar'">
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

      <main class="pt-5 pb-5">

        <!-- Mobile apps -->
        <div class="section">
          <div class="section__container row">
            <div class="section__sub-1 col-12 col-md-4"
                 data-aos="fade-left"
                 data-aos-duration="3000"
            >
              <div class="section__title">
                <h3 class="section__title__heading">تعرف علي تطبيقات وي ورك</h3>
                <router-link to="/mobile-applications" class="section__title__btn mt-3">اكتشف الكل</router-link>

              </div>
            </div>
            <div class="section__sub-2 col-12 col-md-8"
                 data-aos="fade-right"
                 data-aos-duration="3000"
            >
              <div class="section__content">
                <div class="mobile-apps">
                  <router-link class="mobile-apps__app" to="/mobile-application/613265">
                    <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                  </router-link>
                  <router-link class="mobile-apps__app" to="/mobile-application/613265">
                    <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                  </router-link>
                  <router-link class="mobile-apps__app" to="/mobile-application/613265">
                    <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                  </router-link>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Websites -->
        <div class="section">
          <div class="section__container row">
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
              <div class="section__title">
                <h3 class="section__title__heading">شاهد جميع موقع وي ورك</h3>
                <router-link to="/websites" class="section__title__btn mt-3">اكتشف الكل</router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- UI \ UX apps -->
        <div class="section">
          <router-link to="projects/132568">
            <div class="section__container row">
              <div class="section__sub-1 col-12 col-md-3">
                <div class="section__title">
                  <h3 class="section__title__heading">اعمل وي ورك في ال UI \ UX</h3>
                </div>
              </div>
              <div class="section__sub-2 col-12 col-md-9">
                <div class="section__content">
                  <div class="designs">
                    <div class="design-item">
                      <div class="design-item__box-grad"></div>
                      <div class="design-item__content">
                        <router-link to="/project/1236">
                          <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                        </router-link>
                        <div class="design-item__content__title">
                          <router-link to="">مشاريع مميزه</router-link>
                        </div>
                      </div>
                    </div>
                    <div class="design-item mobile-hidden">
                      <div class="design-item__box-grad"></div>
                      <div class="design-item__content">
                        <router-link to="/project/1236">
                          <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                        </router-link>
                        <div class="design-item__content__title">
                          <router-link to="">مشاريع مميزه</router-link>
                        </div>
                      </div>
                    </div>
                    <div class="design-item mobile-hidden">
                      <div class="design-item__box-grad"></div>
                      <div class="design-item__content">
                        <router-link to="/project/1236">
                          <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                        </router-link>
                        <div class="design-item__content__title">
                          <router-link to="">مشاريع مميزه</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="owl-dots">
                    <div class="owl-dots__next"><i class="fas fa-angle-right"></i></div>
                    <div class="owl-dots__slide">
                      <div class="owl-dots__slide__item active"></div>
                      <div class="owl-dots__slide__item"></div>
                      <div class="owl-dots__slide__item"></div>
                    </div>
                    <div class="owl-dots__previous"><i class="fas fa-angle-left"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Interior Design apps -->
        <div class="section">
          <router-link to="projects/132568">
            <div class="section__container row">
              <div class="section__sub-1 col-12 col-md-3">
                <div class="section__title">
                  <h3 class="section__title__heading">احدث اعمال التصميم داخلي</h3>
                </div>
              </div>
              <div class="section__sub-2 col-12 col-md-9">
                <div class="section__content">
                  <div class="designs">
                    <div class="design-item">
                      <div class="design-item__box-grad"></div>
                      <div class="design-item__content">
                        <router-link to="/project/1236">
                          <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                        </router-link>
                        <div class="design-item__content__title">
                          <router-link to="">مشاريع مميزه</router-link>
                        </div>
                      </div>
                    </div>
                    <div class="design-item mobile-hidden">
                      <div class="design-item__box-grad"></div>
                      <div class="design-item__content">
                        <router-link to="/project/1236">
                          <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                        </router-link>
                        <div class="design-item__content__title">
                          <router-link to="">مشاريع مميزه</router-link>
                        </div>
                      </div>
                    </div>
                    <div class="design-item mobile-hidden">
                      <div class="design-item__box-grad"></div>
                      <div class="design-item__content">
                        <router-link to="/project/1236">
                          <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                        </router-link>
                        <div class="design-item__content__title">
                          <router-link to="">مشاريع مميزه</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="owl-dots">
                    <div class="owl-dots__next"><i class="fas fa-angle-right"></i></div>
                    <div class="owl-dots__slide">
                      <div class="owl-dots__slide__item active"></div>
                      <div class="owl-dots__slide__item"></div>
                      <div class="owl-dots__slide__item"></div>
                    </div>
                    <div class="owl-dots__previous"><i class="fas fa-angle-left"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Exterior Design apps -->
        <div class="section">
          <router-link to="projects/132568">
            <div class="section__container row">
              <div class="section__sub-1 col-12 col-md-3">
                <div class="section__title">
                  <h3 class="section__title__heading">احدث اعمال التصميم الخارجي</h3>
                </div>
              </div>
              <div class="section__sub-2 col-12 col-md-9">
                <div class="section__content">
                  <div class="designs">
                    <div class="design-item">
                      <div class="design-item__box-grad"></div>
                      <div class="design-item__content">
                        <router-link to="/project/1236">
                          <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                        </router-link>
                        <div class="design-item__content__title">
                          <router-link to="">مشاريع مميزه</router-link>
                        </div>
                      </div>
                    </div>
                    <div class="design-item mobile-hidden">
                      <div class="design-item__box-grad"></div>
                      <div class="design-item__content">
                        <router-link to="/project/1236">
                          <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                        </router-link>
                        <div class="design-item__content__title">
                          <router-link to="">مشاريع مميزه</router-link>
                        </div>
                      </div>
                    </div>
                    <div class="design-item mobile-hidden">
                      <div class="design-item__box-grad"></div>
                      <div class="design-item__content">
                        <router-link to="/project/1236">
                          <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                        </router-link>
                        <div class="design-item__content__title">
                          <router-link to="">مشاريع مميزه</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="owl-dots">
                    <div class="owl-dots__next"><i class="fas fa-angle-right"></i></div>
                    <div class="owl-dots__slide">
                      <div class="owl-dots__slide__item active"></div>
                      <div class="owl-dots__slide__item"></div>
                      <div class="owl-dots__slide__item"></div>
                    </div>
                    <div class="owl-dots__previous"><i class="fas fa-angle-left"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Shop Drawing apps -->
        <div class="section">
          <router-link to="projects/132568">
            <div class="section__container row">
            <div class="section__sub-1 col-12 col-md-3">
              <div class="section__title">
                <h3 class="section__title__heading">احدث اعمال التصورات السوقية</h3>
              </div>
            </div>
            <div class="section__sub-2 col-12 col-md-9">
              <div class="section__content">
                <div class="designs">
                  <div class="design-item">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="/project/1236">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">مشاريع مميزه</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="/project/1236">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">مشاريع مميزه</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="/project/1236">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">مشاريع مميزه</router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-dots">
                  <div class="owl-dots__next"><i class="fas fa-angle-right"></i></div>
                  <div class="owl-dots__slide">
                    <div class="owl-dots__slide__item active"></div>
                    <div class="owl-dots__slide__item"></div>
                    <div class="owl-dots__slide__item"></div>
                  </div>
                  <div class="owl-dots__previous"><i class="fas fa-angle-left"></i></div>
                </div>
              </div>
            </div>
          </div>
          </router-link>
        </div>

        <!-- Motion Graphics apps -->
        <div class="section">
          <router-link to="/motion-graphic">
            <div class="section__container row">
            <div class="section__sub-1 col-12 col-md-3">
              <div class="section__title">
                <h3 class="section__title__heading">احدث اعمال الرسوم المتحركة</h3>
              </div>
            </div>
            <div class="section__sub-2 col-12 col-md-9">
              <div class="section__content">
                <div class="designs">
                  <div class="design-item">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="motion-graphic/4513">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">مشاريع مميزه</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="motion-graphic/4513">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">مشاريع مميزه</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="motion-graphic/4513">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">مشاريع مميزه</router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-dots">
                  <div class="owl-dots__next"><i class="fas fa-angle-right"></i></div>
                  <div class="owl-dots__slide">
                    <div class="owl-dots__slide__item active"></div>
                    <div class="owl-dots__slide__item"></div>
                    <div class="owl-dots__slide__item"></div>
                  </div>
                  <div class="owl-dots__previous"><i class="fas fa-angle-left"></i></div>
                </div>
              </div>
            </div>
          </div>
          </router-link>
        </div>

        <!-- Photography apps -->
        <div class="section">
          <router-link to="projects/132568">
            <div class="section__container row">
            <div class="section__sub-1 col-12 col-md-3">
              <div class="section__title">
                <h3 class="section__title__heading">احدث اعمال التصوير</h3>
              </div>
            </div>
            <div class="section__sub-2 col-12 col-md-9">
              <div class="section__content">
                <div class="designs">
                  <div class="design-item">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="/project/1236">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">مشاريع مميزه</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="/project/1236">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">مشاريع مميزه</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="/project/1236">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">مشاريع مميزه</router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-dots">
                  <div class="owl-dots__next"><i class="fas fa-angle-right"></i></div>
                  <div class="owl-dots__slide">
                    <div class="owl-dots__slide__item active"></div>
                    <div class="owl-dots__slide__item"></div>
                    <div class="owl-dots__slide__item"></div>
                  </div>
                  <div class="owl-dots__previous"><i class="fas fa-angle-left"></i></div>
                </div>
              </div>
            </div>
          </div>
          </router-link>
        </div>

      </main>

    </div>

    <div class="en" v-else-if="getLang === 'en'">
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

      <main class="pt-5 pb-5">

        <!-- Mobile apps -->
        <div class="section">
          <div class="section__container row">
            <div class="section__sub-1 col-12 col-md-4"
                 data-aos="fade-right"
                 data-aos-duration="3000"
            >
              <div class="section__title">
                <h3 class="section__title__heading">Learn about We Work apps</h3>
                <router-link to="/mobile-applications" class="section__title__btn mt-3">Discover all</router-link>

              </div>
            </div>
            <div class="section__sub-2 col-12 col-md-8"
                 data-aos="fade-left"
                 data-aos-duration="3000"
            >
              <div class="section__content">
                <div class="mobile-apps">
                  <router-link class="mobile-apps__app" to="/mobile-application/613265">
                    <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                  </router-link>
                  <router-link class="mobile-apps__app" to="/mobile-application/613265">
                    <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                  </router-link>
                  <router-link class="mobile-apps__app" to="/mobile-application/613265">
                    <img src="../../assets/img/mobile_apps/mobiles1-600.png">
                  </router-link>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Websites -->
        <div class="section">
          <div class="section__container row">
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
              <div class="section__title">
                <h3 class="section__title__heading">See all We Work websites</h3>
                <router-link to="/websites" class="section__title__btn mt-3">Discover all</router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- UI \ UX apps -->
        <div class="section">
          <router-link to="projects/132568">
            <div class="section__container row">
            <div class="section__sub-1 col-12 col-md-3">
              <div class="section__title">
                <h3 class="section__title__heading">We Work projects in UI / UX</h3>
              </div>
            </div>
            <div class="section__sub-2 col-12 col-md-9">
              <div class="section__content">
                <div class="designs">
                  <div class="design-item">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-dots">
                  <div class="owl-dots__previous"><i class="fas fa-angle-left"></i></div>
                  <div class="owl-dots__slide">
                    <div class="owl-dots__slide__item active"></div>
                    <div class="owl-dots__slide__item"></div>
                    <div class="owl-dots__slide__item"></div>
                  </div>
                  <div class="owl-dots__next"><i class="fas fa-angle-right"></i></div>
                </div>
              </div>
            </div>
          </div>
          </router-link>
        </div>

        <!-- Interior Design apps -->
        <div class="section">
          <router-link to="projects/132568">
            <div class="section__container row">
            <div class="section__sub-1 col-12 col-md-3">
              <div class="section__title">
                <h3 class="section__title__heading">Latest interior design work</h3>
              </div>
            </div>
            <div class="section__sub-2 col-12 col-md-9">
              <div class="section__content">
                <div class="designs">
                  <div class="design-item">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-dots">
                  <div class="owl-dots__previous"><i class="fas fa-angle-left"></i></div>
                  <div class="owl-dots__slide">
                    <div class="owl-dots__slide__item active"></div>
                    <div class="owl-dots__slide__item"></div>
                    <div class="owl-dots__slide__item"></div>
                  </div>
                  <div class="owl-dots__next"><i class="fas fa-angle-right"></i></div>
                </div>
              </div>
            </div>
          </div>
          </router-link>
        </div>

        <!-- Exterior Design apps -->
        <div class="section">
          <router-link to="projects/132568">
            <div class="section__container row">
            <div class="section__sub-1 col-12 col-md-3">
              <div class="section__title">
                <h3 class="section__title__heading">Latest exterior design work</h3>
              </div>
            </div>
            <div class="section__sub-2 col-12 col-md-9">
              <div class="section__content">
                <div class="designs">
                  <div class="design-item">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-dots">
                  <div class="owl-dots__previous"><i class="fas fa-angle-left"></i></div>
                  <div class="owl-dots__slide">
                    <div class="owl-dots__slide__item active"></div>
                    <div class="owl-dots__slide__item"></div>
                    <div class="owl-dots__slide__item"></div>
                  </div>
                  <div class="owl-dots__next"><i class="fas fa-angle-right"></i></div>
                </div>
              </div>
            </div>
          </div>
          </router-link>
        </div>

        <!-- Shop Drawing apps -->
        <div class="section">
          <router-link to="projects/132568">
            <div class="section__container row">
            <div class="section__sub-1 col-12 col-md-3">
              <div class="section__title">
                <h3 class="section__title__heading">Latest shop drawing work</h3>
              </div>
            </div>
            <div class="section__sub-2 col-12 col-md-9">
              <div class="section__content">
                <div class="designs">
                  <div class="design-item">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-dots">
                  <div class="owl-dots__previous"><i class="fas fa-angle-left"></i></div>
                  <div class="owl-dots__slide">
                    <div class="owl-dots__slide__item active"></div>
                    <div class="owl-dots__slide__item"></div>
                    <div class="owl-dots__slide__item"></div>
                  </div>
                  <div class="owl-dots__next"><i class="fas fa-angle-right"></i></div>
                </div>
              </div>
            </div>
          </div>
          </router-link>
        </div>

        <!-- Motion Graphics apps -->
        <div class="section">
          <router-link to="/motion-graphic">
            <div class="section__container row">
            <div class="section__sub-1 col-12 col-md-3">
              <div class="section__title">
                <h3 class="section__title__heading">Latest motion graphics work</h3>
              </div>
            </div>
            <div class="section__sub-2 col-12 col-md-9">
              <div class="section__content">
                <div class="designs">
                  <div class="design-item">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-dots">
                  <div class="owl-dots__previous"><i class="fas fa-angle-left"></i></div>
                  <div class="owl-dots__slide">
                    <div class="owl-dots__slide__item active"></div>
                    <div class="owl-dots__slide__item"></div>
                    <div class="owl-dots__slide__item"></div>
                  </div>
                  <div class="owl-dots__next"><i class="fas fa-angle-right"></i></div>
                </div>
              </div>
            </div>
          </div>
          </router-link>
        </div>

        <!-- Photography apps -->
        <div class="section">
          <router-link to="projects/132568">
            <div class="section__container row">
            <div class="section__sub-1 col-12 col-md-3">
              <div class="section__title">
                <h3 class="section__title__heading">Latest photography work</h3>
              </div>
            </div>
            <div class="section__sub-2 col-12 col-md-9">
              <div class="section__content">
                <div class="designs">
                  <div class="design-item">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                  <div class="design-item mobile-hidden">
                    <div class="design-item__box-grad"></div>
                    <div class="design-item__content">
                      <router-link to="">
                        <img class="design-item__content__img" src="../../assets/img/interior-design/BaDROOM.jpg">
                      </router-link>
                      <div class="design-item__content__title">
                        <router-link to="">Test project</router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-dots">
                  <div class="owl-dots__previous"><i class="fas fa-angle-left"></i></div>
                  <div class="owl-dots__slide">
                    <div class="owl-dots__slide__item active"></div>
                    <div class="owl-dots__slide__item"></div>
                    <div class="owl-dots__slide__item"></div>
                  </div>
                  <div class="owl-dots__next"><i class="fas fa-angle-right"></i></div>
                </div>
              </div>
            </div>
          </div>
          </router-link>
        </div>

      </main>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  components: {
    Navbar,
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
@import "../../assets/scss/mixins";
@import "../../assets/scss/composition";
@import "../../assets/scss/figure";

* {
  transition: .4s all;
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}

.projects {
  background: $color-grey-light-4;
}

.ar {
  text-align: right;
  direction: rtl;
}

.page-header {
  padding-top: 100px;
}

.section {
  background: $color-white;
  margin: 100px 0;

  &__container {
    padding: 5%;
  }

  &__sub-1,
  &__sub-2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__sub-1  {
    margin-bottom: 20px;
  }

  &__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
      background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
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
        background: linear-gradient(90deg, $color-primary-dark-1, $color-primary-light);
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba($color-black,.2);
      }
    }

  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
  height: 400px;
}

.designs {
  display: flex;
}

.design-item {
  position: relative;
  width: 275px;
  margin: 10px;

  &__box-grad {
    left: 0 !important;
    right: 0 !important;
    background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1) !important;
    display: block;
    height: 100%;
    position: absolute;
    top: 5px;
    bottom: 0;
    border-radius: 8px !important;
  }

  &__content {
    background: $color-white;
    padding: 10px 12px;
    border-radius: 8px 8px 40px 8px !important;
    position: relative;

    &__img {
      width: 100%;
      height: 200px;
      border-radius: 8px;
    }

    &__title {
      margin: 7px;

      & a {
        text-decoration: none;
        color: #343434;
        font-size: 18px;
        font-family: "We work Bold";
        font-weight: 500;

        &:hover {
          color: $color-primary-dark-1;
        }
      }
    }

      &:hover {
        transform: translate3d(0, -4px, 0);
      }
  }
}

.owl-dots {
  display: flex;
  width: 100%;
  margin-top: 60px;

  &__next,
  &__previous {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: $color-white;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }

    i {
      font-size: 40px;
      font-weight: 100;
      color: $color-primary-dark-1;
    }
  }

  &__slide {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    cursor: pointer;
    width: calc(100% - 50px);

    &__item {
      width: 60px;
      height: 3px;
      background-color: $color-primary-dark-1;
      border-radius: 10px;

      &.active {
        height: 9px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .composition-container {
    height: auto;
    padding: 40px 0;
  }

  .section__container {
    padding: 10% 5%;
  }

  .mobile-hidden {
    display: none;
  }

  .owl-dots__slide__item {
    width: 40px;

  }
}


</style>