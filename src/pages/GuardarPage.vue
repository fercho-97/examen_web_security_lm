<template>
 

  <div>
    <Ingreso @guardartabla="cargartabla($event)" />
    <Tabla :recibo="valores" />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Ingreso from "../components/Ingreso.vue";
import Tabla from "../components/Tabla.vue";

export default {
  components: {
    NavBar,
    Ingreso,
    Tabla,
  },
  data() {
    return {
      valores: [],
      barranavegacion: [{ id: 1, text: "Generar Token", ruta: "/generar" }],
    
    };
  },

  methods: {
    async cargartabla(datorecibido) {

    const valorToken= datorecibido.tk;
      this.valores = await mostrarEstudianteFachada(valorToken);
      const last = this.valores[this.valores.length - 1];
      console.log();
      datorecibido.info.id = last.id + 1;
      console.log(datorecibido);
      this.valores.push(datorecibido);
      console.log("actulziar tabla");
    },
  },
};
</script>

<style>
</style>
