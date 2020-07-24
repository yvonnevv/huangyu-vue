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
      <img v-for="" src="" alt="">
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
      imgs: [],
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
      'pageKuangchan',
      'pageJijian',
      'pageTianhai',
      'pageTouzi'
    ])
  },
  created() {
    this.$store.dispatch('LOAD_COPYRIGHT');
    this.$store.dispatch('LOAD_PAGEINFO');
    // 默认
    const hash = location.hash ? location.hash.substring(2) : 'kuangchan';
    console.log('HASH', hash);
    const curPageKey = this.getPageKey(hash);
    // this.imgs = this[curPageKey];
    console.log('this[curPageKey]', curPageKey, this[curPageKey]);
  },
  components: {
    navbar,
    copyright,
    banner,
    mainContent
  },
  watch: {
    $route(to, from) {
      const { path, name } = to;
      const curPageKey = this.getPageKey(name);
      console.log('curPageKey', curPageKey);
      this.activePath = path;
      console.log('TO>>>', to);
    }
  },
  methods: {
    getPageKey(hash) {
      return `page${hash.charAt(0).toUpperCase()}${hash.substring(1)}`;
    }
  }
};
</script>
<style lang="less">
@import "../../assets/style/likr.less";
// .v-link-active {
//   color: #f66 !important;
// }
</style>
