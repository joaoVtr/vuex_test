<template>
  <div class="card">
    <div>{{ product.id }} - {{ product.name }} - {{ product.price }}</div>

    <br />
    <button v-if="inCard" @click="removeProduct()">Remover</button>
    <button @click="addProduct()">Adicionar</button>

    <!-- <button @click="removeProduct()">Remover</button> -->
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  computed: {
    inCard() {
      const id = this.product.id;
      var item = null;
      item = this.$store.state.cart.findIndex((item) => item.id === id);
      return item > -1 ? true : false;
    },
  },
  methods: {
    addProduct() {
      this.$store.commit("addProduct", this.product);
    },

    removeProduct() {
      this.$store.commit("removeProduct", this.product.id);
    },
  },
  created() {},
};
</script>

<style>
.card {
  background-color: bisque;
  padding: 6px 20px;
  border-radius: 5px;
  width: 15%;
  margin: 4px auto;
  display: flex;
  justify-content: space-between;
}
</style>
