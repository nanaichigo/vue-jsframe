<template>
  <div>
  <button @click="addClick">Add</button>
  {{clickLog}}
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
            clickLog:[]
        }
    },
    methods:{
        addClick(){
            const vuethis = this;
            const frameID = "frame_" + Object.keys(this.frameList).length;
            const frameRouter = this.$router.resolve({
                name: 'Framepage',
                props:{
                    frameId:"123",
                    mainControl:vuethis
                }
            })
            const frame = this.jsFrame.create({
                title: 'Window' + frameID,
                left: 20, top: 20, width: 320, height: 220,
                movable: true,//Enable to be moved by mouse
                resizable: true,//Enable to be resized by mouse
            });
            const frameEvent = this.frameEventlistener.bind(this);
            frame.setUrl(frameRouter.href).then(function(){
                frame.show();
                console.log(frame.getFrameView())
                frame.getIfDocument().getElementById("create").addEventListener("click", function(){
                        console.log("click")
                        frameEvent(frame);
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
            console.log(params);
            this.clickLog.push(params)
        }
    }
}
</script>

<style>

</style>