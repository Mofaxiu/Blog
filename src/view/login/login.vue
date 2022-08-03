<template>
    <div class="bgc">
        <transition appear name="custom-classes-transition" enter-active-class="animate__animated animate__bounce"
            leave-active-class="animate__animated animate__bounceOutRight">
            <h1>魔法秀的博客</h1>
        </transition>
        <div class="container">
            <!-- 登录表单 -->
            <loginFromVue class="loginFrom" />
        </div>
    </div>
</template>

<script lang="ts" setup>

import loginFromVue from '../../components/loginFrom.vue'
</script>

<style scoped>
.bgc {
    width: 100%;
    height: 100%;
    background-color: rgba(4, 100, 89, 0.8);
    overflow: hidden;
    position: relative;
}

.container {
    position: absolute;
    border: 1px solid black;
    padding: 20px;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    height: 180px;
    background-color: white;
}

h1 {
    color: black;
    position: absolute;
    left: 50%;
    top: 10%;
    margin-left: -100px;
    opacity: .8;
}
</style>
