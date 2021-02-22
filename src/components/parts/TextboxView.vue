<template>
    <div>
  <input v-model="messeage" />
  {{messeage}}
  </div>
</template>

<script>
export default {
    props:{
        originText: String
    },
    data(){
        return{
            messeage:""
        }
    },
    mounted() {
        this.messeage = this.originText;
    },
    watch:{
        messeage(newValue){
            this.$emit("edit", newValue)
        }
    }
}
</script>

<style>

</style>