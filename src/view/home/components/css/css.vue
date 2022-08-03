<template>
    <div>
        <div :class="['box', box]"></div>
        <div class="btns">
            <el-button type="primary" round @click="add1">慢快慢</el-button>
            <el-button type="success" round @click="add2">匀速</el-button>
            <el-button type="info" round @click="add3">慢快</el-button>
            <el-button type="warning" round @click="add4">快慢</el-button>
            <el-button type="danger" round @click="add5">慢快慢</el-button>
        </div>
        <!-- //折叠卡片 -->
        <div class="demo-collapse">
            <el-collapse>
                <el-collapse-item title="Code">
                    <el-card>
                        <div class="code" v-html="div">
                        </div>
                    </el-card>
                </el-collapse-item>
                <el-collapse-item title="Vue组件">
                    <div class="code">
                        <p> {{ `
                                                    <el-animate size="50" @change="handle" text="我是红色的小球">
                        `}}
                        </p>
                        <p>
                            {{
                                    ' </el-animate> '
                            }}
                        </p>
                        <p>
                            {{
                                    `
                                                        <script lang="ts" setup>
                                                            `
                            }}
                    </p>
                                        <p>
                        {{
                                `
                                                const handle = () => {
                                                    box.value = 'box5'
                                                    }
                                                                                                    `
                        }}
                    </p>
                    <p>
                        {{
                            `
                              </script>
                            `
                        }}
                    </p>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { readonly, reactive, ref } from 'vue';
const box = ref('box2')
const add1 = () => {
    box.value = 'box1'
}
const add2 = () => {
    box.value = 'box2'
}
const add3 = () => {
    box.value = 'box3'
}
const add4 = () => {
    box.value = 'box4'
}
const add5 = () => {
    box.value = 'box5'
}
const div = '<div class="codes" style=" "><P style="white-space: pre">  .animate {</P> <P style="white-space: pre">     width: 50px; </P><P style="white-space: pre">     height:50px;</P><P style="white-space: pre">     background-color: orangered; </P><P style="white-space: pre">     border-radius: 50%; </P> <P style="white-space: pre">     top: 0; </P><P style="white-space: pre">     position: absolute; </P><P style="white-space: pre">     animation: ball 4s linear infinite; </P><P style="white-space: pre">              } </P></div>'
</script>

<style scoped>
.box {
    width: 50px;
    height: 50px;
    background-color: orangered;
    border-radius: 50%;
    top: 0;
    position: absolute;
    animation: ball 4s linear infinite;
}

@keyframes ball {
    0% {
        transform: translate(0, 0);
    }

    25% {
        transform: translate(200px, 100px);
    }

    50% {
        transform: translate(300px, 0);
    }

    75% {
        transform: translate(500px, 100px);
    }

    100% {
        transform: translate(100vw, 0px);
    }
}

.box1 {
    animation-timing-function: ease;
}

.box2 {
    animation-timing-function: linear;
}

.box3 {
    animation-timing-function: ease-in;
}

.box4 {
    animation-timing-function: ease-out;
}

.box5 {
    animation-timing-function: ease-in-out;
}

.btns {
    position: absolute;
    top: 205px;
    display: flex;
    width: 100%;
    justify-content: space-around;
}

.demo-collapse {
    margin-top: 250px;
}

.code {
    background-color: #F5F7FA;
}

.codes {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>