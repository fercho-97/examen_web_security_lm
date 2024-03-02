<template>
  <div>
    <h1>Token</h1>

    <div>
      <div>
        <label for="">Semilla</label>
        <input type="text" v-model="valSemilla" />
      </div>

      <div>
        <label for="">Tiempo de vigencia</label>
        <input type="number" v-model="valTiempo" />
      </div>

      <div>
        <label for="">Token</label>
        <p> {{token}} </p>
      </div>

      <button @click="generar">Generar</button>
    </div>
  </div>
</template>

<script>
import { obtenerTokenFachada } from "../helpers/clienteToken";

export default {
  name: "GenerarTokenPage",
  data() {
    return {
      nombre: "juan",
      password: "456",
      valSemilla: null,
      valTiempo: null,
      token: null,
    };
  },
  methods: {
    async generar() {
      const token = await obtenerTokenFachada(this.usuario);
      this.token = token;
    },
  },
};
</script>

<style>
</style>