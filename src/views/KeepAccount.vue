<template>
    <Layout class-prefix="layout">
      <Calculator v-bind:value.sync="account.sum" v-on:submit="saveAccount"/>
      <Types v-bind:value.sync="account.type"/>
      <Notes v-on:update:value="onNotesContent"/>
      <Tags v-bind:all-tags.sync="allTags" v-on:update:value="onUpdateSelectedTags"/>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
const cloneDeep = require('lodash/cloneDeep');
import {Component, Watch} from 'vue-property-decorator';
import Calculator from '@/components/KeepAccount/Calculator.vue';
import Types from '@/components/KeepAccount/Types.vue';
import Notes from '@/components/KeepAccount/Notes.vue';
import Tags from '@/components/KeepAccount/Tags.vue';
import model from '@/model.ts';

const allAccounts = model.fetch();

@Component({
  components: {Tags, Notes, Types, Calculator},
})
export default class KeepAccount extends Vue{
  allTags = ['衣','食','住','行'];
  account: Account = {tags:[], notes: '', type: 'expenditure', sum:0, time: new Date(0)};
  allAccounts: Account[] = allAccounts;

  onUpdateSelectedTags(value: string[]){
    this.account.tags = value;
  }
  onNotesContent(value: string){
    this.account.notes = value;
  }
  saveAccount(){
    // use lodash for deep cloning
    const curAccount: Account = cloneDeep(this.account);
    curAccount.time = new Date();
    this.allAccounts.push(curAccount);
    console.log(this.account);
  }

  @Watch('allAccounts')
  onAllAccountsChange(){
    model.save(this.allAccounts);
    this.account.sum = 0; // 提交后重置金额
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