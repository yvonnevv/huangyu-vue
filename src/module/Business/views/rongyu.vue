<template>
  <div class="hy-main-wrap">
    <div class="hy-title">荣誉资质</div>
    <div class="hy-article">
      <div v-html="pageRongyu.content"></div>
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(img, index) in imgsList" :key="index">
          <img :src="img">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper.less';

export default {
  name: '',
  data() {
    return {
      imgsList: [],
      swiperOptions: {
        slidesPerView: 3,
        initialSlide: 1,
        centeredSlides: true,
        loop: true,
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  props: {},
  computed: {
    ...mapState(['pageRongyu'])
  },
  created() {
    this.$store.dispatch('LOAD_PAGE_RONGYU');
  },
  watch: {
    pageRongyu(newVal, oldVal) {
      if (newVal !== oldVal) {
        const { image1, image2, image3, image4 } = newVal;
        this.imgsList = [image1, image2, image3, image4];
      }
    }
  },
  methods: {}
};
</script>
<style lang='less' scoped>
</style>