<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Character</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica&display=swap');
#app {
  font-family: 'IM Fell DW Pica', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222431;
  margin: 0 10%;
  border:1px solid #ccc!important;
  border-radius: 16px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
