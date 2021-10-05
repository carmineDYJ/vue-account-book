import generateId from '@/lib/tagIdGenerator';

const AllTagsLocalStorageKey = 'allTags';

const tagStore = {
  allTags : [] as Tag[],
  fetchTags(){
    this.allTags = JSON.parse(window.localStorage.getItem(AllTagsLocalStorageKey) || '[]')
    return this.allTags;
  },
  findTag (tagId: number) {
    return this.allTags.filter(t => t.tagId === tagId)[0];
  },
  addTag (tagName: string) {
    const allTagNames = this.allTags.map(tag => tag.tagName);
    if (allTagNames.indexOf(tagName) === -1){
      const id = generateId();
      this.allTags.push({tagId: id, tagName: tagName});
      this.saveTags();
    } else {
      window.alert('此标签已存在');
      throw new Error('duplicated tag');
    }
  },
  removeTag (tagId: number){
    let index = -1;
    const allId = this.allTags.map(tag => tag.tagId);
    index = allId.indexOf(tagId);
    if(index >= 0){
      this.allTags.splice(index, 1);
      this.saveTags();
    } else {
      throw new Error('delete tag fail');
    }
  },
  updateTag (tagId: number, tagName: string){
    const allId = this.allTags.map(tag => tag.tagId);
    if (allId.indexOf(tagId) >= 0) {
      const allTagNames = this.allTags.map(tag => tag.tagName);
      if (allTagNames.indexOf(tagName) === -1){
        const tag = this.allTags.filter(item => item.tagId === tagId)[0];
        tag.tagName = tagName;
        this.saveTags();
      } else {
        throw new Error('duplicated tag');
      }
    } else {
      throw new Error('id not found');
    }
  },
  saveTags(){
    localStorage.setItem(AllTagsLocalStorageKey, JSON.stringify(this.allTags));
  },
}

tagStore.fetchTags();

export default tagStore;