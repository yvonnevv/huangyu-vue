<template>
  <div class="navbar">
    <yd-accordion>
      <yd-accordion-item class="navbar-control">
        <div slot="icon"></div>
        <yd-accordion>
          <router-link to="/about" class="nav-item shouye">
            <p>首页</p>
          </router-link>
          <yd-accordion-item
            :title="item.label"
            v-for="(item, index) in navList"
            :key="item.label"
            :auto="false"
            :ref="`accordion_${index}`"
            @click.native="itemClick(index, $event)"
            :class="item.className"
          >
            <div v-if="item.child">
              <router-link
                v-for="cItem in item.child"
                :key="cItem.label"
                class="nav-child-item"
                to="/"
              >
                <p v-text="cItem.label"></p>
              </router-link>
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
import navItem from "./nav-item";

Vue.component(Accordion.name, Accordion);
Vue.component(AccordionItem.name, AccordionItem);

export default {
  name: "navbar",
  data() {
    return {
      navList: [
        {
          label: "集团概况",
          className: "nav-item jituan",
          child: [
            {
              label: "关于皇誉"
            },
            {
              label: "荣誉资质"
            },
            {
              label: "投资合作"
            }
          ]
        },
        {
          label: "集团项目",
          className: "nav-item xiangmu",
          child: [
            {
              label: "基建项目"
            },
            {
              label: "矿产资源"
            },
            {
              label: "填海资源"
            },
            {
              label: "投资项目"
            }
          ]
        },
        {
          label: "新闻中心",
          className: "nav-item xinwen",
          child: [
            {
              label: "行业新闻"
            },
            {
              label: "集团新闻"
            }
          ]
        },
        {
          label: "联系我们",
          className: "nav-item lianxi",
          child: [
            {
              label: "联系方式"
            },
            {
              label: "海沙销售代理商"
            }
          ]
        }
      ],
      openIdx: -1
    };
  },
  mounted() {
    console.log("MOUNT");
  },
  methods: {
    itemClick(index, e) {
      let target = e.target;
      if (target.nodeName.toLocaleLowerCase() === "span") {
        target = target.parentNode;
      }
      const refName = `accordion_${index}`;
      if (this.openIdx !== index) {
        this.openIdx = index;
        this.$refs[refName][0].openItem();
        target.classList.add("active");
      } else {
        this.openIdx = -1;
        this.$refs[refName][0].closeItem();
        target.classList.remove("active");
      }
    }
  }
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
  z-index: 100;

  .nav-item.shouye {
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
        font-size: 24px;
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
      .yd-accordion-head-arrow {
        &::after {
          content: "\e605";
          font-size: 24px;
          transform: none;
          left: 0;
        }
      }
    }

    & > .yd-accordion-content {
      padding: 0 10px;
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
      font-size: 12px;
      padding-left: 40px;
      line-height: 34px;
      color: #333333;
      border-bottom: 1px solid #f1f1f1;
    }
  }
}
</style>