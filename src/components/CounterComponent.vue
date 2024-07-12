<template>
  <div>
    <!-- Título que muestra el valor del contador -->
    <h1>Counter: {{ counter }}</h1>
    <!-- Botón para incrementar el contador, llama al método 'increment' al hacer clic -->
    <button @click="increment">Incrementar</button>
    <!-- Botón para decrementar el contador, llama al método 'decrement' al hacer clic -->
    <button @click="decrement">Decrementar</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    // Mapea el getter 'counter' desde Vuex a la propiedad computada 'counter'
    ...mapGetters(["counter"]),
  },
  methods: {
    // Mapea las acciones 'increment' y 'decrement' desde Vuex a los métodos del componente
    ...mapActions(["increment", "decrement"]),
  },
};
</script>

<style scoped>
/* Estilo para los botones, añade un margen de 5px alrededor de cada botón */
button {
  margin: 5px;
}
</style>
