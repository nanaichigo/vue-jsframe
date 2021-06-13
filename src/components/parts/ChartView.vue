<template>
  <div>
      {{title}}
      <bar-chart :graphData="graphData" :graphOptions="graphOptions" :style=myStyles @graphclick="graphClick" />
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
        graphOptions:Object,
        width:Number,
        height:Number
    },
    methods:{
        graphClick(params){
            //そのまま流す
            this.$emit("graphclick", params);
        }
    },
    computed:{
        myStyles(){
            return {
                height: `${this.height}px`,
                width: `${this.width}px`,
                position: "relative"
            }
        }
    }
}
</script>

<style>

</style>