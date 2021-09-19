<template>
  <div class="nav-wrapper">
    <div class="content" v-bind:class="classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  props: ['classPrefix'],
  name: 'Layout'
};
</script>

<style scoped lang="scss">
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex-grow: 1;
  overflow: auto;
}
</style>