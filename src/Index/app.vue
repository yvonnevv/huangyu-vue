<template>
  <div class="container">
    <!-- 导航 -->
    <navbar></navbar>
    <div class="home-banner"></div>
    <div class="home-list">
      <div class="home-list__img">
        <img src="" alt="">
        <p></p>
      </div>
    </div>
    <div class="home-news">
      <h3>最新资讯</h3>
      <div class="home-news-card">
        <div><h4>集团新闻</h4><span>查看更多>>></span></div>
        <div class="home-news-card__list">
          <a href="">
            <p>{{item.articleTitle}}</p>
            <span>{{item.createdTime}}</span>
          </a>
        </div>
      </div>
      <div class="home-news-card">
        <div><h4>行业新闻</h4><span>查看更多>>></span></div>
        <div class="home-news-card__list">
          <a href="">
            <p>{{item.articleTitle}}</p>
            <span>{{item.createdTime}}</span>
          </a>
        </div>
      </div>
    </div>

    <copyright></copyright>
  </div>
</template>
<script>
import { mapState } from "vuex";
import navbar from "@/components/navbar";
import copyright from "@/components/copyright";

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['pageIndex'])
  },
  components: {
    navbar,
    copyright
  },
  created() {
    this.$store.dispatch('LOAD_COPYRIGHT');
    this.$store.dispatch('LOAD_PAGE_INDEX');
  },
  watch: {
    
  }
};
</script>
<style lang="less">
@import "../../assets/style/likr.less";

</style>
