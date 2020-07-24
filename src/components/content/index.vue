<template>
  <div class="hy-main">
    <sidebar :title="title" :links="links" :activePath="activePath"></sidebar>
    <slot></slot>
  </div>
</template>
<script>
import sidebar from "./sidebar";

export default {
  components: {
    sidebar
  },
  props: ["title", "links", "activePath"]
};
</script>
<style lang="less">
  .hy-main {
    margin: 25px 20px 0;
    display: flex;
  }

  .hy-main-wrap {
    width: 100%;
  }

  .hy-title {
    font-size: 32px;
    color: #DFC287;
    width: 100%;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height:1px;
      background:rgba(74,74,74,1);
      opacity:0.3;
      margin-top: 12px;
    }
  }

  .hy-article {
    color: #666666;
    font-size: 20px;
    text-indent: 30px;
    line-height: 1.5;
  }
</style>
