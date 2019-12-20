<template>
  <div v-if="detailList">
    <img :src="detailList.poster" class="detailimg" />
    <h2>{{detailList.name}}</h2>
    <p>{{detailList.category}}</p>
    <p>{{detailList.nation}} | {{detailList.runtime}}分钟</p>
    <p>{{detailList.synopsis}}</p>
    <swiper
      :banner="{
      loop: false,
      pagination: {},
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      }"
      class="actorsName"
      swipername="actorsName"
    >
      <div class="actors swiper-slide" v-for="(data,index) in detailList.actors" :key="index">
        <img :src="data.avatarAddress" alt />
        <p>{{data.name}}</p>
        <p>{{data.role}}</p>
      </div>
    </swiper>
    <swiper
      :banner="{
      loop: false,
      pagination: {},
      slidesPerView: 2,
      spaceBetween: 20,
      freeMode: true,
      }"
      class="moviePhoto"
      swipername="moviePhoto"
    >
      <div class="photos swiper-slide" v-for="(data,index) in detailList.photos" :key="index">
        <img :src="data" alt />
      </div>
    </swiper>
  </div>
</template>

<script>
import Axios from 'axios'
import swiper from '@/components/swiper'
export default {
  data () {
    return {
      movieId: '',
      detailList: null
    }
  },
  components: {
    swiper
  },
  beforeMount () {
    // this.$store.state.isShow = false
    this.$store.commit('hide')
  },
  beforeDestroy () {
    // this.$store.state.isShow = true
    this.$store.commit('show')
  },
  mounted () {
    // console.log(this.$route)
    this.movieId = this.$route.params.movieid
    Axios({
      url:
        'https://m.maizuo.com/gateway?filmId=' +
        this.$route.params.movieid +
        '&k=8347177',
      method: 'get',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15764864065394478923794","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      // console.log(res.data)
      this.detailList = res.data.data.film
    })
  }
}
</script>

<style scoped lang="scss">
.detailimg {
  // height: 300px;
  width: 100%;
  display: block;
}
.photos {
  img {
    width: 150px;
  }
}
</style>
