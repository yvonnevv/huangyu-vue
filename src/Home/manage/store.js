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
      fetchData('/index/relation?id=21', commit, SET_PAGE_INDEX);
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
      let { Figure } = pageIndex;
      console.log('Figure', Figure);
      Figure = Figure.map(item => {
        item.imagePath = `${prefix}${item.imagePath}`;
        console.log(item);
        return item;
      });
      return Figure;
    },
    groupNews: state => {
      return state.pageIndex.GroupNews;
    },
    tradeNews: state => {
      return state.pageIndex.TradeNews;
    }
  }
});

export default store;
