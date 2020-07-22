<template>
  <router-link class="nav-item" :to="path" :class="activeClass">
    <i class="icon" :class="iconClass">
    </i>
    <div class="label" v-text="label"></div>
  </router-link>
</template>
<script>
  export default {
    name: 'tab-item',
    data() {
      return {}
    },
    props: {
      label: '',
      iconClass: '',
      path: '',
      activeClass: ''
    },
    computed: {},
    methods: {}
  }
</script>
<style lang='less' scoped>
</style>