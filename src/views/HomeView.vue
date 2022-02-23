<script setup>
import WelcomeItem from "../components/WelcomeItem.vue";
import DocumentationIcon from "../components/icons/IconDocumentation.vue";
import ToolingIcon from "../components/icons/IconTooling.vue";
import EcosystemIcon from "../components/icons/IconEcosystem.vue";
import CommunityIcon from "../components/icons/IconCommunity.vue";
import SupportIcon from "../components/icons/IconSupport.vue";
</script>

<template>
  <main class="h-min-screen py-8">
    <WelcomeItem route="/me">
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Presentación</template>
    </WelcomeItem>

    <WelcomeItem route="/introduction">
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Introducción</template>
    </WelcomeItem>

    <WelcomeItem route="/basics">
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Conceptos Básicos</template>
    </WelcomeItem>

    <WelcomeItem route="/new-app">
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Crear una App desde Cero</template>
    </WelcomeItem>

    <WelcomeItem route="/todo-list">
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Todo List</template>
    </WelcomeItem>
  </main>
</template>
