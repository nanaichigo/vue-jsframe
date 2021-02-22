<template>
  <button @click="addClick">Add</button>
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
            frameList:[],
        }
    },
    methods:{
        addClick(){
            const frameRouter = this.$router.resolve({
                name: 'Framepage',
                params: {
                    data: encodeURIComponent()
                }
            })
            const frame = this.jsFrame.create({
                title: 'Window',
                left: 20, top: 20, width: 320, height: 220,
                movable: true,//Enable to be moved by mouse
                resizable: true,//Enable to be resized by mouse
                url: frameRouter.href
            });

            frame.show();
            this.frameList.push(frame);
        }
    }
}
</script>

<style>

</style>