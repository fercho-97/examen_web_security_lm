<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png"> -->
<div>

<NavBar :elementos="barranavegacion"/>
   <router-view/>
</div>
  
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data(){

    return{

      barranavegacion:[
        {id:1, text:'Generar Token', ruta:'/generar'},
        {id:2, text:'Guardar Estudiante', ruta:'/estudiante'},
  
      ],

    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
