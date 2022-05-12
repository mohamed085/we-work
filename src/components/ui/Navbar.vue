<template>
  <div class="header">
    <header-navbar></header-navbar>

    <div v-if="getLang === 'en'">
      <b-navbar toggleable="lg"
                class="navbar-2"
                :class="{sticky: scrollPosition > 40}">
        <b-navbar-brand class="navbar-brand" href="/">
          <img src="../../assets/img/iwork.png" class="navbar-brand__logo d-inline-block align-top " alt="Kitten">
          <span>We Work</span>
        </b-navbar-brand>


        <b-navbar-toggle class="navbar-toggle" target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto mr-5">
            <b-nav-item href="/">Home <i class="fas fa-angle-down"></i></b-nav-item>
            <b-nav-item href="/Projects">Projects <i class="fas fa-angle-down"></i></b-nav-item>
            <b-nav-item href="#">Services <i class="fas fa-angle-down"></i></b-nav-item>
            <b-nav-item href="/team">Team  <i class="fas fa-angle-down"></i></b-nav-item>
            <b-nav-item href="#">Clients <i class="fas fa-angle-down"></i></b-nav-item>
            <b-nav-item href="/join-us">Join us <i class="fas fa-angle-down"></i></b-nav-item>
            <b-nav-item href="#">About us <i class="fas fa-angle-down"></i></b-nav-item>
            <b-nav-item href="/contact">Contact us <i class="fas fa-angle-down"></i></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div v-else-if="getLang === 'ar'" class="ar">
      <b-navbar toggleable="lg" class="navbar-2"
                :class="{sticky: scrollPosition > 40}">
        <b-navbar-brand class="navbar-brand" href="/">
          <img src="../../assets/img/iwork.png" class="navbar-brand__logo d-inline-block align-top " alt="Kitten">
          <span>وي ورك</span>
        </b-navbar-brand>


        <b-navbar-toggle class="navbar-toggle" target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mr-auto mr-5">
            <b-nav-item href="/">الصفحة الرئيسية</b-nav-item>
            <b-nav-item href="/projects">المشاريع</b-nav-item>
            <b-nav-item href="/sad">الخدمات</b-nav-item>
            <b-nav-item href="/team">الفريق</b-nav-item>
            <b-nav-item href="/asd">العملاء</b-nav-item>
            <b-nav-item href="/join-us">انضم إلينا</b-nav-item>
            <b-nav-item href="/sad">معلومات عنا</b-nav-item>
            <b-nav-item href="/contact">اتصل بنا</b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>

      <div v-if="homeDropdownSection"
           :class="{stickyDropdown: scrollPosition > 40}"
           class="dropdown-section home-dropdown-section">

        Home
      </div>

      <div v-if="projectDropdownSection"
           :class="{stickyDropdown: scrollPosition > 40}"
           class="dropdown-section home-dropdown-section">

        <div class="projects-categories row">
          <div class="projects-category col-3">
            <h3 class="projects-category__title">
              <i class="fas fa-bullseye"></i>
              <span>كل المشاريع</span>
            </h3>
            <div class="projects-category__content">
              <ul class="projects-category__content__items">
                <li class="projects-category__content__items__item">
                  <router-link class="projects-category__content__items__item__link" to="/projects">
                    اكتشف كل المشاريع
                  </router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="projects-category col-3">
            <h3 class="projects-category__title">
              <i class="fas fa-bullseye"></i>
              <span>الديكور</span>
            </h3>

            <div class="projects-category__content">
              <ul class="projects-category__content__items">
                <li class="projects-category__content__items__item">
                  <router-link class="projects-category__content__items__item__link" to="/interior-design">
                    تصميم داخلي
                  </router-link>
                </li>
                <li class="projects-category__content__items__item">
                  <router-link class="projects-category__content__items__item__link" to="/exterior-design">
                    تصميم خارجي
                  </router-link>
                </li>
                <li class="projects-category__content__items__item">
                  <router-link class="projects-category__content__items__item__link" to="/shop-drawing">
                    تصورات السوق
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="projects-category col-3">
            <h3 class="projects-category__title">
              <i class="fas fa-bullseye"></i>
              <span>هندسة البرمجيات</span>
            </h3>

            <div class="projects-category__content">
              <ul class="projects-category__content__items">
                <li class="projects-category__content__items__item">
                  <router-link class="projects-category__content__items__item__link" to="/websites">
                    مواقع الويب
                  </router-link>
                </li>
                <li class="projects-category__content__items__item">
                  <router-link class="projects-category__content__items__item__link" to="/mobile-applications">
                    تطبيقات الهاتف الجوال
                  </router-link>
                </li>
                <li class="projects-category__content__items__item">
                  <router-link class="projects-category__content__items__item__link" to="/ui-ux">
                    UI \ UX
                  </router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="projects-category col-3">
            <h3 class="projects-category__title">
              <i class="fas fa-bullseye"></i>
              <span>التسويق</span>
            </h3>

            <div class="projects-category__content">
              <ul class="projects-category__content__items">
                <li class="projects-category__content__items__item">
                  <router-link class="projects-category__content__items__item__link" to="/motion-graphics">
                    الرسوم المتحركة
                  </router-link>
                </li>
                <li class="projects-category__content__items__item">
                  <router-link class="projects-category__content__items__item__link" to="/photography">
                    التصوير
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import HeaderNavbar from "@/components/ui/HeaderNavbar";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  components: {HeaderNavbar},
  data() {
    return {
      scrollPosition: null,
      homeDropdownSection: false,
      projectDropdownSection: false,
    }
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    setLang(lang) {
      this.$store.dispatch('main/setLang', lang);
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    displayDropdown(section) {
      if (section == 'homeDropdownSection') {
        this.projectDropdownSection = false
        if (this.homeDropdownSection == true)
          this.homeDropdownSection = false
        else
          this.homeDropdownSection = true
      }
      if (section == 'projectDropdownSection') {
        this.homeDropdownSection = false
        if (this.projectDropdownSection == true)
          this.projectDropdownSection = false
        else
          this.projectDropdownSection = true
      }
    }
  }

}
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";

