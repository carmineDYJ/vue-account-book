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
  update: (id:number, name:string)=>void,
  remove: (id:number)=>void,
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
  update(tagId, tagName){
    const allId = this.allTags.map(tag => tag.tagId);
    if (allId.indexOf(tagId) >= 0) {
      const allTagNames = this.allTags.map(tag => tag.tagName);
      if (allTagNames.indexOf(tagName) === -1){
        const tag = this.allTags.filter(item => item.tagId === tagId)[0];
        tag.tagName = tagName;
        this.save();
      } else {
        throw new Error('duplicated tag');
      }
    } else {
      throw new Error('id not found');
    }
  },
  remove(tagId: number){
    const allId = this.allTags.map(tag => tag.tagId);
    const index = allId.indexOf(tagId);
    if(index >= 0){
      this.allTags.splice(index, 1);
      this.save();
    } else {
      throw new Error('delete tag fail');
    }
  },
  save(){
    localStorage.setItem(AllTagsLocalStorageKey, JSON.stringify(this.allTags));
  },
};
export default tagModel;