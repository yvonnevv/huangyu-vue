<template>
  <div class="hy-main-wrap">
    <div class="hy-title">{{pageJijian.classify}}</div>
    <div class="hy-article">
      <div v-html="pageJijian.content"></div>
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
    ...mapState(['pageJijian'])
  },
  created() {
    this.$store.dispatch('LOAD_PAGE_JIJIAN');
  },
  mounted() {},
  methods: {}
};
</script>
<style lang='less' scoped>
</style>