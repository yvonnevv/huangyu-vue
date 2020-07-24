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
    ...mapState(['pageInfo'])
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
// .v-link-active {
//   color: #f66 !important;
// }
</style>
