<template>
  <div>
    <h2>Product Details for {{ id }}</h2>
    <p>
      This product is one of a kind, it is a unique product that is not
      available in any other store. It is made from high quality materials and
      is designed to last. You will not find a better product anywhere else.
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "products",
});
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
