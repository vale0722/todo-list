<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/organism/Header.vue";
import Button from "@/components/inputs/Button.vue";
</script>

<template>
  <div class="mockup-phone border-pink-500">
    <div class="camera"></div>
    <div class="display">
      <div class="artboard artboard-demo bg-pink-200 text-gray-800 justify-between py-12">
      <Header />
        <RouterView class="p-2 overflow-auto" name="todo" v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </RouterView>
        <Button action="clear">
          Limpiar
        </Button>
      </div>
    </div>
  </div>
</template>