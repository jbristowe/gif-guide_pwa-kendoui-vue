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
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,700i');
body {
  background-image: url('https://bit.ly/2qcNnVs');
  font-family: 'Josefin Sans', sans-serif;
  margin: 0;
  padding: 1em;
}

h1 {
  font-weight: 700; 
  font-size: 2.8em;
  letter-spacing: 12px;
  margin: 0;
}

h2, h4 {
  font-weight: 300;
}

h4 {
  letter-spacing: -1px;
  margin-top: 0;
}
</style>
