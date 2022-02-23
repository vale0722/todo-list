<template>
  <div class="wrapper">
    <input
      id="adder"
      v-if="action === 'add'"
      autocomplete="off"
      class="input w-full max-w-xs bg-white"
      :class="{ resize: value.length > 0 }"
      type="text"
      v-model.trim="value"
      placeholder="Escribe algo..."
      @enter="$emit('confirm', value.length > 0)"
      @input="$emit('add', value.length > 0 ? value : '')"
    />
    <input
      v-if="action === 'update'"
      :class="{ solved: solved }"
      class="input input-xs w-full max-w-xs bg-white"
      type="text"
      autocomplete="off"
      :value="todo"
      @input="$emit('update', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import { useStore } from "vuex";

defineProps({ action: String, todo: String, solved: Boolean });
defineEmits(["add", "update"]);

const store = useStore();

let value = ref("");

watch(store.getters.getAllTasks, () => {
  if (store.getters.getStatus) {
    value.value = "";
  }
});
</script>