.navbar-2 {
  position: fixed;
  top: 40px;
  z-index: 1000;
  background: -webkit-linear-gradient(to left, $color-primary, $color-primary-light); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, $color-primary, $color-primary-light); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  opacity: .7;
  width: 100%;
}

.navbar-brand {
  display: flex;
  align-items: center;

  &__logo {
    max-height: 40px;
  }

  & span {
    color: $color-white;
    margin: 5px;
    font-family: "We work Bold";
  }
}

.navbar-toggle {
  color: $color-white;
}

.nav-item .nav-link {
  color: $color-white !important;
  margin: 0 5px !important;
  font-weight: 600;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left:0;
    top: 0%;
    width: 0;
    height: 3px;
    background-color: $color-primary-dark;
    transition: width .4s ease-in-out;
  }

  &:hover {
    color: $color-primary-dark !important;
  }

  &:hover:after {
    width: 100%;
  }
}

.ar {
  direction: rtl;
  text-align: right;

  & .nav-item .nav-link {
    font-weight: 500;
    font-size: 14px;
    font-family: 'The Sans Arabic' !important;
  }
}

.sticky {
  position: fixed;
  top: 0;
  opacity: 1;
  background: $color-white;
  z-index: 1000;

  & .navbar-brand span {
    display: inline-block;
    background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark-1);
    -webkit-background-clip: text;
    color: transparent;
  }

  & .nav-item .nav-link {
    color: $color-primary-light !important;

    &::after {
      background-color: $color-primary;
    }

    &:hover {
      color: $color-primary-dark !important;
    }
  }
}

i {
  margin: auto 3px;
}

.dropdown-section {
  background: #E1E8E8;
  width: 100%;
  z-index: 1000;
  position: fixed;
  top: 100px;
  right: 0;
  padding: 30px 20px;

  &__container {
    background: #E1E8E8;
    border-radius: 8px 8px 40px 8px !important;
    background-position-x: 0 !important;
    background-size: 100% !important;
    box-shadow: 0px 0px 20px #0000000d;
    position: relative;
    flex-direction: column;
    word-wrap: break-word;
    padding: 30px 40px;

  }

  &__initi-grad-bg {
    z-index: -1;
    left: 0 !important;
    right: 0 !important;
    background: linear-gradient(90deg, $color-primary-light, $color-primary-dark-1);
    display: block;
    height: 100%;
    position: absolute;
    top: 8px;
    bottom: 0;
    border-radius: 8px !important;
  }
}

.stickyDropdown {
  top: 60px;
}

.dropdown-mobile-section {
  display: none;
}

.projects-categories {
  display: flex;


  & .projects-category {

    &__title {
      font-size: 20px;
      display: inline-block;
      background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark-1);
      -webkit-background-clip: text;
      color: transparent;

      & i {
        margin: auto 5px;
        font-size: 14px;
      }

      & span {
        padding: 0 5px 10px;
        border-bottom: 2px solid transparent;
        border-image: linear-gradient(to right, $color-primary-light, $color-primary-dark-1);
        border-image-slice: 1;
      }

    }

    &__content {
      padding: 15px 5px 10px 10px;

      &__items {
        list-style: none;

        &__item {
          margin-top: 5px;

          &::before {
            content: "\2022";
            color: $color-primary;
            font-weight: bold;
            font-size: 24px;
            display: inline-block;
            width: 1rem;
            margin-left: -1rem;
          }

          &__link {
            color: $color-primary-light;
            text-decoration: none;
            font-weight: 500;

            &:hover {
              color: $color-primary-dark;
            }
          }
        }
      }
    }
  }
}

.ar .projects-category__content__items__item::before {
  margin-left: 0;
  margin-right: -1rem;

}

@media (max-width: 1024px) {
  .navbar-2 {
    opacity: 1;
    background: $color-white !important;

    & .navbar-brand span {
      color: $color-primary !important;
    }

    & .nav-item .nav-link {
      color: $color-black !important;

      &::after {
        background-color: $color-primary;
      }

      &:hover {
        color: $color-primary !important;
      }
    }
  }

  .dropdown-section {
    display: none;
  }

  .dropdown-mobile-section {
    display: block;
  }


}

</style>