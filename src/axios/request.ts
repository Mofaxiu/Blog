import axios from './index'
import { loginType } from './type'
export function login(data: loginType) {
	return axios({
		url: '/home',
		method: 'post',
		data
	})
}
