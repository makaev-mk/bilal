<template>
  <div class="row mt-3">
    <div class="col-6">
      <h4>Текущий курс:</h4>
    </div>
    <div class="col-6">
      <input class="form-control" @input="AddPrice" v-model="loadPeople" type="number">
      <button @click="addFirebase">add</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: store.state.price
    }
  },
  methods: {
    AddPrice() {
      store.commit('addedPrice', this.price)
      console.log(this.price)
    },
    async addFirebase() {
      const person = await fetch('https://bilal-aeaf0-default-rtdb.firebaseio.com/price.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.price)
      })

      const firebaseData = await person.json()

      console.log(firebaseData)
    },
    async loadPeople() {
      try {
        const {data} = await axios.get('https://bilal-aeaf0-default-rtdb.firebaseio.com/price.json')
        this.people = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]
          }
        })
      } catch (e) {
      }
    }
  }
}
</script>

<style scoped>

</style>
