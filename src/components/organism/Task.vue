<template>
  <div class="flex justify-between mt-2 gap-2 items-center">
    <h3>{{ taskIndex }}</h3>
    <Checkbox
      :checked="task.status"
      @newCheck="statusAssigner"
      :checkId="task.id"
    />
    <Input
      action="update"
      @update="valueAssigner"
      :solved="task.status"
      :todo="task.todo"
    />
    <Button v-if="updateShower" action="update" @update="updateTask()" />
    <Button v-else action="remove" @remove="deleteTask(task.id)" />
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";
import Button from "@/components/inputs/Button.vue";
import Input from "@/components/inputs/Input.vue";
import Checkbox from "@/components/inputs/Checkbox.vue";
import { MutationsTypes } from "@/definitions/definitions";
import { useStore } from "vuex";

const props = defineProps({ task: Object, taskIndex: Number });
const store = useStore();
let value = ref("");
let updateShower = ref(false);

watch(value, () => (updateShower.value = true));

const updateTask = () => {
  store.commit(MutationsTypes.UPDATE_TASK, {
    ...props.task,
    todo: value.value,
  });
  updateShower.value = false;
};
const deleteTask = (id) => {
  store.commit(MutationsTypes.DELETE_TASK, id);
};
const valueAssigner = (arg) => {
  value.value = arg;
};
const statusAssigner = (arg) => {
  store.commit(MutationsTypes.UPDATE_TASK, {
    ...props.task,
    status: arg,
  });
};
</script>
