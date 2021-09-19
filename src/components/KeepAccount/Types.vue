<template>
  <div>
    <ul class="expenditure-income">
      <li v-bind:class="value === 'expenditure' && 'selected'"
          v-on:click="selectType('expenditure')">支出
      </li>
      <li v-bind:class="value === 'income' && 'selected'"
          v-on:click="selectType('income')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop() readonly value!: string;
  selectType(type: string) {
    if (type !== 'expenditure' && type !== 'income') {
      throw new Error('There are only two types: expenditure and income');
    }
    this.$emit('update:value', type);
  }
}
</script>

<style scoped lang="scss">
.expenditure-income {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>