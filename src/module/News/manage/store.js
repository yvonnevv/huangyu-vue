import Vue from 'vue';
import Vuex from 'vuex';
import $http from '../../../util/httpRequest';

Vue.use(Vuex);

const prefix = 'http://www.royalhonors.group';

const SET_COPYRIGHT = 'SET_COPYRIGHT';
const SET_PAGEINFO = 'SET_PAGEINFO';
const SET_NEWS_LIST = 'SET_NEWS_LIST';
const SET_NEWS_DETAIL = 'SET_NEWS_DETAIL';

const fetchData = (url, commit, type) => {
  $http.get(url).then((response) => {
    const {
      retEntity
    } = response;

    commit(type, {
      data: retEntity
    })
  });
};

const store = new Vuex.Store({
  state: {
    copyright: {},
    pageInfo: {},
    newsDetail: {},
    newsList: {}
  },
  actions: {
    LOAD_COPYRIGHT: ({ commit }) => {
      fetchData('/index/headline', commit, SET_COPYRIGHT);
    },
    LOAD_PAGEINFO: ({ commit }) => {
      fetchData('/index/background?id=63', commit, SET_PAGEINFO);
    },
    // 这里api设计的有问题=_=
    LOAD_NEWS_LIST: ({ commit }) => {
      fetchData('/index/journAism', commit, SET_NEWS_LIST);
    },
    LOAD_NEWS_DETAIL: ({ commit }, id) => {
      fetchData(`/index/journAismId?id=${id}`, commit, SET_NEWS_DETAIL);
    }
  },
  mutations: {
    [SET_COPYRIGHT]: (state, { data = [] }) => {
      state.copyright = data[0];
    },
    [SET_PAGEINFO]: (state, { data }) => {
      data.imagePath = `${prefix}${data.imagePath}`;
      state.pageInfo = data;
    },
    [SET_NEWS_LIST]: (state, { data }) => {
      let { GroupNews, TradeNews } = data;
      GroupNews = GroupNews.map(item => {
        const time = item.createdTime;
        let year = new Date(time).getFullYear();
        let mon = new Date(time).getMonth() + 1 >= 10
          ? new Date(time).getMonth() + 1
          : `0${new Date(time).getMonth() + 1}`;
        let date = new Date(time).getDate() >= 10
          ? new Date(time).getDate()
          : `0${new Date(time).getDate()}`;
        item.createdTime = `${year}年${mon}月${date}日`;
        item.image = `${prefix}${item.image}`;
        return item;
      });
      TradeNews = TradeNews.map(item => {
        const time = item.createdTime;
        let year = new Date(time).getFullYear();
        let mon = new Date(time).getMonth() + 1 >= 10
          ? new Date(time).getMonth() + 1
          : `0${new Date(time).getMonth() + 1}`;
        let date = new Date(time).getDate() >= 10
          ? new Date(time).getDate()
          : `0${new Date(time).getDate()}`;
        item.createdTime = `${year}年${mon}月${date}日`;
        item.image = `${prefix}${item.image}`;
        return item;
      });
      state.newsList = { GroupNews, TradeNews };
    },
    [SET_NEWS_DETAIL]: (state, { data }) => {
      state.newsDetail = data.journAism;
    }
  }
});

export default store;
