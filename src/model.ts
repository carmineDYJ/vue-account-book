const localStorageKeyName = 'allAccounts';
const model = {
  fetch(){
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as Account[];
  },
  save(allAccounts: Account[]){
    localStorage.setItem(localStorageKeyName, JSON.stringify(allAccounts));
  }
}

export default model;