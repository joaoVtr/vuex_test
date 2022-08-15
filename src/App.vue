<template>
  <AppProducts />
  <div>
    <br />
    <button @click="updateUser()">Atualizar perfil</button>
  </div>
  <br />
  <div>
    {{ $store.state.user.first_name }}
  </div>
</template>

<script>
import AppProducts from "./components/Products/AppProducts.vue";

export default {
  name: "App",
  components: {
    AppProducts,
  },

  data() {
    return {};
  },
  methods: {
    updateUser() {
      const newUser = {
        first_name: "João2",
        second_name: "vitor2",
        email: "joao2@joao.com",
      };
      //   this.$store.commit("storeUser", newUser);
      this.$store.dispatch("storeUser", newUser).then(() => {
        console.log("sucesso");
      });
    },
  },
  created() {
    // console.log(this.$store.state.user.email);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
