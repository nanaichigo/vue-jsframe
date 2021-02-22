<script>
import {Bar} from "vue-chartjs";
export default {
    extends: Bar,
    name: 'chart',
    props:{
        title:String,
        graphData:Object,
        graphOptions:Object
    },
    data () {
        return {
        data: {},
        options: {}
        };
    },
    mounted(){
        this.data = this.graphData;
        this.options = this.graphOptions;
        this.renderChart(this.data, this.options)
    }
}
</script>