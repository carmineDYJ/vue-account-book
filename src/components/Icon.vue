<template>
  <svg class="icon" v-on:click="$emit('click', $event)">
    <use v-bind:xlink:href="'#' + name"/>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: ['name']
};
</script>

<style scoped>
  .icon{
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>