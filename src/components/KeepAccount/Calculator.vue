<template>
  <div class="calculator">
    <div class="calculator-output">{{ output || '&nbsp;'}}</div>
    <div class="calculator-buttons clearContentfix">
      <button v-on:click="inputContent">1</button>
      <button v-on:click="inputContent">2</button>
      <button v-on:click="inputContent">3</button>
      <button v-on:click="backspaceContent">退格</button>
      <button v-on:click="inputContent">4</button>
      <button v-on:click="inputContent">5</button>
      <button v-on:click="inputContent">6</button>
      <button v-on:click="clearContent">清空</button>
      <button v-on:click="inputContent">7</button>
      <button v-on:click="inputContent">8</button>
      <button v-on:click="inputContent">9</button>
      <button class="calculator-ok-button" v-on:click="ok">OK</button>
      <button class="calculator-zero-button"  v-on:click="inputContent">0</button>
      <button v-on:click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Calculator extends Vue{
  @Prop() readonly value!: number;
  output = this.value.toString();

  inputContent(event: MouseEvent){
    const button = (event.target as HTMLButtonElement)
    const input = button.textContent!;
    if (this.output.length === 16) {return;}
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {
      return;
    }
    this.output += input
  }
  backspaceContent(){
    this.output = this.output.substr(0, this.output.length - 1);
    if (this.output.length === 0) {
      this.output = this.value.toString();
    }
  }
  clearContent(){
    this.output = this.value.toString();
  }
  ok(){
    this.$emit('update:value', parseFloat(this.output));
    this.$emit('submit', parseFloat(this.output));
    this.output = this.value.toString();
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.calculator{
  .calculator-output{
    @extend %inner-shadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
  }
  .calculator-buttons{
    @extend %clearfix;
    > button{
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      &.calculator-zero-button{
        width: (25% * 2);
      }
      &.calculator-ok-button {
        float: right;
        height: (64px * 2);
      }
      $calculator-one-button-color:#f2f2f2;
      &:nth-child(1){
        background: $calculator-one-button-color;
      }
      &:nth-child(2),&:nth-child(5){
        background: darken($calculator-one-button-color, 4%);
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
        background: darken($calculator-one-button-color, 4 * 2%);
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
        background: darken($calculator-one-button-color, 4 * 2%);
      }
      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($calculator-one-button-color, 4*3%);
      }
      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($calculator-one-button-color, 4*4%);
      }
      &:nth-child(14) {
        background: darken($calculator-one-button-color, 4*5%);
      }
      &:nth-child(12) {
        background: darken($calculator-one-button-color, 4*6%);
      }
    }
  }
}
</style>