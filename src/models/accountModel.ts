import cloneDeep from 'lodash/cloneDeep';

const localStorageKeyName = 'allAccounts';
const accountModel = {
  allAccounts: [] as Account[],
  fetch(){
    this.allAccounts = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as Account[];
    return this.allAccounts;
  },
  save(){
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.allAccounts));
  },
  add(account: Account){
    // use lodash for deep cloning
    const curAccount: Account = cloneDeep(account);
    curAccount.time = new Date();
    this.allAccounts.push(curAccount);
  }
};
export default accountModel;