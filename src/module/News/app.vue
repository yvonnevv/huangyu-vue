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
      activePath: '/jituan',
      articleImgs: [],
      title: {
        zh: '新闻中心',
        en: 'Information Center'
      },
      links: [{
        title: '集团新闻',
        to: '/jituan'
      }, {
        title: '行业新闻',
        to: '/hangye'
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
    this.$store.dispatch('LOAD_NEWS_LIST');
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
.news-list {
  &-item {
    min-height: 84px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    position: relative;

    img {
      width: 139px;
      height: 100px;
      margin: 20px 15px 20px 0;
    }

    a {
      color: #DFC287;
      font-size: 24px;
      margin-top: 25px;
      display: inline-block;
    }

    p {
      color: #333333;
      font-size: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &.title {
        max-width: 327px;
      }

      &.first-title {
        font-size: 28px;
        max-width: 315px;
      }
    }

    span.time {
      color: #999999;
      font-size: 18px;
      // transform: scale(0.8);
      transform-origin: center right;
      white-space: nowrap;
      margin-left: auto;
      position: absolute;
      right: 0;
    }
  }
}

</style>
