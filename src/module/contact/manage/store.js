import Vue from 'vue';
import Vuex from 'vuex';
import $http from '../../../util/httpRequest';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    copyright: {},
    pageInfo: {}
  },
  actions: {
    LOAD_COPYRIGHT: ({
      commit
    }) => {
      $http.get('/index/headline').then((response) => {
        const {
          retEntity = []
        } = response;

        commit('SET_COPYRIGHT', {
          data: retEntity[0]
        })
      });
    },
    LOAD_PAGEINFO: ({
      commit
    }) => {
      $http.get('/index/background?id=64').then((response) => {
        const {
          retEntity = {}
        } = response;
        const prefix = 'http://www.royalhonors.group';
        retEntity.imagePath = `${prefix}${retEntity.imagePath}`;

        commit('SET_PAGEINFO', {
          data: retEntity
        })
      });
    }
  },
  mutations: {
    SET_COPYRIGHT: (state, {
      data
    }) => {
      state.copyright = data;
    },
    SET_PAGEINFO: (state, { data }) => {
      state.pageInfo = data;
    }
  },
  getters: {
    openProjects: state => {
      return state.projects.filter(project => !project.completed)
    }
  }
});

export default store;
