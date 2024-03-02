<template>
  <div>
    <router-link v-for="elemento in elementos" :key="elemento.id" :to="elemento.ruta">
      {{ elemento.text }}
    </router-link>
  </div>
</template>

<script>
export default {
    props:{
        elementos:{
            type: Array,
            required: true,
        },
    },

}
</script>

<style>
div a {
  color: #2c3e50;
  margin: 0px 10px;
  font-weight: bold;
  border: solid 1px;
  padding: 10px 10px;
  border-radius: 12px;
  background-color: aqua;
}

.router-link-exact-active{

background-color: azure;
}
</style>