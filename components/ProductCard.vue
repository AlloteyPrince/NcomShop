<template>
  <div class="card text-center">
    <img :src="product.image" alt="product thumb" class="thumbnail" />

    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>

    <Nuxt-link :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </Nuxt-link>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
