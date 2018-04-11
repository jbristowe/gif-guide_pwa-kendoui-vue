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
      emotionDate: new Date(),
      minDate: new Date(2017, 1, 1),
      maxDate: new Date(),
      emotionArray: [
        '😃', '😢', '🤣', '😡'
      ],
      emotionSelected: '😃',
      happyFeels: 0,
      sadFeels: 0,
      funnyFeels: 0,
      angryFeels: 0,
      tooltip: { visible: true, template: '#= value # days' }
    }
  },
  methods: {
    addEmotion () {
      switch (this.emotionSelected) {
        case '😃':
          this.happyFeels++
          break
        case '😢':
          this.sadFeels++
          break
        case '🤣':
          this.funnyFeels++
          break
        case '😡':
          this.angryFeels++
          break
        default:
          console.log('No feels felt 😶')
      }
    }
  },
  computed: {
    series: function () {
      return [{
        data: [{
          category: '😃',
          value: this.happyFeels,
          color: '#BCFF3A'
        }, {
          category: '😢',
          value: this.sadFeels,
          color: '#5A9CE8'
        }, {
          category: '🤣',
          value: this.funnyFeels,
          color: '#E8DC36'
        }, {
          category: '😡',
          value: this.angryFeels,
          color: '#FF3938'
        }, {
        }]
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
