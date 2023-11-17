<template>
  <nav>
    <div class="logo">CineGPT</div>
    <ul>
      <li><a href="#">Salas</a></li>
      <li><a href="#">Clientes</a></li>
    </ul>
  </nav>

  <div>
    <form @submit.prevent="criarFilme">
      <h2>Cadastro de Filmes</h2>

      <label for="nomeFilme" class="form-label">Nome do Filme:</label>
      <input type="text" v-model="novoFilme.nome_Filme" class="form-input" />

      <label for="faixaEtaria" class="form-label">Faixa Etária:</label>
      <input type="text" v-model="novoFilme.faixa_Etaria" class="form-input" />

      <label for="genero" class="form-label">Gênero:</label>
      <input type="text" v-model="novoFilme.genero" class="form-input" />

      <label for="tempo" class="form-label">Tempo de Duração:</label>
      <input type="text" v-model="novoFilme.tempo_Filme" class="form-input" />

      <label for="sinopse" class="form-label">Sinopse:</label>
      <input type="text" v-model="novoFilme.sinopse" class="form-input" />

      <label for="diretor" class="form-label">Diretor:</label>
      <input type="text" v-model="novoFilme.diretor" class="form-input" />

      <input type="submit" value="Enviar" class="form-submit" />
    </form>

    <modal
      :show="filmeAdicionado"
      :mensagem="mensagemModal"
      @fechar="fecharModal"
    />
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue"; // Ajuste o caminho conforme a estrutura do seu projeto

export default {
  components: {
    Modal,
  },
  data() {
    return {
      novoFilme: {
        nome_Filme: "",
        faixa_Etaria: "",
        genero: "",
        tempo_Filme: "",
        sinopse: "",
        diretor: "",
      },
      filmeAdicionado: false,
      mensagemModal: "",
    };
  },
  methods: {
    async criarFilme() {
      try {
        const response = await fetch("http://localhost:3000/api/filme", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.novoFilme),
        });

        if (response.ok) {
          console.log("Novo filme adicionado com sucesso!");
          this.filmeAdicionado = true;
          this.mensagemModal = `O filme "${this.novoFilme.nome_Filme}" foi adicionado com sucesso!`;
          // Redirecionar ou fazer algo após a adição do filme
        } else {
          console.error("Erro ao adicionar filme.");
        }
      } catch (error) {
        console.error("Erro ao processar requisição:", error);
      }
    },
    fecharModal() {
      this.filmeAdicionado = false;
    },
  },
};
</script>

<style>
@import "@/components/App.css";
</style>
