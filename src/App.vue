<template>
  <div id="app">
  	<transition name="fade" mode="out-in" :duration="{ enter: 500, leave: 300 }">
	  	<router-view/>
	  </transition>
  </div>
</template>
<style>
body{margin: 0;padding: 0}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #303133;
}
</style>
