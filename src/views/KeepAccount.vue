<template>
    <Layout>
      <div class="tags">
        <ul class="cur-tags">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <div class="add-tag-button-wrapper">
          <button>new Tag</button>
        </div>
      </div>
      <div>
        <label class="notes">
          <span class="notes-label-text">备注</span>
          <input type="text">
        </label>
      </div>
      <div>
        <ul class="expenditure-income">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div class="calculator">
        <div class="calculator-output">100</div>
        <div class="calculator-buttons">
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
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </div>
    </Layout>
</template>

<script lang="ts">
export default {
  name: 'KeepAccount',
};
</script>

<style scoped lang="scss">
</style>