<template>
  <div class="navbar" :class="isOverView ? 'over' : ''">
    <yd-accordion>
      <yd-accordion-item class="navbar-control" ref="accordion_main">
        <div slot="icon">
          <img class="logo" src="../../assets/images/logo_top.png" alt srcset />
        </div>
        <yd-accordion>
          <a :href="homePath" class="nav-item home">
            <p>首页</p>
          </a>
          <yd-accordion-item
            :title="item.label"
            v-for="(item, index) in navList"
            :key="item.label"
            :ref="`accordion_${index}`"
            :class="index === openIdx ? `${item.className} active`: `${item.className}`"
            @click.native="itemClick(index)"
          >
            <div v-if="item.child">
              <div
                v-for="cItem in item.child"
                :key="cItem.label"
                class="nav-child-item"
                @click="jumpTo(cItem.to)"
              >
                <p v-text="cItem.label"></p>
              </div>
            </div>
          </yd-accordion-item>
        </yd-accordion>
      </yd-accordion-item>
    </yd-accordion>
  </div>
</template>

<script>
import Vue from "vue";
import { Accordion, AccordionItem } from "vue-ydui/dist/lib.rem/accordion";

Vue.component(Accordion.name, Accordion);
Vue.component(AccordionItem.name, AccordionItem);

