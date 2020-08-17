<template>
  <div class="container">
    <!-- 导航 -->
    <navbar :nowopenidx="3"></navbar>
    <banner>
      <img :src="pageInfo.imagePath" alt="" srcset="">
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
    ...mapState(['pageInfo'])
  },
  components: {
    navbar,
    copyright,
    banner,
    mainContent
  },
  created() {
    this.$store.dispatch('LOAD_COPYRIGHT');
    this.$store.dispatch('LOAD_PAGEINFO');
  },
  watch: {
    $route(to, from) {
      console.log('topath', to);
      this.activePath = to.path;
    }
  }
};
</script>
<style lang="less">
@import "../../assets/style/likr.less";

.hy-article {
  img {
    width: 170px;
    height: 125px;
    margin: 20px 0 10px;
  }
  h3, p {
    font-size: 24px;
  }
  h3 {
    color: #333333;
    font-weight: bold;
  }
  .contact-list {
    margin-bottom: 20px;
  }
}
</style>
