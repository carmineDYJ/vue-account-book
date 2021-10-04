import accountModel from '@/models/accountModel';
import tagModel from '@/models/tagModel';

const store = {
// account store
  allAccounts : accountModel.fetch(),
  addAccount : (account: Account) => {
    accountModel.add(account);
  },

// tag store
  allTags : tagModel.fetch(),
  findTag (tagId: number) {
    return this.allTags.filter(t => t.tagId === tagId)[0];
  },
  addTag : (newTag: string) => {
    try {
      tagModel.add(newTag);
    } catch (error) {
      if (error.message === 'duplicated tag') {
        window.alert('此标签已存在');
      }
    }
  },
  removeTag : (tagId: number) => {
    try {
      tagModel.remove(tagId);
      return true;
    } catch (error) {
      if (error.message === 'delete tag fail') {
        return false;
      }
    }
  },
  updateTag : (tagId: number, tagName: string) => {
    tagModel.update(tagId, tagName);
  },
};

export default store;