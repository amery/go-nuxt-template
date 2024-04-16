<template>
  <UDashboardCard
    :title="title || 'Card'"
    class="shadow-lg"
  >
    <div class="flex-1 border overflow-x-scroll">
      <ul class="grid grid-rows-10 grid-flow-col">
        <li
          v-for="i in count"
          :key="i"
        >
          <div class="flex flex-0 w-32 board m-1 p-2 bg-primary">
            {{ i }}
          </div>
        </li>
      </ul>
    </div>
  </UDashboardCard>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  count: {
    type: Number,
    default: 100,
  },
});
</script>
