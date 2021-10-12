<template>
<div id="app">
    <div id="nav">
        <navbar />
    </div>
    <router-view />
</div>
</template>

<script>
import navbar from './components/navbar.vue'

export default {

    components: {
        navbar,
    },

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
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

.toasted{
    min-width: 350px;
    padding: 10px 15px !important;
    font-size: 22px !important;
    text-align: center ;
    font-weight: bold !important;
   box-shadow: 6px 6px 5px 4px rgba(0,0,0,0.47) !important;

}
</style>
