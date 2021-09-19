<template>
    <Layout class-prefix="layout">
      <Calculator/>
      <Types/>
      <Notes/>
      <Tags v-bind:all-tags="allTags"/>
    </Layout>
</template>

<script>
import Calculator from '@/components/KeepAccount/Calculator.vue';
import Types from '@/components/KeepAccount/Types.vue';
import Notes from '@/components/KeepAccount/Notes.vue';
import Tags from '@/components/KeepAccount/Tags.vue';
export default {
  name: 'KeepAccount',
  components: {Tags, Notes, Types, Calculator},
  data(){
    return{
      allTags:['衣','食','住','行']
    }
  }
};
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>
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