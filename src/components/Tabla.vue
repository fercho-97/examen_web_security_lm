<template>
  <div class="container">
    <table class="mi-tabla-estilizada">
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Cedula</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="estudiante in recibo" :key="estudiante.id">
          <td>{{ estudiante.id }}</td>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td>{{ estudiante.cedula }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Tabla",

  data() {
    return {
      data: [],
    };
  },
  props: {
    recibo: {
      type: Array,
      required: true,
    }
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mi-tabla-estilizada {
  width: 600px;
  height: 700px;
  border-collapse: collapse;
  margin-top: 20px;
}

.mi-tabla-estilizada th,
.mi-tabla-estilizada td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.mi-tabla-estilizada th {
  background-color: #f2f2f2;
}

.mi-tabla-estilizada tr:hover {
  background-color: #f5f5f5;
}
</style>