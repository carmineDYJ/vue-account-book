import accountStore from '@/store/accountStore.ts';
import tagStore from '@/store/tagStore.ts';


const store = {
  ...accountStore,
  ...tagStore,
};

export default store;