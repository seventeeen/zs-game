<template>
  <div id="controller">
    <div class="wraper">
      {{ lat }}<br>{{ lng }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAOXb5myQKEWO5B2q-clngE80JRDgQcRJw'
let loc = ''
let lng = ''

axios.post(url).then((callback) => {
  loc = callback.data.location.lat
  lng = callback.data.location.lng
}).catch((err) => {
  console.log(err)
})

export default {
  name: 'Controller',
  mounted () {
  },
  data () {
    return {
      lat: loc,
      lng: lng
    }
  }
}
</script>

<style scoped lang="scss">
  /*variables*/
  $controller-height: 300px;
  $controller-margin: 8px;
  $controller-border-weight: 4px;

  #controller {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: $controller-height;

    .wraper {
      margin: $controller-margin;
      height: $controller-height - 2 * ($controller-margin + $controller-border-weight);
      border: $controller-border-weight double #fff;
    }
  }
</style>
