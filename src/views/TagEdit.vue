<template>
  <Layout>
    <div>
      <Icon name="left"/>
      <span>编辑标签</span>
    </div>
    <Notes field-name="标签名" placeholder="请输入新的标签名"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagModel from '@/models/tagModel.ts';
import Notes from '@/components/Notes.vue';
@Component({
  components: {Notes}
})
export default class TagEdit extends Vue{
  created(){
    const id = parseInt(this.$route.params.id);
    tagModel.fetch();
    const allTags = tagModel.allTags;
    const tag = allTags.filter(tag => tag.tagId === id)[0];
    console.log(tag);
    if (tag) {
      console.log(id);
    } else{
      this.$router.replace('/404');
    }
  }
}
</script>

<style scoped lang="scss">

</style>