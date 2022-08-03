<template>

    <div id="main">

    </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue'
import { useCharts } from '../../../../store/echarts'
const charts = useCharts()

onMounted(() => {
    echar()
})
function echar(): void {
    var myChart = echarts.init((document.getElementById('main') as HTMLElement));
    // 绘制图表
    myChart.setOption((charts as any).option);
}


</script>

<style scoped>
#main {
    width: 100%;
    height: 100%;
}
</style>