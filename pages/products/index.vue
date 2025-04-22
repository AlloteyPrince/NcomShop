<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p"/>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
})


//fetching data from the API
const { data:products } = await useFetch('https://fakestoreapi.com/products')

useHead({
  title: 'Ncomshop - Products',
  meta: [
    {
      name: 'description',
      content: 'Products page'
    }
  ]
})
</script>

<style scoped>
h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  margin: 20px 0;
}
</style>
