<template>
  <div :id=frameNo :ref=frameNo>
      <div id="title" @change="messeage_change">{{title}}</div>
      {{messeage}}
      <textbox-view :originText=messeage @edit="editMesseage" v-if="!isshow"/>
      <chart-view :title=messeage :graphData="data" :graphOptions="options" @graphclick="graphClick" :width=width :height=height v-else />
      <button id="create" @click="change">Change</button>
  </div>
</template>

<script>
import TextboxView from '@/components/parts/TextboxView';
import ChartView from '@/components/parts/ChartView';
export default {
    name:"Framepage",
    components:{
        "textbox-view":TextboxView,
        "chart-view": ChartView
    },
    data(){
        return{
            isshow: false,
            messeage:"",
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                {
                    label: 'Bar Dataset',
                    data: [10, 20, 30, 40, 50, 30],
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Line Dataset',
                    data: [10, 50, 20, 30, 30, 40],
                    borderColor: '#CFD8DC',
                    fill: false,
                    type: 'line',
                    lineTension: 0.3,
                }
                ]
            },
            options: {
                scales: {
                xAxes: [{
                    scaleLabel: {
                    display: true,
                    labelString: 'Month'
                    }
                }],
                yAxes: [{
                    ticks: {
                    beginAtZero: true,
                    stepSize: 10,
                    }
                }]
                },
            },
            vuethis:{},
            title:"",
            frameNo:"",
        }
    },
    mounted(){
        this.title = this.$route.query.title;
        this.frameNo = this.$route.query.frameId;
        this.messeage = this.$route.query.messeage;
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy: function () {
        window.removeEventListener('resize', this.handleResize)
    },
    methods:{
        change(){
            this.isshow = !this.isshow;
        },
        editMesseage(params){
            this.messeage = params;
        },
        graphClick(params){
            //そのまま流す
            console.log(params)
            // this.$emit("graphclick", params);

            const event = new CustomEvent("graphClick", {detail: params});
            console.log(this.$el);
            document.getElementById(this.frameNo).dispatchEvent(event);
        },
        messeage_change(event){
            this.title = event.detail.messeage;
        },
        handleResize() {
            this.width = window.innerWidth * 0.8;
            this.height = window.innerHeight * 0.8;
            this.messeage = `${this.width}, ${this.height}`
        }
    }
}
</script>

<style>

</style>