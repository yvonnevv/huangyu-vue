<template>
  <div class="container">
    <!-- 导航 -->
    <navbar></navbar>
    <banner>
      <img src="http://www.royalhonors.group/temp-rainy/5d5c47d0-5c08-4cd1-97ae-8b7c6ce37c0c.png" alt="" srcset="">
    </banner>
    <main-content :title="title" :links="links" :activePath="activePath">
      <transition name="fade" mode="out-in">
      <router-view keep-alive></router-view>
    </transition>
    </main-content>
    <!-- <router-view keep-alive></router-view> -->
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
      activePath: '/home',
      title: {
        zh: '联系我们',
        en: 'Business promotion'
      },
      links: [{
        title: '联系方式',
        to: '/home'
      }, {
        title: '海沙销售代理商',
        to: '/haisha'
      }]
    }
  },
  computed: {
    ...mapState(["urlItems"])
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
// .v-link-active {
//   color: #f66 !important;
// }
</style>
