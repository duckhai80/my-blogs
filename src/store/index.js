import blogApi from "@/api/blogApi";
import queryString from "query-string";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  state: {
    blogs: [],
    pagination: {},
    sortBy: "created_at",
    sortDirection: "desc",
    search: "",
  },

  actions: {
    async getBlogs({ commit }) {
      let params = {};
      if (window.location.search) {
        params = queryString.parse(window.location.search);
        if (!params.offset) {
          params.offset = 8;
        }
        if (!params.sort_by) {
          params.sort_by = this.state.sortBy;
        }
        if (!params.sort_direction) {
          params.sort_direction = this.state.sortDirection;
        }
        if (!params.search) {
          params.search = this.state.search;
        }
      } else {
        params = {
          page: 1,
          offset: 8,
          sort_by: this.state.sortBy,
          sort_direction: this.state.sortDirection,
          search: this.state.search,
        };
      }
      console.log(params);

      const response = await blogApi.getAll(params);
      commit("getBlogs", response);
    },

    setSortBy({ commit }, sortBy) {
      commit("setSortBy", sortBy);
    },

    setSortDirection({ commit }, sortDirection) {
      commit("setSortDirection", sortDirection);
    },

    setSearch({ commit }, searchText) {
      commit("setSearch", searchText);
    },
  },

  mutations: {
    getBlogs(state, data) {
      state.blogs = data.data.items;
      state.pagination = data.pagination;
    },

    setSortBy(state, sortBy) {
      state.sortBy = sortBy;
    },

    setSortDirection(state, sortDirection) {
      state.sortDirection = sortDirection;
    },

    setSearch(state, searchText) {
      state.search = searchText;
    },
  },

  modules: {},
});
