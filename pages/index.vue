<template>
  <div>
    <Header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </Header> 
    <h2>Home</h2>
    <p>
      Welcome to our shop, this is a one stop shop to get access to everything.
      Dont get dismayed
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  margin: 20px 0;
}
</style>
