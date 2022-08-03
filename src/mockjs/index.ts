import Mock from 'mockjs'
import { login, loginError } from './json/login'
Mock.mock('/home', 'post', (option: any) => {
	let { body } = option
	body = JSON.parse(body)
	if (body.username != login.username || body.password != login.password) {
		return loginError
	}
	return login
})
