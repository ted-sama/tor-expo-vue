<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <div class="flex mb-32">
    <p class="text-3xl max-w-3xl">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
