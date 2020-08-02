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
    margin: 25px 30px 0 20px;
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
      height: 2px;
      background:rgba(74,74,74,1);
      opacity: 0.3;
      margin-top: 12px;
    }
  }

  .hy-article {
    color: #666666;
    font-size: 24px;
    max-width: 488px;
    overflow-x: hidden;

    img {
      max-width: 100%;
    }

    h3, p {
      margin: 0;
      line-height: 1.5;
    }

    h3.title {
      text-align: center;
      margin: 30px 0 20px;
    }
    // text-indent: 30px;
    // line-height: 1.5;
  }
</style>
