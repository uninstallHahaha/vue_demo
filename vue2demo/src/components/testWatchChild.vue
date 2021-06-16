<template>
<div>
    this is test watch child and get age = {{this.age}}
    <button @click="getReady">click to tell parent</button>
</div>
  
</template>

<script>
export default {
    props:{
        age: Number
    },
    methods:{
        getReady(){
            this.$emit('state-change')
        }
    },
    watch:{
        age(newVal, oldVal){
            console.log('get age changed! val is : ' + newVal)
            if (newVal==2)
            console.log('get age == 2!!!')
        }
    }
}
</script>

<style>

</style>