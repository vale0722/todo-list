<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
    <div class="all h-full text-center flex flex-col gap-3">
      <h2 class="text-2xl font-bold my-3">Tareas Pendientes</h2>
    <div
      v-for="(task, index) in store.getters.unsolvedTasks"
      :key="index"
      class="task"
    >
      <span>{{ task.todo }}</span>
    </div>
    <div v-if="store.getters.unsolvedTasks.length == 0">No task here!</div>
  </div>
</template>