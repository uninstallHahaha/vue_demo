<template>
  <div class="title">
      {{msg}}
  </div>
</template>

<script>
export default {
    //where is contain all attributes of this component
    data(){
        return {
            msg:'this the msg of App component'
        }
    }
}
</script>

<style>
.title{
    color: red;
}
</style>