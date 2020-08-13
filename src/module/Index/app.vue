<template>
  <div class="container">
    <!-- 导航 -->
    <navbar></navbar>
    <div class="home-banner">
      <img :src="bannerImg" alt="" srcset="">
      <i></i>
    </div>
    <div class="home-list">
      <div class="home-list__img" v-for="(item, index) in figure" :key="index">
        <a :href="item.path">
            <img :src="item.imagePath" alt />
            <p>{{item.title}}</p>
        </a>
      </div>
    </div>
    <div class="home-news">
      <h3>最新资讯</h3>
      <div class="home-news-card">
        <div class="home-news-type">
          <h4>集团新闻</h4>
          <a class="more" href="news.html#/jituan">查看更多>>></a>
        </div>
        <div class="home-news-card__list" v-for="(item, index) in groupNews" :key="index">
          <a :href="`news.html#/jituan?id=${item.id}`">
            <p class="title">{{item.articleTitle}}</p>
            <span class="time">{{item.createdTime}}</span>
          </a>
        </div>
      </div>
      <div class="home-news-card">
        <div class="home-news-type">
          <h4>行业新闻</h4>
          <a class="more" href="news.html#/hangye">查看更多>>></a>
        </div>
        <div class="home-news-card__list" v-for="(item, index) in tradeNews" :key="index">
          <a :href="`news.html#/hangye?id=${item.id}`">
            <p class="title">{{item.articleTitle}}</p>
            <span class="time">{{item.createdTime}}</span>
          </a>
        </div>
      </div>
    </div>

    <copyright></copyright>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import navbar from "@/components/navbar";
import copyright from "@/components/copyright";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["figure", "groupNews", "tradeNews", "bannerImg"]),
  },
  components: {
    navbar,
    copyright,
  },
  created() {
    this.$store.dispatch("LOAD_COPYRIGHT");
    this.$store.dispatch("LOAD_PAGE_INDEX");
  },
  watch: {},
};
</script>
<style lang="less">
@import "../../assets/style/likr.less";
html,
body,
.container,
.home-banner {
  width: 100%;
  height: 100%;
}
body {
  background: #cccccc;
}
.container {
  overflow-x: hidden;
}
.home-banner {
  position: relative;
  img {
    position: relative;
    z-index: 800;
    width: 100%;
    height: 100%;
  }
  i {
    position: absolute;
    width: 123px;
    height: 343px;
    background: url('../../assets/images/bg_text.png') no-repeat;
    background-size: cover;
    top: 160px;
    left: 80px;
  }
}
.home-list,
.home-news {
  padding: 0 22px;
  margin-top: 20px;
}

.home-list__img {
  margin-bottom: 23px;
  position: relative;

  a {
    display: block;
    height: 314px;
    // padding: 20px;
    border: 20px solid rgba(255, 255, 255, 0.5);
    // background: rgba(255, 255, 255, 0.5);
    overflow: hidden;
    position: relative;
  }

  img {
    width: 100%;
    height: auto;
    // border: 20px solid rgba(255, 255, 255, 0.5);
    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  p {
    height: 48px;
    line-height: 48px;
    background: rgba(0, 0, 0, 0.3);
    color: #ffffff;
    font-size: 28px;
    text-indent: 18px;
    font-weight: 300;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
}
.home-news {
  h3 {
    color: #333333;
    font-size: 22px;
  }

  &-type {
    display: flex;
    position: relative;
    padding: 17px 0 10px;
    border-bottom: 1px solid rgba(0,0,0,0.5);

    a.more {
      color: #333333;
      font-size: 14px;
      // transform: scale(0.8);
      transform-origin: center right;
      white-space: nowrap;
      margin-left: auto;
      position: absolute;
      right: 0;
      height: auto;
      border-bottom: none;
    }
  }

  &-card {
    background: rgba(255, 255, 255, 0.8);
    padding: 16px;
    max-height: 328px;
    overflow-y: scroll;
    margin-bottom: 42px;
    margin-top: 10px;

    h4 {
      color: #DFC287;
      font-size: 22px;
    }

    &__list:last-child {
      a {
        border-bottom: none;
      }
    }

    a {
      color: #666666;
      font-size: 20px;
      display: flex;
      position: relative;
      height: 63px;
      align-items: center;
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    p.title{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 480px;
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
.hy-copyright {
  background:rgba(0,0,0,0.4) !important;
}
</style>
