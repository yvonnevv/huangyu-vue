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
    <!-- 不合理的设计布局 -->
    <div class="hy-article-imgs">
      <img v-for="(img, index) in pageImgs" :src="img" :key="index" alt="">
    </div>
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
        zh: '集团产业',
        en: 'Information Center'
      },
      links: [{
        title: '矿产资源',
        to: '/kuangchan'
      }, {
        title: '填海工程',
        to: '/tianhai'
      }, {
        title: '基建项目',
        to: '/jijian'
      }, {
        title: '投资项目',
        to: '/touzi'
      }]
    }
  },
  computed: {
    ...mapState([
      'pageInfo',
      'pageImgs'
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
  },
  methods: {
    // getPageKey(hash) {
    //   return `page${hash.charAt(0).toUpperCase()}${hash.substring(1)}`;
    // }
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
    height: 156px;
    margin: 0 7px;
  }
}

</style>
