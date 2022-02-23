<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <div class="all h-full text-center flex flex-col gap-3">
    <h2 class="text-2xl font-bold my-3">Tareas Resueltas</h2>
    <div
      v-for="(task, index) in store.getters.solvedTasks"
      :key="index"
      class="task"
    >
      <span>{{ task.todo }}</span>
    </div>
    <div v-if="store.getters.solvedTasks.length === 0">No Hay Tareas!</div>
  </div>
</template>