<template>
    <Layout class-prefix="layout">
      {{account}}
      <Calculator v-bind:value.sync="account.sum"/>
      <Types v-bind:value.sync="account.type"/>
      <Notes v-on:update:value="onNotesContent"/>
      <Tags v-bind:all-tags.sync="allTags" v-on:update:value="onUpdateSelectedTags"/>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Calculator from '@/components/KeepAccount/Calculator.vue';
import Types from '@/components/KeepAccount/Types.vue';
import Notes from '@/components/KeepAccount/Notes.vue';
import Tags from '@/components/KeepAccount/Tags.vue';

type Account = {
  tags: string[],
  notes: string,
  type: string,
  sum: number
}

@Component({
  components: {Tags, Notes, Types, Calculator},
})
export default class KeepAccount extends Vue{
  allTags = ['衣','食','住','行'];

  account: Account = {tags:[], notes: '', type: 'expenditure', sum:0};

  onUpdateSelectedTags(value: string[]){
    this.account.tags = value;
  }
  onNotesContent(value: string){
    this.account.notes = value;
  }
}
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style scoped lang="scss">
.tags{
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;

  > .cur-tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > li {
      background: #d9d9d9;
      display: flex;
      align-items: center;
      $h: 24px;
      height: $h;
      border-radius: ($h/2);
      padding: 0 16px;
      margin-right: 12px;
    }
  }

  > .new-tag-button-wrapper{
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