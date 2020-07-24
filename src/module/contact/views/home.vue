<template>
  <div class="hy-main-wrap">
    <div class="hy-title">联系我们</div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      title: {
        zh: "联系我们",
        en: "Business promotion"
      },
      links: [
        {
          title: "联系方式",
          to: "/home"
        },
        {
          title: "海沙销售代理商",
          to: "/haisha"
        }
      ]
    };
  },
  components: {},
  props: {},
  computed: {},
  mounted() {},
  methods: {}
};
</script>
<style lang='less' scoped>
</style>