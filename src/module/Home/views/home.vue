<template>
  <div class="hy-main-wrap">
    <div class="hy-title">联系我们</div>
    <div class="hy-article">
      <div class="contact-list" v-for="(item, index) in pageHome" :key="index">
        <div><img :src="item.image" alt=""></div>
        <h3>{{item.companyName}}</h3>
        <p>联系人：{{item.contacts}}</p>
        <p>电话：{{item.phone}}</p>
        <p>网址：{{item.companyName}}</p>
        <p>E-mail：{{item.email}}</p>
        <p>地址：{{item.website}}</p>
      </div>
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
    ...mapState(['pageHome'])
  },
  created() {
    this.$store.dispatch('LOAD_PAGE_HOME');
  },
  mounted() {},
  methods: {}
};
</script>
<style lang='less' scoped>
</style>