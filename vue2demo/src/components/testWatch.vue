<template>
  <div>
      <testWatchChild :age="this.count" @state-change="this.inreCount"/>
  </div>
</template>

<script>
import testWatchChild from './testWatchChild'

export default {
  data(){
    return {
      count: 0
    }
  },
  components:{testWatchChild},
  methods:{
    inreCount(){
      this.count++
    }
  }
}
</script>

<style>

</style>