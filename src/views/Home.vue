<template>
  <div class="home">
    <Intro v-on:clicked="isIntro = false" v-if="isIntro"></Intro>
    <div v-else>
      asdf
      <Controller></Controller>
    </div>
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
import Controller from '@/components/Controller.vue'

export default {
  name: 'home',
  components: {
    Intro,
    Controller
  },
  data () {
    return {
      isIntro: true
    }
  }
}
</script>
