<template>
  <div>
      {{title}}
      <bar-chart :graphData="graphData" :graphOptions="graphOptions" />
  </div>
</template>

<script>
import BarChart from './BarChart.vue';
export default {
    components: { 
        "bar-chart": BarChart
    },
    props:{
        title:String,
        graphData:Object,
        graphOptions:Object
    }
}
</script>

<style>

</style>