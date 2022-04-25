<template>
  <b-navbar class="header-navbar" v-if="getLang === 'en'">
    <span class="header-navbar__msg">Welcome to We Work.</span>

    <div class="header-navbar__settings">

      <div class="header-navbar__settings__lang">
        <b-dropdown variant="link" class="dropdown" toggle-class="text-decoration-none" no-caret>
          <template #button-content>
            <span class="header-navbar__settings__lang__img">
              <img src="../../assets/img/flag-icon.jpg">
            </span>
            <span class="header-navbar__settings__lang__title">English</span>
            <i class="header-navbar__settings__lang__icon fas fa-angle-down"></i>
          </template>
          <b-dropdown-item @click="setLang('ar')">
            <div class="ar_lang">
              <span class="header-navbar__settings__lang__title mr-2">عربي</span>
              <span class="header-navbar__settings__lang__img">
              <img src="../../assets/img/flag-icon.jpg">
            </span>
            </div>
          </b-dropdown-item>
        </b-dropdown>
      </div>



    </div>
  </b-navbar>

  <b-navbar class="header-navbar ar" v-else-if="getLang === 'ar'">
    <span class="header-navbar__msg">مرحبًا بكم في وي ورك.</span>

    <div class="header-navbar__settings">

      <div class="header-navbar__settings__lang">
        <b-dropdown variant="link" class="dropdown" toggle-class="text-decoration-none" no-caret>
          <template #button-content>
            <div class="ar_lang">
              <span class="header-navbar__settings__lang__img">
                <img src="../../assets/img/flag-icon.jpg">
              </span>
              <span class="header-navbar__settings__lang__title mr-2">عربي</span>
              <i class="header-navbar__settings__lang__icon fas fa-angle-down"></i>
            </div>
          </template>
          <b-dropdown-item @click="setLang('en')">
            <span class="header-navbar__settings__lang__title">English</span>
            <span class="header-navbar__settings__lang__img">
              <img src="../../assets/img/flag-icon.jpg">
            </span>
          </b-dropdown-item>
        </b-dropdown>
      </div>



    </div>
  </b-navbar>

</template>

<script>
export default {
  name: "HeaderNavbar",
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

.header-navbar {
  padding: 0 50px;
  display: flex;
  justify-content: center;
  background: #373b44; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, $color-primary, $color-primary-light); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, $color-primary, $color-primary-light); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: $color-white;
  height: 40px;
  z-index: 1001;

  &__msg {
    margin: 8px 0;
    font-family: "We work Medium";
  }

  &__settings {
    margin: 0 5px 0 auto;
    display: flex;
    padding: 0;

    &__icons {
      margin: auto 15px;

      & i {
        margin: 0 5px;
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;

        &:hover {
          color: $color-primary;
          background-color: $color-white;
        }
      }
    }

    &__lang {
      display: flex;
      align-items: center;
      color: $color-primary;
      background: #ffffff !important;
      margin: 0;
      padding: 5px 10px;
      min-height: 40px;
      cursor: pointer;

      &__img {
        margin-right: 8px;

        & img {
          max-width: 100%;
          height: auto;
        }
      }

      &__icon {
        margin: auto 0 auto 5px;
      }
    }
  }

  .ar_lang {
    text-align: right;
  }

  .dropdown-menu {
    margin: 0 !important;
  }

}

.ar {
  text-align: right;
  direction: rtl;
  font-family: 'TheSansArabic' !important;

  & .header-navbar__settings {
    margin: 0 auto 0 5px;
  }

  & .header-navbar__settings__lang__icon {
    margin: auto 5px auto 0;
  }
}

@media (max-width: 1024px) {
  .header-navbar {
    padding: 0 10px;
    display: flex;
    justify-content: center;

    &__settings {
      margin: 0 10px;

      &__icons {
        margin: auto 5px;

        & i {
          margin: 0;
        }
      }
    }
  }

}

</style>