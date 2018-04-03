<template>
  <div>

    <div class="row">

      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h2>Animations</h2>
        <hr>
        <button class="btn btn-primary" @click="show = !show">&nbsp;&nbsp;Info&nbsp;&nbsp;</button>
        <button class="btn btn-success" @click="showSuccess = !showSuccess">Sucess</button>
        <button class="btn btn-danger" @click="showSlide = !showSlide">Danger</button>
        <br><br>

        <transition name="fade" mode="out-in">
          <div class="alert alert-info" v-if="show"> this is some info</div>
        </transition>

        <transition name="roll" mode="out-in">
          <div class="alert alert-success" v-if="showSuccess"> this is some Success</div>
        </transition>

        <transition name="slide" mode="out-in">
          <div class="alert alert-danger" v-if="showSlide"> this is some Danger</div>
        </transition>

      </div>

    </div>

  </div>
</template>

<script>
  export default {

    data () {
      return {
        show: false,
        showSlide: false,
        showSuccess: false,
      }
    }

  }
</script>

<style scoped>
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

  /*  */
  .roll-enter {
    opacity: 0;
  }
  .roll-enter-active {
    animation: roll-in 1s ease-out forwards;
    transition: opacity .5s;
  }
  .roll-leave {
    /*  no inital state */
  }
  .roll-leave-active {
    animation: roll-out 1s ease-out forwards;
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

  @keyframes roll-in {
    from {
      transform: translateX(20px);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes roll-out {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(20px);
    }
  }

</style>
