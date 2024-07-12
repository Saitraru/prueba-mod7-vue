<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- Título del componente hijo -->
    <h1>Child Component</h1>
    <!-- Campo de entrada para escribir un mensaje, enlazado a la variable 'inputMessage' -->
    <input v-model="inputMessage" type="text" placeholder="Type a message" />
    <!-- Botón que llama al método 'sendMessage' cuando se hace clic -->
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Variable de datos para almacenar el mensaje introducido en el campo de entrada
      inputMessage: "",
    };
  },
  methods: {
    // Método que emite un evento 'sendMessage' con el contenido de 'inputMessage'
    sendMessage() {
      this.$emit("sendMessage", this.inputMessage);
    },
  },
};
</script>
