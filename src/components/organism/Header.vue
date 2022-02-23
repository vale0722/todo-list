<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="text-gray-600 w-full flex items-center justify-center">
    <div class="tab p-0">
      <RouterLink to="/todo-list">Todas</RouterLink>
    </div>
    <div class="tab p-0">
      <RouterLink to="/todo-list/solved">Resueltas</RouterLink>
    </div>
    <div class="tab p-0">
      <RouterLink to="/todo-list/unsolved">No Resueltas</RouterLink>
    </div>
  </div>
</template>