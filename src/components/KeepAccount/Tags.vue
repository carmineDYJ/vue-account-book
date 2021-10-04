<template>
  <div class="tags">
    <div class="add-tag-button-wrapper">
      <button v-on:click="addTag">新增标签</button>
    </div>
    <ul class="cur-tags">
      <li v-for="tag in allTags" v-bind:key="tag.tagId"
          v-bind:class="{selected: selectedTags.indexOf(tag) >= 0}"
          v-on:click="toggleTag(tag)">{{tag.tagName}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import store from '@/store/index2.ts';


@Component
export default class Tags extends Vue{
  @Prop({default: []}) readonly allTags!: Tag[];
  selectedTags: string[] = [];
  toggleTag(tag: string){
    const tagIndex = this.selectedTags.indexOf(tag);
    if (tagIndex === -1){
      this.selectedTags.push(tag);
    } else {
      this.selectedTags.splice(tagIndex, 1);
    }
    this.$emit('update:value', this.selectedTags);
  }
  addTag(){
    const newTag = window.prompt('请输入标签名');

    if (newTag !== null && newTag !== ''){
      store.addTag(newTag);
    }
  }
}
</script>

<style scoped lang="scss">
.tags{
  font-size: 14px;
  padding: 0 16px 16px 16px;
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
  background: white;

  > .cur-tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > li {
      $tag-background: #d9d9d9;
      background: $tag-background;
      display: flex;
      align-items: center;
      $h: 24px;
      height: $h;
      border-radius: ($h/2);
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 6px;

      &.selected{
        background: darken($tag-background, 50%);
        color: white;
      }
    }
  }

  > .add-tag-button-wrapper{
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
</style>