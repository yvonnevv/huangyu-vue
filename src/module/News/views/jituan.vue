<template>
  <div class="hy-main-wrap">
    <div class="hy-title">集团新闻</div>
    <div v-if="detailId === -1" class="news-list">
      <div v-for="(item, index) in GroupNews" :key="index">
        <router-link :to="`?id=${item.id}`">
          <div class="news-list-item" v-if="!index">
            <img :src="item.image" alt />
            <div>
              <p class="first-title">{{item.articleTitle}}</p>
              <router-link :to="`?id=${item.id}`">查看详情>>></router-link>
            </div>
          </div>
          <div class="news-list-item" v-else>
            <p class="title">{{item.articleTitle}}</p>
            <span class="time">{{item.createdTime}}</span>
          </div>
        </router-link>
      </div>
    </div>
    <div v-else class="hy-article">
      <h3 class="title">{{newsDetail.articleTitle}}</h3>
      <div v-html="newsDetail.contentsArticle"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "",
  data() {
    return {
      GroupNews: [],
      detailId: -1
    };
  },
  components: {},
  props: {},
  computed: {
    ...mapState(['newsList', 'newsDetail']),
  },
  watch: {
    newsList(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.GroupNews = newVal.GroupNews;
      }
    },
    $route(to, from) {
      this.fetchData(to);
    }
  },
  mounted() {
    this.GroupNews = this.newsList.GroupNews;
    this.fetchData(this.$route);
  },
  methods: {
    fetchData(route) {
      const { id } = route.query;
      if (!id && id !== 0) {
        this.detailId = -1;
      } else if (id !== this.detailId) {
        this.detailId = id;
        this.$store.dispatch('LOAD_NEWS_DETAIL', id);
      }
    }
  },
};
</script>
<style lang='less' scoped>
</style>