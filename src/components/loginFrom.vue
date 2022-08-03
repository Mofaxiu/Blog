<template>
    <!-- 登录表单 -->
    <div id="container">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" status-icon label-position="left">
            <el-form-item label="昵称" prop="username">
                <el-input v-model="ruleForm.username" type="text" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" type="password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="reset(ruleFormRef)">重置</el-button>
                <el-button @click="submit(ruleFormRef)">登录</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { login } from '../axios/request'
import { useRouter } from 'vue-router'
import PubSub from 'pubsub-js'
const ruleFormRef = ref()
const router = useRouter()
type ruleFromType = {
    username: string,
    password: string
}
const ruleForm = reactive<ruleFromType>({
    username: 'mofaxiu',
    password: '168945'
})
//验证规则
const rules: FormRules = {
    username: [
        {
            required: true,
            message: '请输入昵称',
            trigger: 'blur'
        },
        {
            min: 1,
            max: 10,
            message: '昵称长度范围在1-10',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
        },
        {
            min: 1,
            max: 6,
            message: '密码长度在1-6中',
            trigger: 'blur'
        }
    ]
}


//  重置按钮
const reset = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    ruleForm.username = ''
    ruleForm.password = ''
}
// 登录按钮
const submit = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate(async (isValid: boolean) => {
        if (!isValid) return
        try {
            let result = await login(ruleForm)
            const { code, message } = result.data
            if (code == 0) {
                ElMessage({
                    message,
                    type: 'error',
                })
                return
            }
            ElMessage({
                message,
                type: 'success',
            })
            sessionStorage.setItem('token', 'mofaxiu')
            PubSub.publish('person', ruleForm)
            router.push({
                name: 'home'
            })
            return
        }
        catch (err) {
            console.log(err)
        }
    })
}
</script>


<style scoped>
#container {
    margin-top: 7%;
}

#container /deep/ .el-form-item__content {
    justify-content: space-around;
}

.el-form-item--feedback {
    margin-bottom: 25px;
}
</style>