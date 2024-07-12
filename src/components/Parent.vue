<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- Título del componente padre -->
    <h1>Parent Component</h1>
    <!-- Muestra el mensaje recibido del componente hijo -->
    <p>Received Message: {{ message }}</p>
    <!-- Incluye el componente hijo y escucha el evento 'sendMessage' -->
    <Child @sendMessage="receiveMessage" />
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  components: {
    // Registro del componente hijo
    Child,
  },
  data() {
    return {
      // Inicializa la propiedad 'message' para almacenar el mensaje recibido
      message: "",
    };
  },
  methods: {
    // Método para recibir el mensaje enviado desde el componente hijo
    receiveMessage(msg) {
      this.message = msg;
    },
  },
};
</script>
