<script setup>
import { defineProps, defineEmits } from "vue";
import { useStore } from "vuex";
import { MutationsTypes } from "@/definitions/definitions";

defineProps({
  action: String,
});

defineEmits(["add", "remove", "update"]);

let store = useStore();

let clear = () => store.commit(MutationsTypes.CLEAR_ALL);
</script>

<template>
  <div class="button-types-wrapper flex justify-between items-center gap-2">
    <button @click="$emit('add')" v-if="action === 'add'">
      <font-awesome-icon icon="check-circle" class="text-green-400"></font-awesome-icon>
    </button>
    <button
      @click="$emit('remove')"
      v-if="action === 'remove'"
    >
      <font-awesome-icon icon="trash" class="text-red-400"></font-awesome-icon>
    </button>
    <button
      @click="$emit('update')"
      v-if="action === 'update'"
    >
      <font-awesome-icon icon="edit" class="text-warning-400"></font-awesome-icon>
    </button>
      <button
        class="hover:animate-bounce" v-if="action === 'clear' &&  store.getters.getAllTasks.length > 0"
        @click="clear"
      >
        <div class="btn rounded-full bg-red-600 border-0 hover:bg-red-900 mr-2">
          <font-awesome-icon icon="trash"></font-awesome-icon>
        </div>
        <slot></slot>
      </button>
  </div>
</template>
