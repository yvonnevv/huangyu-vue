<template>
  <div class="hy-copyright-wrap">
    <div class="hy-copyright">
    <div class="hy-copyright-left">
      <img src="http://www.royalhonors.group/image/bottomlogo.png" alt srcset>
      <p>
        联系电话：
        <span class="phone">{{copyright.phone}}</span>
      </p>
      <p>邮箱：{{copyright.email}}</p>
      <p>地址：{{copyright.address}}</p>
    </div>
    <div class="hy-copyright-right">
      <img src="http://www.royalhonors.group/image/qrcode.png" alt>
      <p>网址：{{copyright.website}}</p>
      <p>IPC：{{copyright.ipc}}</p>
    </div>
  </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['copyright'])
  }
};
</script>

<style lang="less" scoped>
.hy-copyright {

  display: flex;
  background: #9a979b;
  width: 750px;
  height: 173px;
  position: fixed;
  bottom: 0;
  overflow-x: hidden;

  &-wrap {
    margin-top: 173px;
  }

  &-left {
    margin-left: 30px;

    img {
      width: 191px;
      height: 36px;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    p {
      color: #ffffff;
      font-size: 12px;
      line-height: 1;
      transform: scale(0.6);
      transform-origin: left top;
      white-space: nowrap;

      span {
        font-size: 34px;
        color: #dfc287;
      }
    }
  }

  &-right {
    position: absolute;
    right: -20px;
    top: 15px;

    img {
      width: 76px;
      height: 76px;
      margin-bottom: 4px;
    }
    p {
      font-size: 12px;
      color: #ffffff;
      line-height: 1.1;
      transform: scale(0.8);
      transform-origin: left top;
    }
  }
}
</style>

