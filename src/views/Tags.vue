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
        <GeneralButton v-on:click="addTag">新建标签</GeneralButton>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import GeneralButton from '@/components/GeneralButton.vue';
import store from '@/store/index.ts';
import {mixins} from 'vue-class-component';
import {tagMixin} from '@/mixins/tagMixin';

@Component({
  components: {GeneralButton},
})
export default class Tags extends mixins(tagMixin){
  get allTags() {
    return store.state.allTags
  }

  created(){
    store.commit('fetchTags');
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
.add-tag-button-wrapper{
  text-align: center;
  padding: 16px;
  margin-top: 28px;
}
</style>