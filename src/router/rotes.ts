import login from '../view/login/login.vue'
export default [
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		component: login
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('../view/home/home.vue'),
		children: [
			{
				path: 'css',
				name: 'css',
				meta: {
					text: 'css模块',
					ids: 'css'
				},
				component: () => import('../view/home/components/css/css.vue')
			},
			{
				path: '/echartscss',
				name: 'echartscss',
				meta: {
					text: 'css图形化模块',
					ids: 'css'
				},
				component: () =>
					import('../view/home/components/css/echartsCss.vue')
			},
			{
				path: 'js',
				name: 'js',
				meta: {
					text: 'js模块',
					ids: 'js'
				},
				component: () => import('../view/home/components/js/js.vue')
			},
			{
				path: 'vue',
				name: 'vue',
				meta: {
					text: 'vue模块',
					ids: 'vue'
				},
				component: () => import('../view/home/components/vue/vue.vue')
			},
			{
				path: 'browser',
				name: 'browser',
				meta: {
					text: '浏览器模块',
					ids: 'browser'
				},
				component: () =>
					import('../view/home/components/browser/browser.vue')
			},
			{
				path: 'http',
				name: 'http',
				meta: {
					text: '网络协议模块',
					ids: 'http'
				},
				component: () => import('../view/home/components/http/http.vue')
			},
			{
				path: 'router',
				name: 'router',
				meta: {
					text: '路由模块',
					ids: 'router'
				},
				component: () =>
					import('../view/home/components/router/router.vue')
			},
			{
				path: 'pinia',
				name: 'pinia',
				meta: {
					text: '存储库模块',
					ids: 'pinia'
				},
				component: () =>
					import('../view/home/components/pinia/pinia.vue')
			}
		]
	},
	{
		path: '/person',
		name: 'person',
		component: () => import('../view/person/person.vue')
	}
]
