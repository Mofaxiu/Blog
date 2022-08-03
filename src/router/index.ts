import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './rotes'
import { ElMessage } from 'element-plus'

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

router.beforeEach(to => {
	let token: string | boolean | null = sessionStorage.getItem('token')
	if (token != 'mofaxiu') {
		token = false
	}
	if (to.path != '/login') {
		let result = token == 'mofaxiu' ? true : { path: '/login' }
		if (result != true) {
			ElMessage({
				message: 'token失效',
				type: 'error'
			})
		}

		return result
	}
})

export default router
