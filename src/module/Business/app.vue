<template>
  <div class="container">
    <!-- 导航 -->
    <navbar></navbar>
    <banner>
      <img :src="pageInfo.imagePath" alt="" srcset="">
    </banner>
    <main-content :title="title" :links="links" :activePath="activePath">
      <transition name="fade" mode="out-in">
        <router-view keep-alive></router-view>
      </transition>
    </main-content>
    <copyright></copyright>
  </div>
</template>
<script>
import { mapState } from "vuex";
import navbar from "@/components/navbar";
import banner from "@/components/banner";
import copyright from "@/components/copyright";
import mainContent from "@/components/content";

export default {
  data() {
    return {
      activePath: '/kuangchan',
      articleImgs: [],
      title: {
        zh: '集团概况',
        en: 'Group profile'
      },
      links: [{
        title: '关于皇誉',
        to: '/about'
      }, {
        title: '荣誉资质',
        to: '/rongyu'
      }, {
        title: '投资合作',
        to: '/hezuo'
      }]
    }
  },
  computed: {
    ...mapState([
      'pageInfo',
      // 'pageImgs'
    ])
  },
  created() {
    this.$store.dispatch('LOAD_COPYRIGHT');
    this.$store.dispatch('LOAD_PAGEINFO');
  },
  components: {
    navbar,
    copyright,
    banner,
    mainContent
  },
  watch: {
    $route(to, from) {
      this.activePath = to.path;
    }
  }
};
</script>
<style lang="less">
@import "../../assets/style/likr.less";

.hy-article-imgs {
  margin: 0 10px;
  display: flex;

  img {
    flex: 1;
    width: 226px;
    margin: 0 7px;
  }
}

.swiper-container {
  margin-top: 68px;
}

.swiper-slide {
  transform: scale(0.8);
  opacity: 0.6;

  &.swiper-slide-active {
    transform: scale(1.2);
    opacity: 1;
  }
}

</style>
