<template>
  <div class="hy-main-wrap">
    <div class="hy-title">{{pageTouzi.classify}}</div>
    <div class="hy-article">
      <div v-html="pageTouzi.content"></div>
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
    ...mapState(['pageTouzi'])
  },
  created() {
    this.$store.dispatch('LOAD_PAGE_TOUZI');
  },
  updated() {
    const { image1, image2, image3 } = this.pageTouzi;
    this.$store.dispatch('UPDATE_IMGS', [image1, image2, image3]);
  },
  mounted() {},
  methods: {}
};
</script>
<style lang='less' scoped>
</style>