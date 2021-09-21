<template>
  <div>
    <label class="notes">
      <span class="notes-label-text">{{ this.fieldName }}</span>
      <input type="text" v-model="notesContent"
             v-bind:placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue{
  @Prop({required:true}) fieldName: string;
  @Prop({default: ''}) placeholder: string;
  notesContent = '';
  @Watch('notesContent')
  onNotesContentChanged(value: string, oldValue: string){
    this.$emit('update:value', value);
  }
}
</script>

<style scoped lang="scss">
.notes{
  font-size: 14px;
  display: flex;
  padding-left: 16px;
  align-items: center;
  .notes-label-text{
    padding-right: 16px;
  }
  input{
    height: 44px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>