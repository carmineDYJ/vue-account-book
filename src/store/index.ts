import Vue from 'vue';
import Vuex from 'vuex';
import cloneDeep from 'lodash/cloneDeep';
import generateId from '@/lib/tagIdGenerator';

Vue.use(Vuex); // 绑定store Vue.prototype.$store = store

const store = new Vuex.Store({
  state: {
    allAccounts: [] as Account[],
    allTags: [] as Tag[],
  },
  mutations: {
    fetchAllAccounts(state) {
      state.allAccounts = JSON.parse(window.localStorage.getItem('allAccounts') || '[]') as Account[];
    },
    addAccount(state, account: Account) {
      const curAccount = cloneDeep(account);
      curAccount.time = new Date();
      state.allAccounts.push(curAccount);
      store.commit('saveAllAccounts');
    },
    saveAllAccounts(state) {
      localStorage.setItem('allAccounts', JSON.stringify(state.allAccounts));
    },
    fetchTags(state) {
      state.allTags = JSON.parse(window.localStorage.getItem('allTags') || '[]');
    },
    findTag(state, tagId: number) {
      return state.allTags.filter(t => t.tagId === tagId)[0];
    },
    addTag(state, tagName: string) {
      const allTagNames = state.allTags.map(tag => tag.tagName);
      if (allTagNames.indexOf(tagName) === -1) {
        const id = generateId();
        state.allTags.push({tagId: id, tagName: tagName});
        store.commit('saveTags');
      } else {
        window.alert('此标签已存在');
        throw new Error('duplicated tag');
      }
    },
    removeTag(state, tagId: number) {
      let index = -1;
      const allId = state.allTags.map(tag => tag.tagId);
      index = allId.indexOf(tagId);
      if (index >= 0) {
        state.allTags.splice(index, 1);
        store.commit('saveTags');
      } else {
        throw new Error('delete tag fail');
      }
    },
    updateTag(state, tagId: number, tagName: string) {
      const allId = state.allTags.map(tag => tag.tagId);
      if (allId.indexOf(tagId) >= 0) {
        const allTagNames = state.allTags.map(tag => tag.tagName);
        if (allTagNames.indexOf(tagName) === -1) {
          const tag = state.allTags.filter(item => item.tagId === tagId)[0];
          tag.tagName = tagName;
          store.commit('saveTags');
        } else {
          throw new Error('duplicated tag');
        }
      } else {
        throw new Error('id not found');
      }
    },
    saveTags(state) {
      localStorage.setItem('allTags', JSON.stringify(state.allTags));
    },
  },
  actions: {},
  modules: {}
});

export default store;