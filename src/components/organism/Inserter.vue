<template>
  <div class="flex justify-between gap-2">
    <Input action="add" class="w-full" @add="valueAssigner" @confirm="enterConfirmation" />
    <Button v-if="value" action="add" @add="saveTask" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "@/components/inputs/Button.vue";
import Input from "@/components/inputs/Input.vue";
import { generateRandomId } from "@/helpers/alphaNumId";
import { MutationsTypes } from "@/definitions/definitions";
import { useStore } from "vuex";

    const store = useStore();

    let value = ref("");

    const valueAssigner = (arg) => {
      value.value = arg;
    };

    const saveTask = () => {
      const task = {
        id: generateRandomId(11),
        todo: value.value,
        status: false,
      };
      store.commit(MutationsTypes.ADD_NEW_TASK, task);
      value.value = "";
    };

    const enterConfirmation = (res) => {
      if (res) saveTask();
    };
</script>