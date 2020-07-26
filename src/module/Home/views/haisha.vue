<template>
  <div class="hy-main-wrap">
    <div class="hy-title">
      海沙销售代理商
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "",
  data() {
    return {}
  },
  components: {},
  props: {},
  computed: {
    ...mapState(['pageHaisha'])
  },
  created() {
    this.$store.dispatch('LOAD_PAGE_HAISHA');
  },
  mounted() {},
  methods: {}
};
</script>
<style lang='less' scoped>
</style>