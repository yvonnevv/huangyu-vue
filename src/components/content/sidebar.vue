<template>
  <div class="hy-sidebar">
    <div class="hy-sidebar-title">
      <p class="zh">{{title.zh}}</p>
      <p class="en"><span>{{title.en}}</span></p>
    </div>
    <router-link 
      class="hy-sidebar-link" 
      v-for="(item, index) in links" 
      :to="item.to"
      :key="index"
      :class="activePath === item.to ? 'active' : ''"
    >
      <p>{{item.title}}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["title", "links", "activePath"],
  data() {
    return {
      // path: ''
    }
  },
  mounted() {
    // this.path = this.$route.path;
  }
};
</script>
<style lang="less" scoped>
  .hy-sidebar {
    margin-right: 24px;

    &-title {
      border-radius:10px 10px 0px 0px;
      background: #4A4A4A;
      width:186px;
      height:87px;

      p {
        text-align: center;
      }

      .zh {
        color: #DFC287;
        font-size: 20px;
        position: relative;
        top: 14px;
        margin-bottom: 14px;
      }
      .en {
        display: flex;
        justify-content: center;
        font-size: 14px;
        color: #fff;
        white-space: nowrap;
        transform: scale(0.65);
      }
    }

    &-link {
      width: 186px;
      line-height: 60px;
      color: #fff;
      font-size: 16px;
      background: #4A4A4A;
      display: flex;
      justify-content: center;
      margin: 7px 0;

      &.active {
        background: #DFC287;
      }

      p {
        transform: scale(0.75);
      }
    }
  }
</style>

