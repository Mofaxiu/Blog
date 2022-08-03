<template>
    <div class="fix">
        <el-image style="width: 100px; height: 100px" :src="imgUrl" fit="cover" alt="个人中心"
            :preview-src-list="[imgUrl]" :z-index="100000" loading="eager"
            :preview-teleported="true"
            >
        </el-image>
        <el-button type="warning" class="btn" round @click="toPerson">魔法秀</el-button>

    </div>
</template>
<script lang="ts" setup>
import PubSub from 'pubsub-js'
import { shallowRef, markRaw, toRaw } from 'vue';
import { useRouter } from 'vue-router'
import { usePersonImg } from '../store/index'
const personImg = usePersonImg() //拿到store对象
const router = useRouter()
const user = markRaw({  //从登录那拿到用户名，但是不渲染
    username: ''
})
const username = (msg: string, index: string) => {
    let result = toRaw(index)
    user.username = (result as any).username
}

const imgUrl = new URL(`../static/img/mofaxiu.jpg`, import.meta.url).href;



PubSub.unsubscribe('person')
PubSub.subscribe('person', username)  //拿到登录信息

const url = personImg.url
const toPerson = () => {
    router.push({
        name: 'person'
    })
}

</script>
<style>
.fix {
    position: fixed;
    height: 60px;
    right: 51px;
    top: 0px;
}

.el-image {
    width: 50px !important;
    height: 50px !important;
    border-radius: 50%;
    cursor: pointer;
    margin-top: 6px;
}

.btn {
    margin-top: -36px;
    margin-left: 6px;
}

.el-image-viewer__img {
    height: 70%;
}

</style>