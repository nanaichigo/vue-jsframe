<script>
import {Bar} from "vue-chartjs";
export default {
    extends: Bar,
    name: 'chart',
    props:{
        title:String,
        graphData:Object,
        graphOptions:Object,
        id:String
    },
    data () {
        return {
        data: {},
        options: {},
        };
    },
    mounted(){
        this.data = this.graphData;
        this.data["vuethis"] = this;
        this.options = this.graphOptions;
        this.options["onClick"] = this.handleChartClick
        this.renderChart(this.data, this.options)
    },
    methods: {
        handleChartClick(evt) {
            var chart = this.$data._chart;
            const chartIndex = chart.getElementAtEvent(evt);
            if (chartIndex.length !== 0) {
                const datasetIndex = chartIndex[0]._datasetIndex;
                const position = chartIndex[0]._index;
                const info = {
                    datasetIndex: datasetIndex,
                    valueIndex: position,
                    label: chart.tooltip._data.labels[position],
                    datasetIndexLabel: chart.tooltip._data.datasets[datasetIndex].label
                };
                chart.data.vuethis.$emit("graphclick", info);

                const event = new CustomEvent("graphClick", {detail: info});
                console.log(this.$el);
                document.getElementById("bar-chart").dispatchEvent(event);
        }
    }
    }
}
</script>