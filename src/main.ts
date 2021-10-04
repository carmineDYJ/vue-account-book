import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagModel from '@/models/tagModel';
import accountModel from '@/models/accountModel';

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

// account store
window.allAccounts = accountModel.fetch();
window.addAccount = (account: Account) => {
  accountModel.add(account);
};

// tag store
window.allTags = tagModel.fetch();
window.findTag = (tagId: number) => {
  return window.allTags.filter(t => t.tagId === tagId)[0];
};
window.addTag = (newTag: string) => {
  try {
    tagModel.add(newTag);
  } catch (error) {
    if (error.message === 'duplicated tag') {
      window.alert('此标签已存在');
    }
  }
};
window.removeTag = (tagId: number) => {
  try {
    tagModel.remove(tagId);
    return true;
  } catch (error) {
    if (error.message === 'delete tag fail') {
      return false;
    }
  }
};
window.updateTag = (tagId: number, tagName: string) => {
  tagModel.update(tagId, tagName);
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
