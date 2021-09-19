<template>
  <div class="tags">
    <div class="new-tag-button-wrapper">
      <button>新增标签</button>
    </div>
    <ul class="cur-tags">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tags'
};
</script>

<style scoped lang="scss">
.tags{
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;

  > .cur-tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > li {
      background: #d9d9d9;
      display: flex;
      align-items: center;
      $h: 24px;
      height: $h;
      border-radius: ($h/2);
      padding: 0 16px;
      margin-right: 12px;
    }
  }

  > .new-tag-button-wrapper{
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
</style>