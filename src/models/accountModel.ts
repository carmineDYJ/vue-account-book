const localStorageKeyName = 'allAccounts';
const accountModel = {
  fetch(){
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as Account[];
  },
  save(allAccounts: Account[]){
    localStorage.setItem(localStorageKeyName, JSON.stringify(allAccounts));
  }
};
export default accountModel;