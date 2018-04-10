<template>
  <div id="app">
    <h1> EIV </h1>
    <h4> emotions in view </h4>
    <emotion-input></emotion-input>
  </div>
</template>

<script>
import EmotionInput from './components/EmotionInput'

export default {
  name: 'app',
  components: {
    EmotionInput
  }
}
</script>

<style>
</style>
