import { defineStore } from 'pinia'
export const useCharts = defineStore('charts', {
	state: () => ({
		option: {
			title: {
				text: 'css图形'
			},
			tooltip: {},
			animationDurationUpdate: 1500,
			animationEasingUpdate: 'quinticInOut',
			series: [
				{
					type: 'graph',
					layout: 'none',
					symbolSize: 85,
					roam: true,
					label: {
						show: true
					},
					edgeSymbol: ['circle', 'arrow'],
					edgeSymbolSize: [4, 10],
					edgeLabel: {
						fontSize: 20
					},
					data: [
						{
							name: '垂直和水平居中',
							x: 300,
							y: 300
						},
						{
							name: 'grid和flex布局',
							x: 800,
							y: 300
						},
						{
							name: 'css核心',
							x: 550,
							y: 100
						},
						{
							name: '回流和重绘',
							x: 550,
							y: 500
						},
						{
							name: '权值计算',
							x: 800,
							y: 0
						},
						{
							name: 'css布局',
							x: 300,
							y: 0
						},
						{
							name: 'css动画',
							x: 550,
							y: 300
						}
					],
					// links: [],
					links: [
						{
							source: 0,
							target: 1,
							symbolSize: [5, 20],
							// label: {
							//   show: true
							// },
							lineStyle: {
								width: 5,
								curveness: 0.2
							}
						},
						{
							source: ' grid和flex布局',
							target: '垂直和水平居中',
							// label: {
							//   show: true
							// },
							lineStyle: {
								curveness: 0.2
							}
						},
						{
							source: 'css核心',
							target: '垂直和水平居中'
						},
						{
							source: 'css核心',
							target: 'grid和flex布局'
						},

						{
							source: 'css核心',
							target: '回流和重绘'
						},
						{
							source: 'css核心',
							target: '权值计算'
						},
						{
							source: 'css核心',
							target: 'css布局'
						},
						{
							source: '回流和重绘',
							target: '垂直和水平居中'
						},
						{
							source: '回流和重绘',
							target: 'grid和flex布局'
						}
					],
					lineStyle: {
						opacity: 0.9,
						width: 2,
						curveness: 0
					}
				}
			]
		}
	}),
	actions: {}
})
