const localStorageKeyName = 'allAccounts';
const accountModel = {
  allAccounts: [] as Account[],
  fetch(){
    this.allAccounts = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as Account[];
    return this.allAccounts;
  },
  save(){
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.allAccounts));
  }
};
export default accountModel;