<!-- Modal.vue -->
<template>
    <div v-if="show" class="modal-container">
      <div class="modal-content">
        <span class="close" @click="fecharModal">&times;</span>
        <p>{{ mensagem }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: Boolean,
      mensagem: String,
    },
    methods: {
      fecharModal() {
        this.$emit("fechar");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione estilos conforme necessário para o seu modal */
  .modal-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: #fefefe;
    padding: 20px;
    border-radius: 10px;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  </style>
  