export default {
  name: "navbar",
  data() {
    return {
      navList: [
        {
          label: "集团概况",
          className: "nav-item business",
          child: [
            {
              label: "关于皇誉",
              to: `//${location.host}/business.html#/about`,
            },
            {
              label: "荣誉资质",
              to: `//${location.host}/business.html#/rongyu`,
            },
            {
              label: "投资合作",
              to: `//${location.host}/business.html#/hezuo`,
            },
          ],
        },
        {
          label: "集团项目",
          className: "nav-item product",
          child: [
            {
              label: "基建项目",
              to: `//${location.host}/product.html#/jijian`,
            },
            {
              label: "矿产资源",
              to: `//${location.host}/product.html#/kuangchan`,
            },
            {
              label: "填海资源",
              to: `//${location.host}/product.html#/tianhai`,
            },
            {
              label: "投资项目",
              to: `//${location.host}/product.html#/touzi`,
            },
          ],
        },
        {
          label: "新闻中心",
          className: "nav-item news",
          child: [
            {
              label: "集团新闻",
              to: `//${location.host}/news.html#/business`,
            },
            {
              label: "行业新闻",
              to: `//${location.host}/news.html#/hangye`,
            },
          ],
        },
        {
          label: "联系我们",
          className: "nav-item contact",
          child: [
            {
              label: "联系方式",
              to: `//${location.host}/contact.html#/home`,
            },
            {
              label: "海沙销售代理商",
              to: `//${location.host}/contact.html#/haisha`,
            },
          ],
        },
      ],
      homePath: `//${location.host}/index.html`,
      openIdx: -1,
      isOverView: false
    };
  },
  created() {
    window.addEventListener("scroll", this.debounce(this.handleScroll, 10), true);
  },
  mounted() {
    this.container = document.querySelector('.container');
    this.documentElement = document.documentElement;
    console.log('MOUNT', this.container);
    this.handleScroll();
  },
  methods: {
    itemClick(index) {
      if (this.openIdx === index) {
        this.openIdx = -1;
      } else {
        this.openIdx = index;
      }
    },
    jumpTo(path) {
      window.open(path, "_self");
      this.$refs.accordion_main.closeItem();
    },
    handleScroll() {
      const scrolDis = this.container.scrollTop || this.documentElement.scrollTop;
      if (scrolDis >= 300) {
        this.isOverView = true;
      } else {
        this.isOverView = false;
      };
    },
    debounce(fn, wait) {
      let timeout = null;
      return function () {
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
      };
    },
  },
};
</script>
<style lang='less'>
@font-face {
  font-family: "iconfont"; /* project id 1961085 */
  src: url("//at.alicdn.com/t/font_1961085_cgxy46vlpzi.eot");
  src: url("//at.alicdn.com/t/font_1961085_cgxy46vlpzi.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1961085_cgxy46vlpzi.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1961085_cgxy46vlpzi.woff") format("woff"),
    url("//at.alicdn.com/t/font_1961085_cgxy46vlpzi.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1961085_cgxy46vlpzi.svg#iconfont") format("svg");
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: all 300ms ease;

  &.over {
    background: rgba(0, 0, 0, 0.5);
  }

  .logo {
    width: 37px;
    height: 52px;
  }

  .active {
    .yd-accordion-title {
      color: #dfc287 !important;
    }
  }

  .nav-item.home {
    min-height: 1rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 0.28rem;
    color: #333;
    position: relative;

    &::after {
      height: 1px;
      position: absolute;
      z-index: 0;
      bottom: 0;
      left: 0;
      content: "";
      width: 100%;
      background-image: -webkit-linear-gradient(
        bottom,
        #ececec 50%,
        transparent 0
      );
      background-image: linear-gradient(0deg, #ececec 50%, transparent 0);
    }
  }

  .yd-accordion {
    background: transparent;
  }

  &-control {
    .yd-accordion-head-arrow {
      &::after {
        font-family: "iconfont";
        border: none;
        width: auto !important;
        height: auto !important;
        transform: none;
        font-size: 30px;
        content: "\e61e";
        color: #999999;
        position: relative;
        left: 4px;
      }

      &.yd-accordion-rotated::after {
        transform: rotate(90deg);
      }
    }

    & > .yd-accordion-head {
      &::after {
        display: none;
      }
      .yd-accordion-head-arrow {
        &::after {
          content: "\e605";
          font-size: 50px;
          color: #ffffff;
          transform: none;
          left: 0;
        }
      }
    }

    & > .yd-accordion-content {
      padding: 0 30px;
      background: #fff;

      .yd-accordion-head {
        padding: 0;
      }

      .yd-accordion {
        padding-bottom: 250px;
      }
    }

    .yd-accordion-title {
      color: #333333;
      &.active {
        color: #dfc287;
      }
    }

    .nav-child-item {
      display: block;
      font-size: 24px;
      padding-left: 80px;
      line-height: 68px;
      color: #333333;
      border-bottom: 1px solid #f1f1f1;
    }
  }
}

.nav-item {
  &.home::before,
  .yd-accordion-head::before {
    content: '';
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 24px;
  }

  &.home {
    &::before {
      width: 36px;
      height: 38px;
      background-image: url('../../assets/images/icon_home.png');
    }
  }

  &.business .yd-accordion-head {
    &::before {
      width: 38px;
      height: 28px;
      background-image: url('../../assets/images/icon_business.png');
    }
  }

  &.product .yd-accordion-head {
    &::before {
      width: 35px;
      height: 35px;
      background-image: url('../../assets/images/icon_product.png');
    }
  }

  &.news .yd-accordion-head {
    &::before {
      width: 34px;
      height: 33px;
      background-image: url('../../assets/images/icon_news.png');
    }
  }

  &.contact .yd-accordion-head {
    &::before {
      width: 30px;
      height: 34px;
      background-image: url('../../assets/images/icon_contact.png');
    }
  }

  &.home.active::before {
    background-image: url('../../assets/images/icon_home_active.png');
  }

  &.business.active .yd-accordion-head::before {
    background-image: url('../../assets/images/icon_business_active.png');
  }

  &.news.active .yd-accordion-head::before {
    background-image: url('../../assets/images/icon_news_active.png');
  }

  &.product.active .yd-accordion-head::before {
    background-image: url('../../assets/images/icon_product_active.png');
  }

  &.contact.active .yd-accordion-head::before {
    background-image: url('../../assets/images/icon_contact_active.png');
  }
}
</style>