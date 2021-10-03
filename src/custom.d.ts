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
  allTags: Tag[]
}