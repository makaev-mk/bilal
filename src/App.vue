<template>
  <div class="main" style="overflow-x: hidden; overflow-y: hidden;">
    <div class="header">
      <a href="#">Второй сорт</a>
    </div>
    <div class="content">
      <div class="row mt-3">
        <div class="col-6">
          <h4>Текущий курс:</h4>
        </div>
        <div class="col-6">
          <input class="form-control" v-model="price" type="number">
        </div>
      </div>
      <h6 class="mt-3">Выберите тип дерева</h6>
<!--      <component-->
<!--          v-for="(component, index) in components"-->
<!--          :key="index"-->
<!--          :is="component"-->
<!--          @sum="itog"-->
<!--          :summa="sum"-->
<!--          :itog="submitItog"-->
<!--      />-->
      <AppForm @sum="summaCount" :summa="sum"/>
      <AppForm @sum="summaCount2" :summa="sum2"/>
<!--      <div class="added mt-2">-->
<!--        <button class="btn_added" @click="addedForm">+добавить</button>-->
<!--      </div>-->
      <div class="row mt-3">
        <div class="col-6"><h4>Итог:</h4></div>
        <div class="col-6">
          <input class="form-control" type="number" v-model="sumCount">
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import AppForm from './components/AppForm'
export default {
  data() {
    return {
      price: 1600,
      sum2:0,
      selected: '0.03',
      sum: 0,
      components: [AppForm],
      sumCount: this.sum + this.sum2
    }
  },
  methods: {
    addedForm() {
      this.components.push(AppForm)
    },
    itog(data) {
      this.sumCount += data
    },
    summaCount(data) {
      this.sum = this.price * data
    },
    summaCount2(data) {
      this.sum2 = this.price * data
      this.sumCount = this.sum + this.sum2
    }
  },
  components: {AppForm}
}
</script>

<style>
.btn_added {
  border: none;
  font-weight: bold;
  background: #42b983;
  color: #ffffff;
  width: 100px;
  border-radius: 5px;
}

.btn_added:focus {
  background: #13653f;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background: #42b983;
}
.content {
  margin: 0 15px;
}
a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}

.main {
  width: 767px;
  max-width: 767px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
