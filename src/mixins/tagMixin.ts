// mixins.js
import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare mixins as the same style as components.
@Component
export class tagMixin extends Vue {
  addTag(){
    const newTag = window.prompt('请输入标签名');

    if (newTag !== null && newTag !== ''){
      this.$store.commit('addTag', newTag);
    }
  }
}
