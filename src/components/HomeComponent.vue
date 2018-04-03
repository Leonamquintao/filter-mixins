<template>
  <div class="home">
    <div class="container">

      <h1>Filter, Mixins and Animations</h1>

      <h2>Filters</h2>

      <hr>

      <p>Filter register locally: {{ text | toUppercase }}</p>
      <p>Filter register globally: {{ msg | toLowercase }}</p>

      <hr>

      <input class="form-control" type="text" v-model="filterText" placeholder="type something...">

      <ul class="list-itens">
        <li v-for="quality in filteredQualities">{{ quality }}</li>
      </ul>

      <animation-component></animation-component>
      <hr>
      <animated-list-component></animated-list-component>

    </div>

  </div>
</template>

<script>

  import AnimationComponent from './AnimationComponent.vue';
  import AnimatedListComponent from './AnimatedListComponent.vue';

  export default {
    components: {
      AnimationComponent: AnimationComponent,
      AnimatedListComponent: AnimatedListComponent
    },
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
    padding-bottom: 20px;
  }

  .list-itens {
    margin-top: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    border: 1px solid #c0c0c0;
    border-radius: 25px;
    background-color: #d4d8dd;
  }

</style>
