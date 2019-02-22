<template>
  <div id="app">
    <!-- <router-link to="/waitingroom">List Room</router-link> -->
    <router-view/>
    <audio controls autoplay style="display:none">
      <source src="https://www.dl-sounds.com/wp-content/uploads/edd/2018/10/Melody-in-F-preview.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
