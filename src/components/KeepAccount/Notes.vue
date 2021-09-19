<template>
  <div>
    <label class="notes">
      <span class="notes-label-text">备注</span>
      <input type="text" v-model="notesContent"
             placeholder="请在此处输入备注">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Notes extends Vue{
  notesContent = '';
}
</script>

<style scoped lang="scss">
.notes{
  font-size: 14px;
  background: #f5f5f5;
  display: flex;
  padding-left: 16px;
  align-items: center;
  .notes-label-text{
    padding-right: 16px;
  }
  input{
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>