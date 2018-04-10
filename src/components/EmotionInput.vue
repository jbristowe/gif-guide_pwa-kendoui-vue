<template>
  <div class="emotion-box">
    <div class="emotion-logging">
      <h2> What are you feeling? </h2>
      <kendo-datepicker
        v-model="emotionDate"
        :min="minDate"
        :max="maxDate"
        :value="emotionDate"
        :format="'MM/dd/yy'"
      >
      </kendo-datepicker>
      <kendo-dropdownlist
        v-model="emotionSelected"
        :data-source="emotionArray"
        :index="0"
      >
      </kendo-dropdownlist>
      <kendo-button @click='addEmotion'> Add Emotion </kendo-button>
    </div>
    <div class="emotion-graph">
      <kendo-chart
        :series-defaults-type="'pie'"
        :chart-area-background="''"
        :series="series"
        :tooltip="tooltip"
      >
      </kendo-chart>
    </div>
  </div>
</template>

<script>
export default {
  name: 'emotion-input',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
