type Tag = {
  tagId: number,
  tagName: string
}
type Account = {
  tags: string[],
  notes: string,
  type: string,
  sum: number,
  time: Date
}
interface Window{
  // store: {
  //   allAccounts: Account[];
  //   addAccount: (Account)=>void;
  //
  //   allTags: Tag[];
  //   addTag: (newTag:string)=>void;
  //   removeTag: (tagId: number)=>boolean | undefined;
  //   updateTag: (tagId: number, tagName: string) => void;
  //   findTag: (tagId: number) => Tag;
  // }
}