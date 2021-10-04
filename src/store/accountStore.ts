import cloneDeep from 'lodash/cloneDeep';

const localStorageKeyName = 'allAccounts';

const accountStore = {
  allAccounts : [] as Account[],
  fetchAllAccounts(){
    this.allAccounts = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as Account[];
    return this.allAccounts;
  },
  saveAllAccounts(){
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.allAccounts));
  },
  addAccount (account: Account) {
    const curAccount = cloneDeep(account);
    curAccount.time = new Date();
    this.allAccounts.push(curAccount);
    accountStore.saveAllAccounts();
  },
}

accountStore.fetchAllAccounts();

export default accountStore;