<template>
    <Layout class-prefix="layout">
      <Calculator v-bind:value.sync="account.sum" v-on:submit="saveAccount"/>
      <Types v-bind:value.sync="account.type"/>
      <div class="notes-wrapper">
        <InputItem field-name="备注" placeholder="请在此处输入备注" v-on:update:value="onNotesContent"/>
      </div>
      <Tags v-bind:all-tags.sync="allTags" v-on:update:value="onUpdateSelectedTags"/>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Calculator from '@/components/KeepAccount/Calculator.vue';
import Types from '@/components/KeepAccount/Types.vue';
import InputItem from '@/components/InputItem.vue';
import Tags from '@/components/KeepAccount/Tags.vue';
import accountModel from '@/models/accountModel.ts';
const allAccounts = accountModel.fetch();

@Component({
  components: {Tags, InputItem, Types, Calculator},
})
export default class KeepAccount extends Vue{
  allTags = window.allTags;
  account: Account = {tags:[], notes: '', type: 'expenditure', sum:0, time: new Date(0)};
  allAccounts: Account[] = allAccounts;

  onUpdateSelectedTags(value: string[]){
    this.account.tags = value;
  }
  onNotesContent(value: string){
    this.account.notes = value;
  }
  saveAccount(){
    accountModel.add(this.account);
  }

  @Watch('allAccounts')
  onAllAccountsChange(){
    accountModel.save();
    this.account.sum = 0; // 提交后重置金额
  }
}
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
.notes-wrapper{
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>