<template>
  <div>
  <button @click="addClick">Add</button>
  <div :ref=id v-for="(frame, id) in frameList" :key=id @newEvent="TestEvent"/>
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
                url: frameRouter.href
            });

            frame.show();
            this.frameList[frameID] = frame;
        },
        TestEvent(param){
            console.log(param)
        }
    }
}
</script>

<style>

</style>