<template>
  <AppProducts />
  <div>
    <br />

    <button @click="updateUser()">Atualizar perfil</button>
    <div>
      <h5>Quantidade de itens {{ $store.state.cart.length }}</h5>
    </div>
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
    // updateUser() {
    //   const newUser = {
    //     first_name: "João2",
    //     second_name: "vitor2",
    //     email: "joao2@joao.com",
    //   };
    //   this.$store.commit("storeUser", newUser);
    // },
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
