<template>
  <div>
    <h3 v-if="isTop">电影</h3>
    <ul>
      <router-link to="/movie/nowmovie" tag="li" activeClass="yes">正在上映</router-link>
      <router-link to="/movie/comingsoon" tag="li" activeClass="yes">即将上映</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['isTop']
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
ul {
  height: 50px;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  li {
    text-align: center;
    width: 50%;
    padding: 10px;
    cursor: pointer;
  }
}
.yes{
  border-bottom: 1px solid orange;
  color: orange;
}
.movietop{
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
}
h3{
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-weight: normal;
}
</style>
