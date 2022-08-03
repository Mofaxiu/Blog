import axios from 'axios'
const instance = axios.create({
	timeout: 2500,
	headers: {
		'Access-Control-Allow-Origin': '*'
	}
})

instance.interceptors.request.use(
	function (config) {
		const token = sessionStorage.getItem('token')
		config.headers = config.headers || {}
		config.headers.token = token ? token : ''
		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	function (response) {
		// 对响应数据做点什么
		return response
	},
	function (error) {
		// 对响应错误做点什么
		return Promise.reject(error)
	}
)

export default instance
