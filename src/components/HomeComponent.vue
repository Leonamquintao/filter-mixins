<template>
  <div class="home">

    <h1>Filter & Mixins</h1>
    <p>filter register locally => {{ text | toUppercase }}</p>
    <p>filter register globally => {{ msg | toLowercase }}</p>
    <hr>
    <input type="text" v-model="filterText">

    <ul>
      <li v-for="quality in filteredQualities">{{ quality }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'this is a awesome day!',
      msg: 'BUT UNFORTUNATELY IS ENDING!',
      qualities: ['hot', 'cold', 'dark', 'clear', 'warm', 'cloudy'],
      filterText: ''
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    filteredQualities() {
      return this.qualities.filter((ql) => {
        return ql.match(this.filterText);
      })
    }
  }
}
</script>

<style scoped>
  .home {
    width: 600px;
    height: auto;
    margin: auto;
  }
  .home h1{
    text-align: center;
  }

</style>
