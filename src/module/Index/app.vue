<template>
  <div class="container">
    <!-- 导航 -->
    <navbar></navbar>
    <transition name="fade" mode="out-in">
      <router-view keep-alive></router-view>
    </transition>
  </div>
</template>
<script>
import { mapState } from "vuex";
import navbar from "@/components/nav/navbar";

export default {
  computed: {
    ...mapState(["urlItems"])
  },
  components: {
    navbar
  },
  watch: {
    $route(to, from) {}
  }
};
</script>
<style lang="less">
@import "../../assets/style/likr.less";
// .v-link-active {
//   color: #f66 !important;
// }
</style>
