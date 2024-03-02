<template>
  <h2>Estudiante</h2>
  <div>
    <div>
      <label for="">Token</label>
      <input type="text" v-model="valToken" />
    </div>

    <div>
      <label for="">Nombre</label>
      <input type="text" v-model="valNombre" />
    </div>

    <div>
      <label for="">Apellido</label>
      <input type="text" v-model="valApellido" />
    </div>

    <div>
      <label for="">Cédula</label>
      <input type="text" v-model="valCedula" />
    </div>

    <button @click="guardar" >Guardar</button>
  </div>

 
</template>

<script>
import {
  insertarEstudianteFachada,
  mostrarEstudianteFachada,
} from "../helpers/clienteEstudiante.js";

export default {
  name: "Ingreso",


  data() {
    return {
      valToken:null,
      valNombre: null,
      valApellido: null,
      valCedula: null,
      data: [],
    };
  },
  methods: {
  async guardar() {
    const body = {
      nombre: this.valNombre,
      apellido: this.valApellido,
      cedula: this.valCedula,
    };

    await insertarEstudianteFachada(body, this.valToken);
    
    this.valNombre = null;
    this.valApellido = null;
    this.valCedula = null;
    this.$emit("guardartabla", {info:body, tk: this.valToken});
  },
},
};
</script>

<style>
</style>