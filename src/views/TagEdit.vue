<template>
  <Layout>
    <div class="back-nav">
      <Icon class="left-icon" name="left" v-on:click="backToTags"/>
      <span class="title">编辑标签</span>
      <span class="right-icon"></span>
    </div>
    <div class="input-item-wrapper">
      <InputItem v-bind:value="tag.tagName"
                 v-on:update:value="updateTag"
                 field-name="标签名" placeholder="请输入新的标签名"/>
    </div>
    <div class="delete-tag-button-wrapper">
      <GeneralButton v-on:click="removeTag(tag.tagId)">删除标签</GeneralButton>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagModel from '@/models/tagModel.ts';
import InputItem from '@/components/InputItem.vue';
import GeneralButton from '@/components/GeneralButton.vue';
@Component({
  components: {GeneralButton, InputItem}
})
export default class TagEdit extends Vue{
  tag?:{ tagId: number, tagName: string };

  created(){
    const id = parseInt(this.$route.params.id);
    tagModel.fetch();
    const allTags = tagModel.allTags;
    const tag = allTags.filter(tag => tag.tagId === id)[0];
    if (!tag) {
      this.$router.replace('/404');
    }
    this.tag = tag;
  }

  updateTag(newTagName: string){
    if(this.tag){
      tagModel.update(this.tag.tagId, newTagName);
    }
  }

  removeTag(tagId: number){
    const deleteConfirm = window.confirm('确认要删除该标签吗？');
    if (deleteConfirm === true) {
      tagModel.remove(tagId);
      this.backToTags();
    }
  }

  backToTags(){
    this.$router.replace('/tags');
  }
}
</script>

<style scoped lang="scss">
.back-nav{
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .left-icon{
    height: 24px;
    width: 24px;
  }
  > .right-icon{
    height: 24px;
    width: 24px;
  }
}
.input-item-wrapper{
  background: white;
  margin-top: 8px;
}
.delete-tag-button-wrapper{
  text-align: center;
  padding: 16px;
  margin-top: 28px;
}
</style>