<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false"
    >
      <li v-for="data in datalist" :key="data.filmId">
        <div class="movie" @click="detailMovie(data.filmId)">
          <img :src="data.poster" />
          <div>
            <p>{{data.name}}</p>主演：
            <span v-for="(dat,ind) in data.actors" :key="ind">{{dat.name}}</span>
          </div>
        </div>
        <button>购票</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { Indicator } from 'mint-ui'
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      number: 1,
      total: null
    }
  },
  mounted () {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    axios({
      url:
        `https://m.maizuo.com/gateway?cityId=${localStorage.getItem('city_id')}&pageNum=1&pageSize=10&type=1&k=9248470`,
      method: 'get',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15764864065394478923794"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data)
      this.datalist = res.data.data.films
      // console.log(res.data.data.total)
      this.total = res.data.data.total
      // console.log(this.datalist, this.total, 3)
      Indicator.close()
    })
  },
  methods: {
    detailMovie (id) {
      this.$router.push(`/detail/${id}`)
    },
    loadMore () {
      this.number++
      this.loading = true
      // console.log(this.datalist.length, this.total, 1)
      if (this.datalist.length === this.total) {
        return
      }
      // console.log(2)
      axios({
        url:
          `https://m.maizuo.com/gateway?cityId=${localStorage.getItem('city_id')}&pageNum=${this.number}&pageSize=10&type=1&k=6596090`,

        method: 'get',
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15764864065394478923794"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data)
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
  width: 100%;
  li {
    width: 100%;
    display: flex;
    // flex-direction: row;
    justify-content: space-between;
    height: 100px;
    padding: 10px 0;
    .movie {
      display: flex;
      flex-direction: row;
      flex: 2;
      img {
        width: 66px;
      }
      p {
      }
    }
    button {
      width: 50px;
      height: 30px;
      // ali-self:center;
      align-self: center;
    }
  }
}
</style>
