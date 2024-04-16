<template>
  <UHeader>
    <template #logo>
      Logo
    </template>
  </UHeader>

  <UMain>
    <UContainer>
      <NuxtPage />
    </UContainer>
  </UMain>

  <UFooter>
    <template #left>
      <div class="text-xs">
        Copyright &copy; {{ year }}
      </div>
    </template>

    <template #right>
      <UColorModeToggle />
    </template>
  </UFooter>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
