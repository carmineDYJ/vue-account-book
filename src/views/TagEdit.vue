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
      <GeneralButton v-on:click="removeTag()">删除标签</GeneralButton>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import InputItem from '@/components/InputItem.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import store from '@/store/index2.ts';
@Component({
  components: {GeneralButton, InputItem}
})
export default class TagEdit extends Vue{
  tag: Tag = store.findTag(parseInt(this.$route.params.id));

  created(){
    if (!this.tag) {
      this.$router.replace('/404');
    }
  }

  updateTag(newTagName: string){
    if(this.tag){
      store.updateTag(this.tag.tagId, newTagName);
    }
  }

  removeTag(){
    const deleteConfirm = window.confirm('确认要删除该标签吗？');
    if (deleteConfirm === true) {
      store.removeTag(this.tag.tagId);
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