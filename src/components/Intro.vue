<template>
  <div id="intro">
    <h1 id="intro-title"></h1>
    <div>
      <span id="intro-line-1"></span>
      <span id="intro-line-2"></span>
      <span id="intro-line-3"></span>
      <span id="intro-line-4"></span>
    </div>
    <div id="intro-join">
      <a @click="passEvent" id="intro-btn">truth</a>
    </div>
  </div>
</template>

<script>
import Typed from '@/assets/hangul-typed.min.js'

export default {
  name: 'Intro',
  methods: {
    passEvent () {
      this.$emit('clicked')
    }
  },
  mounted () {
    new HTyped('#intro-title', {
      strings: ['어..서.....와..', '어..서.....오..세..요.....'],
      typeSpeed: 150,
      backSpeed: 20,
      showCursor: false,
      loop: true
    }).start()

    new HTyped('#intro-line-1', {
      strings: ['kadfasdfasdfasd', 'kmkfdjkasdjkfja'],
      typeSpeed: 20,
      backSpeed: 40,
      shuffle: true,
      showCursor: false,
      loop: true
    }).start()

    new HTyped('#intro-line-2', {
      strings: ['kadfasdfasdfasd', 'kmkfdjkasdjkfja'],
      typeSpeed: 40,
      backSpeed: 20,
      shuffle: true,
      showCursor: false,
      loop: true
    }).start()

    new HTyped('#intro-line-3', {
      strings: ['kadfasdfasdfasd', 'kmkfdjkasdjkfja'],
      typeSpeed: 60,
      backSpeed: 40,
      shuffle: true,
      showCursor: false,
      loop: true
    }).start()

    new HTyped('#intro-line-4', {
      strings: ['kadfasdfasdfasd', 'kmkfdjkasdjkfja'],
      typeSpeed: 40,
      backSpeed: 80,
      shuffle: true,
      showCursor: false,
      loop: true
    }).start()
  }
}
</script>

<style scoped lang="scss">
  #intro {
    text-align: center;
    padding-top: 100px;

    span {
      height: 300px;
      font-size: 20px;
      writing-mode: vertical-lr;
      text-orientation: upright;
    }

    #intro-join {
      width: 100%;
      position: fixed;
      bottom: 100px;

      a {
        text-decoration: none;
        color: inherit;
        padding: 10px;
        border: 1px #fff solid;
      }
    }
  }
</style>
