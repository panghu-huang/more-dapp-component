<template>
  <svg class="circular" viewBox="25 25 50 50">
    <circle class="path" cx="50" cy="50" :r="radius" fill="none"
            stroke-width="2" stroke-miterlimit="10"></circle>
  </svg>
</template>

<script>
  export default {
    name: 'LoadingCircle',
    props: {
      radius: {
        type: Number,
        default: 20
      }
    }
  }
</script>

<style lang="stylus">
  .circular {
    animation: rotate 2s linear infinite;
    height: 0.4rem;
    transform-origin: center center;
    width: 0.4rem;
    display: inline-block;
    vertical-align: center;
    margin-right 0.12rem
  }

  .path {
    stroke #ffffff
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -0.35rem;
    }

    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -1.24rem;
    }
  }
</style>