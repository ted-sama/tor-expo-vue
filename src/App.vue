<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";
</script>

<script>
export default {
  data() {
    return {
      homeMessage: "Hey !",
    };
  },
};
</script>

<template>
  <div class="px-6">
    <div class="container">
      <Home />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
