<template>
  <div>
    <Layout>
      <ol class="tagList">
        <router-link class="tag" v-for="tag in allTags" v-bind:key="tag.tagId"
        v-bind:to="`/tags/edit/${tag.tagId}`">
          <span>{{ tag.tagName }}</span>
          <Icon name="right"/>
        </router-link>
      </ol>
      <div class="add-tag-button-wrapper">
        <button class="add-tag-button" v-on:click="addTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagModel from '@/models/tagModel.ts';
tagModel.fetch();

@Component
export default class Tags extends Vue{
  allTags = tagModel.allTags;
  addTag(){
    const newTag = window.prompt('请输入标签名');

    if (newTag !== null && newTag !== ''){
      try {
        tagModel.add(newTag);
      }catch (error){
        if(error.message === 'duplicated tag') {
          window.alert('此标签已存在');
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.tagList{
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag{
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg{
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.add-tag-button{
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 28px;
  }
}
</style>