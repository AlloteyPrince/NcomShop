<template>
  <div>
    <Header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <Nuxtlink to="/" class="font-bold">NcomShop</Nuxtlink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
        </ul>
      </nav>
    </Header>

    <!-- Output the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}
</style>
