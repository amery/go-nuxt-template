<template>
  <UDashboardPanel grow>
    <UDashboardPanelContent>
      <card-with-grid
        class="h-[50%]"
        title="Card 1"
        :count="200"
      />
      <card-with-grid
        class="h-[50%] mt-4"
        title="Card 2"
        :count="200"
      />
      <div class="flex-1" />
      <div class="pt-2 px-4">
        Footer
      </div>
    </UDashboardPanelContent>
  </UDashboardPanel>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
});
</script>
