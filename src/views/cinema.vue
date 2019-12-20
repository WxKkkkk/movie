<template>
  <div>
    <citybtn></citybtn>
    <h3>电影院</h3>
    <div class="cinemawxk" :style="{height:myheight}">
      <ul>
        <li v-for="data in cinemaList" :key="data.cinemaId">
          <p>{{data.name}}</p>
          <p>{{data.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Betterscroll from 'better-scroll'
import citybtn from '@/components/citybtn'
export default {
  components: {
    citybtn
  },
  data () {
    return {
      cinemaList: [],
      myheight: '0px'
    }
  },
  mounted () {
    this.myheight = window.innerHeight - 50 + 'px'
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${localStorage.getItem('city_id')}&ticketFlag=1&k=9630334`,
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15764864065394478923794","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.cinemaList = res.data.data.cinemas
      this.$nextTick(() => {
        new Betterscroll('.cinemawxk', {
          scrollbar: {
            fade: true,
            interactive: false // 1.8.0 新增
          }
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
h3 {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
  position: fixed;
  top: 0;
  background: white;
  z-index: 998;
}
.cinemawxk {
  position: relative;
  overflow: hidden;
  height: 300px;
}
ul {
  padding-top: 50px;
  list-style: none;

  li {
    height: 70px;
    width: 100%;
    border-bottom: 1px solid #f4f4f4;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>;
