<template>
  <div>
      {{title}}
      <bar-chart :graphData="graphData" :graphOptions="graphOptions" @graphclick="graphClick" />
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
    },
    methods:{
        graphClick(params){
            //そのまま流す
            this.$emit("graphclick", params);
        }
    }
}
</script>

<style>

</style>