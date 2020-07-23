<template>
    <div class="hy-copyright">
        <div class="hy-copyright-left">
            <img src="https://iph.href.lu/191x36" alt="" srcset="">
            <p>联系电话：<span class="phone">40007-92980</span></p>
            <p>邮箱：kenny@royalhonors.com</p>
            <p>地址：深圳市南山区科技园北京航空航天大厦1号楼908</p>
        </div>
        <div class="hy-copyright-right">
            <img src="https://iph.href.lu/76x76" alt="">
            <p>网址：www.royalhonors.com</p>
            <p>IPC：20057885号-1</p>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .hy-copyright {
        display: flex;
        background: #9a979b;
        width: 750px;
        height: 173px;
        position: absolute;
        bottom: 0;
        overflow-x: hidden;

        &-left {
            margin-left: 30px;

            img {
                width: 191px;
                height: 36px;
                margin-top: 20px;
                margin-bottom: 10px;
            }

            p {
                color: #FFFFFF;
                font-size: 12px;
                line-height: 1;
                transform: scale(0.6);
                transform-origin: left top;
                white-space: nowrap;

                span {
                    font-size: 34px;
                    color: #DFC287;
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
                color: #FFFFFF;
                line-height: 1.1;
                transform: scale(0.8);
                transform-origin: left top;
            }
        }
    }
</style>

