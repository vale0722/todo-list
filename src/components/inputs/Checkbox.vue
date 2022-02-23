<template>
  <label v-if="checked" :for="checkId">
    <font-awesome-icon icon="check-circle" class="text-green-400" />
  </label>
  <label v-else :for="checkId">
    <font-awesome-icon icon="times-circle"  class="text-red-400"  />
  </label>

  <input
    type="checkbox"
    :id="checkId"
    class="checkbox"
    :checked="checked"
    @click="$emit('newCheck', checked ? false : true)"
  />
</template>

<script setup>
import { defineProps, defineEmits } from "@vue/runtime-core";

defineProps({ checked: Boolean, checkId: String });
defineEmits(["newCheck"]);
</script>