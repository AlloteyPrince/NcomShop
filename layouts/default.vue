<template>
  <div>
    <Header>
      <nav>
        <nuxt-link to="/">NcomShop</nuxt-link>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </Header>

    <!-- Output the page content -->
    <div>
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
