const localStorageKeyName = 'allTags';
type TagModel = {
  allTags: string[],
  fetch: ()=>string[],
  add: (tag:string)=>void,
  save: ()=>void
}
const tagModel: TagModel = {
  allTags:[],
  fetch(){
    this.allTags = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
    return this.allTags;
  },
  add(tag){
    if (this.allTags.indexOf(tag) === -1){
      this.allTags.push(tag);
      this.save();
    } else {
      throw new Error('duplicated tag');
    }
  },
  save(){
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.allTags));
  },
};
export default tagModel;