<template>
  <div>
    <h4>Valor total: {{ $store.getters.total }}</h4>
    <div>
      <h5>Quantidade de itens {{ $store.state.cart.length }}</h5>
    </div>
  </div>
  <AppProduct
    v-for="product in $store.state.products"
    :key="product.id"
    :product="product"
  >
  </AppProduct>
</template>

<script>
import AppProduct from "./AppProduct.vue";
export default {
  components: { AppProduct },
};
</script>
