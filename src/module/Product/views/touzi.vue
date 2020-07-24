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
  mounted() {},
  methods: {}
};
</script>
<style lang='less' scoped>
</style>