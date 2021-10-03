<template>
  <div>
    <label class="input-item">
      <span class="input-item-text">{{ this.fieldName }}</span>
      <input type="text"
             v-bind:value="value"
             v-on:input="onValueChanged($event.target.value)"
             v-bind:placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class InputItem extends Vue{
  @Prop({default: ''}) readonly value!: string;

  @Prop({required:true}) fieldName!: string;
  @Prop() placeholder?: string;

  @Watch('value')
  onValueChanged(value: string){
    this.$emit('update:value', value);
  }
}
</script>

<style scoped lang="scss">
.input-item{
  font-size: 14px;
  display: flex;
  padding-left: 16px;
  align-items: center;
  .input-item-text{
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