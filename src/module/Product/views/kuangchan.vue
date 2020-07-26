<template>
  <div class="hy-main-wrap">
    <div class="hy-title">{{pageKuangchan.classify}}</div>
    <div class="hy-article">
      <div v-html="pageKuangchan.content"></div>
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
    ...mapState(['pageKuangchan'])
  },
  created() {
    this.$store.dispatch('LOAD_PAGE_KUANGCHAN');
  },
  updated() {
    const { image1, image2, image3 } = this.pageKuangchan;
    this.$store.dispatch('UPDATE_IMGS', [image1, image2, image3]);
  },
  methods: {}
};
</script>
<style lang='less' scoped>
</style>