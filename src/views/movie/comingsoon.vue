<template>
  <div>
    <ul>
      <li v-for="data in $store.state.comingList" :key="data.filmId" >
        <div class="movie" >
          <img :src="data.poster" />
          <div>
            <p>{{data.name}}</p>
            主演：<span v-for="(dat,ind) in data.actors" :key="ind">
                {{dat.name}}
            </span>
          </div>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    if (this.$store.state.comingList.length === 0) {
      this.$store.dispatch('getcomingList')
    }
    // axios({
    //   url:
    //     'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=3392735',
    //   method: 'get',
    //   headers: {
    //     'X-Client-Info':
    //       '{"a":"3000","ch":"1002","v":"5.0.4","e":"15764864065394478923794"}',
    //     'X-Host': 'mall.film-ticket.film.list'
    //   }
    // }).then(res => {
    //   console.log(res.data)
    //   this.datalist = res.data.data.films
    // })
  }
}
</script>

<style lang="scss" scoped>

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
      flex:2;
      img {
        width: 66px;
      }
      p {
      }
    }
  }
}
</style>
