<template>
  <div>
    <ul>
      <router-link to="/movie" tag="li" activeClass="red">电影</router-link>
      <router-link to="/cinema" tag="li" activeClass="red">电影院</router-link>
      <router-link to="/center" tag="li" activeClass="red">个人中心</router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
ul {
  width: 100%;
  height: 50px;
  list-style: none;
  position: fixed;
  bottom: 0;
  background: white;
  display: flex;
  justify-content: space-around;
  line-height: 50px;
  border-top: 1px solid #f6f6f6;
  z-index: 100;
  li {
    cursor: pointer;
  }
}
.red {
  color: red;
}
</style>
