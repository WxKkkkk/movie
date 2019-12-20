<template>
  <div>
    <router-view></router-view>

    <footBar v-if="$store.state.isShow"></footBar>
    <!-- <child></child> -->
  </div>
</template>

<script>
// import child from '@/components/child'
import footBar from '@/components/footBar'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    footBar
    // child
  }
}
</script>

<style lang="scss" scoped>
  *{
    margin-bottom: 50px;
  }
</style>
