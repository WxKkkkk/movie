<template>
    <div>
        <div @click="changeCity" class="citybtn">
            {{city}}
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      city: localStorage.getItem('city_name'),
      id: localStorage.getItem('city_id')
    }
  },
  methods: {
    changeCity () {
      this.$router.push('/cities')
    }
  }
}
</script>

<style lang="scss" scoped>
    .citybtn{
        position: fixed;
        top: 15px;
        left: 10px;
        z-index: 999;
        width: 50px;
        height: 20px;
        border-radius: 50px;
        background: rgba($color: #000000, $alpha: .5);
        color:white;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        cursor: pointer;
    }
</style>
