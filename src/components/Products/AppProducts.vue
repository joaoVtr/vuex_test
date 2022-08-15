<template>
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
