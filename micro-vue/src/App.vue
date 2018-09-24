<template>
  <div id="app">
   sdasdas {{msg}}
    <react-comp title="dasdsa"></react-comp>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data : function(){
    return {
      msg : this.$parent.message
    }
  },
  props: ['message'],
  updated: function(){
    window.console.log(55555,this.$parent.message)
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
