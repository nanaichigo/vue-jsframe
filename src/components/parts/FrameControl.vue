<template>
  <div>
  {{clickLog}}
  <textarea v-model="messeage"></textarea>
  </div>
</template>

<script>
import { JSFrame } from 'jsframe.js';
//import Framepage from '@/components/pages/Framepage'

export default {
    // components:{
    //     /* eslint vue/no-unused-components: 0*/
    //     "frame-page": Framepage
    // },
    data(){
        return{
            jsFrame: new JSFrame(),
            frameList:{},
            clickLog:[],
            messeage:""
        }
    },
    mounted(){
        this.addClick("");
    },
    watch:{
        messeage(){
            // 子に通知
            console.log(this.messeage)

            const data = {
                messeage:this.messeage
            }
            this.sendMesseage(data);
        }
    },
    methods:{
        addClick(messeage){
            const frameID = "frame_" + Object.keys(this.frameList).length;
            const frameRouter = this.$router.resolve({
                name: 'Framepage',
                query:{
                    frameId:frameID,
                    title:"test",
                    messeage:JSON.stringify(messeage)
                }
            })
            const frame = this.jsFrame.create({
                title: frameID,
                left: 20, top: 20, width: 450, height: 500,
                movable: true,//Enable to be moved by mouse
                resizable: true,//Enable to be resized by mouse
            });
            const frameEvent = this.graphClickEvent.bind(this);
            frame.setUrl(frameRouter.href).then(function(){
                frame.show();
                console.log(frame.getFrameView())
                frame.getIfDocument().getElementById(frameID).addEventListener("graphClick", function(param){
                        console.log("click")
                        frameEvent(param);
                    })
            });
            
            this.frameList[frameID] = frame;

        },
        frameEventlistener(frame){
            const graphClick = this.graphClickEvent.bind(this);
            console.log("eventListen")
            frame.getIfDocument().getElementById("bar-chart").addEventListener("graphClick", function(params){
                console.log(params);
                graphClick(params.detail);
            })

        },
        graphClickEvent(params){
            console.log("GraphClickEvent");
            console.log(params.detail);
            this.clickLog.push(params.detail)
            this.addClick(params.detail);
        },
        sendMesseage(data){
            for(const frame in this.frameList){
                const element = this.frameList[frame].getIfDocument().getElementById("title");
                const event = new CustomEvent("change", {detail: data});
                element.dispatchEvent(event);
            }
        }
    }
}
</script>

<style>

</style>