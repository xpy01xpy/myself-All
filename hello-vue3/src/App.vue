<!--
 * @Author: xpy
 * @Description: 布局
 * @Date: 2021-06-08 19:21:10
 * @LastEditTime: 2021-06-09 15:47:44
-->
<template>
  <div class="app-warpper">
    <page-headers></page-headers>
  </div>
</template>

<script>
import pageHeaders from './components/page-headers'
export default {
  name: 'App',
  components: {
    "page-headers":pageHeaders,
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 13.5rem;
}
.app-warpper{
  font-size: 1rem;
  border: 1px solid red;
  height: 100%;
}
</style>
