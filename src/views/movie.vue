<template>
  <div>
    <citybtn></citybtn>
    <swiper :key="bannarList.length" :banner="{
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    }" ref="movieswiper">
      <div class="swiper-slide" v-for="data in bannarList" :key="data.bannerId">
        <img :src="data.imgUrl" alt="">
      </div>
    </swiper>
    <movieBar :class="isTop? 'movietop' :''" :isTop="isTop"></movieBar>
    <router-view></router-view>
  </div>
</template>

<script>
import movieBar from '@/components/movieBar'
import swiper from '@/components/swiper'
import axios from 'axios'
import citybtn from '@/components/citybtn'
export default {
  data () {
    return {
      bannarList: [],
      isTop: false
    }
  },
  components: {
    movieBar,
    swiper,
    citybtn
  },
  mounted () {
    axios({
      url: `https://m.maizuo.com/gateway?type=2&cityId=${localStorage.getItem('city_id')}&k=2564021`,
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15764864065394478923794","bc":"110100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      // console.log(res.data)
      this.bannarList = res.data.data
    })
    window.onscroll = this.bodyScroll
  },
  beforeDestroy () {
    window.onscroll = null
  },
  methods: {
    bodyScroll () {
      // console.log(this.$refs.movieswiper.$el.offsetHeight)
      if ((document.documentElement.scrollTop || document.body.scrollTop) >=
          this.$refs.movieswiper.$el.offsetHeight) {
        // console.log('到了')
        this.isTop = true
      } else {
        // console.log('没有')
        this.isTop = false
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    if (localStorage.getItem('city_id')) {
      next()
    } else {
      next('/cities')
    }
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}

</style>
