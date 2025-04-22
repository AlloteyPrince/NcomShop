<template>
  <div>
    <h2>About</h2>
    <p>
      You will know more about us very soon, this is a one stop shop to get
      access to everything. Dont get dismayed
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");
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
