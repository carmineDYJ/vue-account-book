<template>
  <nav>
    <router-link to="/keep-account" class="item" active-class="selected">
      <Icon name="keep_account"/>
      记账
    </router-link>
    <router-link to="/tags" class="item" active-class="selected">
      <Icon name="tag"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (e) {
  console.log(e);
}


export default {
  name: 'Nav'
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  font-size: 12px;

  > .item {
    width: 33.333333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 0;

    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected{
    color: $color-highlight;
  }
}

</style>