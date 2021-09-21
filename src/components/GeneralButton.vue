<template>
  <button class="general-button" v-on:click="$emit('click',$event)">
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class GeneralButton extends Vue{
}
</script>

<style scoped lang="scss">
.general-button{
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 28px;
  }
}
</style>