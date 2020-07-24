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
  mounted() {},
  methods: {}
};
</script>
<style lang='less' scoped>
</style>