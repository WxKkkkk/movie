<template>
  <div>
    我要杀了你
    <ul>
      <li v-for="data in datalist" :key="data.id">
          <p>{{data.nm}}</p>
          <img :src="data.img | imgpath"/>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    show: Boolean
  },
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=A74BCCB01BD811EA879031B6E6FCCEE3E0782AE7375B40B6A6E5DA43B935F10D&optimus_risk_level=71&optimus_code=10').then(res => {
      this.datalist = res.data.movieList
    })
  },
  filters: {
    imgpath: function (url) {
      return url.replace('w.h', '128.180')
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
  li {
    padding: 20px;
  }
}
</style>
