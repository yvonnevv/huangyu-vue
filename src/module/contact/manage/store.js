import Vue from 'vue';
import Vuex from 'vuex';
import $http from '../../../util/httpRequest';

Vue.use(Vuex);

const prefix = 'http://mobile.royalhonors.group';

const SET_COPYRIGHT = 'SET_COPYRIGHT';
const SET_PAGEINFO = 'SET_PAGEINFO';
const SET_PAGE_HOME = 'SET_PAGE_HOME';
const SET_PAGE_HAISHA = 'SET_PAGE_HAISHA';

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
    pageHome: {},
    pageHaisha: {}
  },
  actions: {
    LOAD_COPYRIGHT: ({ commit }) => {
      fetchData('/index/headline', commit, SET_COPYRIGHT);
    },
    LOAD_PAGEINFO: ({ commit }) => {
      fetchData('/index/background?id=64', commit, SET_PAGEINFO);
    },
    LOAD_PAGE_HOME: ({ commit }) => {
      fetchData('/index/relation?id=21', commit, SET_PAGE_HOME);
    },
    LOAD_PAGE_HAISHA: ({ commit }) => {
      fetchData('/index/relation?id=22', commit, SET_PAGE_HAISHA);
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
    [SET_PAGE_HOME]: (state, { data }) => {
      let { Contents = [] } = data;
      Contents = Contents.map(item => {
        item.image = `${prefix}${item.image}`;
        return item;
      });
      state.pageHome = data.Contents;
    },
    [SET_PAGE_HAISHA]: (state, { data }) => {
      state.pageHaisha = data.Contents;
    }
  },
  getters: {
    openProjects: state => {
      return state.projects.filter(project => !project.completed)
    }
  }
});

export default store;
