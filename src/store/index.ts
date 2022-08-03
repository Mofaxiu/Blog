import { defineStore } from 'pinia'
export const usePersonImg = defineStore('PersonImg', {
	//头像地址
	state: () => ({
		url: '/src/static/img/mofaxiu.jpg'
	})
})
export const useMenu = defineStore('Menu', {
	//菜单列表地址
	state: () => ({
		menu: [
			{
				name: 'css',
				icon: 'Position'
			},
			{
				name: 'js',
				icon: 'Apple'
			},
			{
				name: 'vue',
				icon: 'Sunny'
			},
			{
				name: 'browser',
				icon: 'AlarmClock'
			},
			{
				name: 'http',
				icon: 'Aim'
			},
			{
				name: 'router',
				icon: 'Headset'
			},
			{
				name: 'pinia',
				icon: 'Ship'
			}
		]
	})
})
