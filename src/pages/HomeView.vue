<template>
  <div class="home">
    <div class="header ">
      <navbar class="header-2__navbar"></navbar>
      <carousel class="header-2__carousel"></carousel>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";
import Carousel from "@/components/ui/Carousel";

export default {
  name: 'HomeView',
  components: {
    Carousel,
    Navbar,

  },
  data() {
    return {
      settings: {
        "dots": true,
        "arrow": true,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "touchThreshold": 5
      }
    }
  }
}
</script>

<style scoped lang="scss">

.home {
  min-height: 5000px;
}

.header-2__carousel {
  position: relative;
}

@media (max-width: 1024px) {
  .header-2__carousel {
    margin-top: 60px;
  }
}
</style>
