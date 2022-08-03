 <template>
    <!-- 头像和个人菜单按钮 -->
    <loginPerson />
    <div class="common-layout">
        <el-container>
            <el-header>
                <transition appear name="custom-classes-transition"
                    enter-active-class="animate__animated animate__pulse"
                    leave-active-class="animate__animated animate__bounceOutRight">
                    <h1>
                        Vue3 + Typescript + Element-plus + VueRouter + Pinia
                    </h1>
                </transition>

            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
                        :default-active="router.currentRoute.value.path" text-color="#fff" :router="true" :unique-opened="true"
                        textColor="white">
                        <!-- 一级菜单 -->
                        <el-sub-menu v-for="(item, index) in store.menu" :index="index + ''" :key="index">
                            <template #title>
                                <el-icon>
                                    <component :is="item.icon"></component>
                                </el-icon>
                                <span>{{ item.name }}</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item v-for="menuItem in filter(item)" :key="(menuItem as any).ids"
                                    :index="menuItem.path" class="itemColor">
                                    {{ menuItem.meta.text }}</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>

                </el-main>
            </el-container>
        </el-container>
    </div>

</template>

<script lang="ts" setup>
import { useRouter, RouteLocationRaw, RouteLocation } from 'vue-router'
import loginPerson from '../../components/loginPerson.vue';
import { useMenu } from '../../store';
import { readonly, onUpdated } from 'vue';
const router = useRouter()
const store = useMenu()
const filter = (arg: any) => {
    return readonly(router.getRoutes().filter(item => item.meta.ids == arg.name))
}
console.log()

</script>

<style scoped>
h1 {
    text-align: center;
    height: 100%;
    line-height: 60px;
    color: black;
    width: 80%;
    margin: auto;
}

.el-header {
    background-color: rgb(31, 119, 186);
}

.itemColor {
    color: rgb(254, 255, 255);
}

.is-active {
    color: orange !important;
}

.el-menu-vertical-demo {
    height: 100%;
}

.el-container,
.common-layout {
    height: 100%;
}
.el-main{
    position: relative;
    overflow: hidden;
}
</style>