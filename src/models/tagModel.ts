import generateId from '@/lib/tagIdGenerator';

const AllTagsLocalStorageKey = 'allTags';
const MaxTagIdLocalStorageKey = 'maxTagId'
type Tag = {
  tagId: number,
  tagName: string
}
type TagModel = {
  allTags: Tag[],
  fetch: ()=>Tag[],
  add: (name:string)=>void,
  save: ()=>void
}
const tagModel: TagModel = {
  allTags:[],
  fetch(){
    this.allTags = JSON.parse(window.localStorage.getItem(AllTagsLocalStorageKey) || '[]')
    return this.allTags;
  },
  add(tagName){
    const allTagNames = this.allTags.map(tag => tag.tagName);
    if (allTagNames.indexOf(tagName) === -1){
      const id = generateId();
      this.allTags.push({tagId: id,tagName: tagName});
      this.save();
    } else {
      throw new Error('duplicated tag');
    }
  },
  save(){
    localStorage.setItem(AllTagsLocalStorageKey, JSON.stringify(this.allTags));
  },
};
export default tagModel;