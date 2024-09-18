<script setup>
import { RouterView } from 'vue-router'; 
import { onMounted } from 'vue';

if (typeof window !== 'undefined') {
  window.HSStaticMethods = window.HSStaticMethods || {};
}

onMounted(() => {
  setTimeout(() => {
    if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
      window.HSStaticMethods.autoInit();
    }
  }, 100);
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>

