<template>
  <div style="background-color: #00C180;padding: 20px;color:white">
    <h1>Input (VueJS)</h1>
    <input type="text" @keyup.enter="onAdd" v-model="text">
    <button @click="onAdd">Add</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      text: ''
    }
  },
  methods: {
    onAdd: function () {
      window._state.add(this.text)
      this.text = ''
    }
  }
}
</script>
