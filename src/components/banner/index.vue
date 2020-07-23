<template>
    <div class="hy-banner">
        <slot></slot>
    </div>
</template>
<style lang="less" scoped>
    .hy-banner {
        width: 100%;
        height: 600px;
        overflow: hidden;

        img {
            width: auto;
            height: 600px;
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>

