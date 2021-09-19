<template>
  <div class="calculator">
    <div class="calculator-output">100</div>
    <div class="calculator-buttons clearfix">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="calculator-ok-button">OK</button>
      <button class="calculator-zero-button">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Calculator'
};
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