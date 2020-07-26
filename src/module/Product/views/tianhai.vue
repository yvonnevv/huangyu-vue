<template>
  <div class="hy-main-wrap">
    <div class="hy-title">{{pageTianhai.classify}}</div>
    <div class="hy-article">
      <div v-html="pageTianhai.content"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: '',
  data() {
    return {}
  },
  components: {},
  props: {},
  computed: {
    ...mapState(['pageTianhai'])
  },
  created() {
    this.$store.dispatch('LOAD_PAGE_TIANHAI');
  },
  updated() {
    const { image1, image2, image3 } = this.pageTianhai;
    this.$store.dispatch('UPDATE_IMGS', [image1, image2, image3]);
  },
  mounted() {},
  methods: {}
};
</script>
<style lang='less' scoped>
</style>