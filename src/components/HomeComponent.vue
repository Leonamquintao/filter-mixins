<template>
  <div class="home">
    <div class="container">

      <h1>Filter, Mixins and Animations</h1>

      <div class="row">

        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h2>Animations</h2>
          <hr>
          <button class="btn btn-primary" @click="show = !show">Show Alert</button>
          <button class="btn btn-danger" @click="showSlide = !showSlide">Show Danger</button>
          <br><br>

          <transition name="fade">
            <div class="alert alert-info" v-if="show"> this is some info</div>
          </transition>

          <transition name="slide">
            <div class="alert alert-danger" v-if="showSlide"> this is some Danger</div>
          </transition>

        </div>

      </div>

      <p>filter register locally => {{ text | toUppercase }}</p>
      <p>filter register globally => {{ msg | toLowercase }}</p>

      <hr>

      <input type="text" v-model="filterText">

      <ul>
        <li v-for="quality in filteredQualities">{{ quality }}</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      showSlide: false,
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

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave {

  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }
  .slide-leave {
    /*  no inital state */
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }

</style>
