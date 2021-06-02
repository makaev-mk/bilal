<template>
  <div class="mt-3">
    <div class="row">
      <div class="col-6">
        <select class="form-control" v-model="selected">
          <option value="0.045">5/15/6</option>
          <option value="0.063">7/15/6</option>
          <option value="0.036">5/12/6</option>
          <option value="0.03">5/10/6</option>
          <option value="0.0225">15/2.5/6</option>
          <option value="0.018">12/2.5/6</option>
          <option value="0.015">10/2.5/6</option>
          <option value="0.030">15/5/4</option>
          <option value="0.0240">12/5/4</option>
          <option value="0.02">10/5/4</option>
          <option value="0.015">15/2.5/4</option>
          <option value="0.012">12/2.5/4</option>
          <option value="0.01">10/2.5/4</option>
        </select>
      </div>
      <div class="col-6">
        <input class="form-control" @input="$emit('sum', selected * count)" v-model="count" type="number" >
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="sum mt-2" v-if="selected * count"><b>Кубатура: {{ (selected * count).toFixed(4)}}</b></div>
      </div>
      <div class="col-6">
        <div class="sum mt-2" v-if="summa"><b>Сумма: {{ summa }}</b></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['summa'],
  emits: ['sum'],
  data() {
    return {
      selected: '0.03',
      sum: 0,
      count: 0,
      volume: 0
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
