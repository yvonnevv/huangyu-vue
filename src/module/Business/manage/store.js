import Vue from 'vue';
import Vuex from 'vuex';
import $http from '../../../util/httpRequest';

Vue.use(Vuex);

const prefix = 'http://www.royalhonors.group';

const SET_COPYRIGHT = 'SET_COPYRIGHT';
const SET_PAGEINFO = 'SET_PAGEINFO';
const SET_PAGE_ABOUT = 'SET_PAGE_ABOUT';
const SET_PAGE_RONGYU = 'SET_PAGE_RONGYU';
const SET_PAGE_HEZUO = 'SET_PAGE_HEZUO';

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
    pageAbout: {},
    pageHezuo: {},
    pageRongyu: {}
  },
  actions: {
    LOAD_COPYRIGHT: ({ commit }) => {
      fetchData('/index/headline', commit, SET_COPYRIGHT);
    },
    LOAD_PAGEINFO: ({ commit }) => {
      fetchData('/index/background?id=61', commit, SET_PAGEINFO);
    },
    LOAD_PAGE_ABOUT: ({ commit }) => {
      fetchData('/index/groupProfileId?id=51', commit, SET_PAGE_ABOUT);
    },
    LOAD_PAGE_RONGYU: ({ commit }) => {
      fetchData('/index/groupProfileId?id=52', commit, SET_PAGE_RONGYU);
    },
    LOAD_PAGE_HEZUO: ({ commit }) => {
      fetchData('/index/groupProfileId?id=53', commit, SET_PAGE_HEZUO);
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
    [SET_PAGE_ABOUT]: (state, { data }) => {
      const { Contents } = data;
      let { image1, image2, image3, image4 } = Contents;

      image1 = image1 ? `${prefix}${image1}` : image1;
      image2 = image2 ? `${prefix}${image2}` : image2;
      image3 = image3 ? `${prefix}${image3}` : image3;
      image4 = image4 ? `${prefix}${image4}` : image4;

      Object.assign(Contents, {
        image1, image2, image3, image4
      });

      state.pageAbout = Contents;
    },
    [SET_PAGE_RONGYU]: (state, { data }) => {
      const { Contents } = data;
      let { image1, image2, image3, image4 } = Contents;
      image1 = image1 ? `${prefix}${image1}` : image1;
      image2 = image2 ? `${prefix}${image2}` : image2;
      image3 = image3 ? `${prefix}${image3}` : image3;
      image4 = image4 ? `${prefix}${image4}` : image4;

      Object.assign(Contents, {
        image1, image2, image3, image4
      });

      state.pageRongyu = Contents;
    },
    [SET_PAGE_HEZUO]: (state, { data }) => {
      const { Contents } = data;
      let { image1, image2, image3, image4 } = Contents;

      image1 = image1 ? `${prefix}${image1}` : image1;
      image2 = image2 ? `${prefix}${image2}` : image2;
      image3 = image3 ? `${prefix}${image3}` : image3;
      image4 = image4 ? `${prefix}${image4}` : image4;

      Object.assign(Contents, {
        image1, image2, image3, image4
      });

      state.pageHezuo = Contents;
    }
  }
});

export default store;
