<template>
  <div>
    <mt-index-list>
      <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
        <mt-cell :title="item.name" v-for="item in data.list" :key="item.cityId" @click.native="changeCity(item.cityId,item.name)"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    Axios({
      url: 'https://m.maizuo.com/gateway?k=3799959',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15764864065394478923794","bc":"610900"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      this.datalist = this.getCity(res.data.data.cities)
    })
  },
  methods: {
    changeCity (id, name) {
      localStorage.setItem('city_id', id)
      localStorage.setItem('city_name', name)
      this.$router.go(-1)
    },
    getCity (data) {
      var zimuList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      var citylist = []
      for (let i = 0; i < zimuList.length; i++) {
        var list = data.filter(res => res.pinyin.substring(0, 1) === zimuList[i].toLowerCase())
        if (list.length > 0) {
          citylist.push({
            index: zimuList[i],
            list
          })
        }
      }
      return citylist
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
