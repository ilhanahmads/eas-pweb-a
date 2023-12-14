<template>
  <div>
    <nav class="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div class="flex items-center">
        <nuxt-link to="/daftar" class="mr-4">Daftar</nuxt-link>
        <nuxt-link to="/check">Check</nuxt-link>
      </div>
    </nav>

    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  async asyncData({ redirect }) {
    redirect("/daftar");
  },
};
</script>
