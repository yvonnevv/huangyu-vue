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
  box-sizing: content-box;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);

  &-wrap {
    margin-top: 220px;
    position: relative;
    z-index: 100;
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
      font-size: 13px;
      transform-origin: left top;
      white-space: nowrap;
      line-height: 2;

      span {
        font-size: 34px;
        color: #dfc287;
        line-height: 1;
      }
    }
  }

  &-right {
    position: absolute;
    right: 60px;
    top: 15px;

    img {
      width: 76px;
      height: 76px;
      margin-bottom: 4px;
    }
    p {
      font-size: 16px;
      color: #ffffff;
      line-height: 2;
      transform-origin: left top;
    }
  }
}
</style>

