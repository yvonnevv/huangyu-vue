import Vue from 'vue';
import Vuex from 'vuex';
import $http from '../../../util/httpRequest';

Vue.use(Vuex);

const prefix = 'http://www.royalhonors.group';

const SET_COPYRIGHT = 'SET_COPYRIGHT';
const SET_PAGE_INDEX = 'SET_PAGE_INDEX';

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
    pageIndex: {},
  },
  actions: {
    LOAD_COPYRIGHT: ({ commit }) => {
      fetchData('/index/headline', commit, SET_COPYRIGHT);
    },
    LOAD_PAGE_INDEX: ({ commit }) => {
      fetchData('/index/show', commit, SET_PAGE_INDEX);
    }
  },
  mutations: {
    [SET_COPYRIGHT]: (state, { data = [] }) => {
      state.copyright = data[0];
    },
    [SET_PAGE_INDEX]: (state, { data }) => {
      state.pageIndex = data;
    }
  },
  getters: {
    figure: state => {
      const { pageIndex } = state;
      const { Figure = [] } = pageIndex;
      Figure.forEach(item => {
        let path = `//${location.host}/product.html#/`;
        switch (item.title) {
          case '矿产资源':
            path += 'kuangchan';
            break;
          case '填海工程':
            path += 'tianhai';
            break;
          case '基建项目':
            path += 'jijian';
            break;
          default:
            path += 'touzi';
            break;
        }
        item.path = path;
        item.imagePath = `${prefix}${item.imagePath}`;
      });
      return Figure;
    },
    groupNews: state => {
      const { pageIndex } = state;
      const { GroupNews = [] } = pageIndex;
      GroupNews.forEach(item => {
        let time = item.createdTime;
        time = time.replace(/-/g, '/').replace('T', ' ').substring(0, 19);
        let year = new Date(time).getFullYear();
        let mon = new Date(time).getMonth() + 1 >= 10
          ? new Date(time).getMonth() + 1
          : `0${new Date(time).getMonth() + 1}`;
        let date = new Date(time).getDate() >= 10
          ? new Date(time).getDate()
          : `0${new Date(time).getDate()}`;
        item.createdTime = `${year}年${mon}月${date}日`;
      });
      return GroupNews;
    },
    tradeNews: state => {
      const { pageIndex } = state;
      const { TradeNews = [] } = pageIndex;
      TradeNews.forEach(item => {
        let time = item.createdTime;
        time = time.replace(/-/g, '/').replace('T', ' ').substring(0, 19);
        let year = new Date(time).getFullYear();
        let mon = new Date(time).getMonth() + 1 >= 10
          ? new Date(time).getMonth() + 1
          : `0${new Date(time).getMonth() + 1}`;
        let date = new Date(time).getDate() >= 10
          ? new Date(time).getDate()
          : `0${new Date(time).getDate()}`;
        item.createdTime = `${year}年${mon}月${date}日`;
      });
      return TradeNews;
    },
    bannerImg: state => {
      const { pageIndex } = state;
      const { PhoneMap = [] } = pageIndex;
      return (PhoneMap[0] || {}).imagePath;
    }
  }
});

export default store;