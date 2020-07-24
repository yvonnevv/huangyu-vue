import Vue from 'vue';
import Vuex from 'vuex';
import $http from '../../../util/httpRequest';

Vue.use(Vuex);

const SET_COPYRIGHT = 'SET_COPYRIGHT';
const SET_PAGEINFO = 'SET_PAGEINFO';
const SET_PAGE_KUANGCHAN = 'SET_PAGE_KUANGCHAN';
const SET_PAGE_TIANHAI = 'SET_PAGE_TIANHAI';
const SET_PAGE_JIJIAN = 'SET_PAGE_JIJIAN';
const SET_PAGE_TOUZI = 'SET_PAGE_TOUZI';

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
    pageKuangchan: {},
    pageTianhai: {},
    pageJijian: {},
    pageTouzi: {}
  },
  actions: {
    LOAD_COPYRIGHT: ({ commit }) => {
      fetchData('/index/headline', commit, SET_COPYRIGHT);
    },
    LOAD_PAGEINFO: ({ commit }) => {
      fetchData('/index/background?id=62', commit, SET_PAGEINFO);
    },
    LOAD_PAGE_KUANGCHAN: ({ commit }) => {
      fetchData('/index/groupIndustriesId?id=32', commit, SET_PAGE_KUANGCHAN);
    },
    LOAD_PAGE_TIANHAI: ({ commit }) => {
      fetchData('/index/groupIndustriesId?id=31', commit, SET_PAGE_TIANHAI);
    },
    LOAD_PAGE_JIJIAN: ({ commit }) => {
      fetchData('/index/groupIndustriesId?id=33', commit, SET_PAGE_JIJIAN);
    },
    LOAD_PAGE_TOUZI: ({ commit }) => {
      fetchData('/index/groupIndustriesId?id=34', commit, SET_PAGE_TOUZI);
    }
  },
  mutations: {
    [SET_COPYRIGHT]: (state, { data = [] }) => {
      state.copyright = data[0];
    },
    [SET_PAGEINFO]: (state, { data }) => {
      const prefix = 'http://www.royalhonors.group';
      data.imagePath = `${prefix}${data.imagePath}`;

      state.pageInfo = data;
    },
    [SET_PAGE_KUANGCHAN]: (state, { data }) => {
      state.pageKuangchan = data.Contents;
    },
    [SET_PAGE_TIANHAI]: (state, { data }) => {
      state.pageTianhai = data.Contents;
    },
    [SET_PAGE_JIJIAN]: (state, { data }) => {
      state.pageJijian = data.Contents;
    },
    [SET_PAGE_TOUZI]: (state, { data }) => {
      state.pageTouzi = data.Contents;
    }
  },
  getters: {
    openProjects: state => {
      return state.projects.filter(project => !project.completed)
    }
  }
});

export default store;
