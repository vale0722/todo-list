<script setup>
import Inserter from "@/components/organism/Inserter.vue";
import Task from "@/components/organism/Task.vue";
import { useStore } from "vuex";
import { MutationsTypes } from "@/definitions/definitions";

let store = useStore();

store.commit(MutationsTypes.SET_ALL);
</script>

<template>
  <div class="all h-full text-center flex flex-col gap-3">
    <h2 class="text-2xl font-bold my-3">Añade las tareas que quieres realizar</h2>
    <Inserter />
    <div v-for="(task, index) in store.getters.getAllTasks" :key="index">
      <Task :task="task" :taskIndex="index + 1" />
    </div>
  </div>
</template>
