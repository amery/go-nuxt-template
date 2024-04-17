<template>
  <UDashboardPanel grow>
    <UDashboardPanelContent>
      <UDashboardCard
        title="Params"
      >
        <UForm>
          <UFormGroup
            label="Cards"
          >
            <UInput
              v-model.number="cards"
              class="text-right"
            />
          </UFormGroup>
          <UFormGroup
            label="Items"
          >
            <UInput
              v-model.number="itemsInput"
              class="text-right"
            />
          </UFormGroup>
        </UForm>
      </UDashboardCard>

      <UDashboardCard
        v-for="i in cards"
        :key="i"
        class="h-[30%] mt-4"
      >
        <template #title>
          Card {{ i }} with {{ items }} items
        </template>

        <ul
          class="border h-auto overflow-scroll"
        >
          <li
            v-for="j in items"
            :key="j"
          >
            <div class="flex flex-0 w-32 border p-1 m-1">
              {{ j }}
            </div>
          </li>
        </ul>
      </UDashboardCard>

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

const cards = ref(2);
const items = ref(2);

const itemsInput = computed({
  get() {
    return items.value;
  },
  set(value: number) {
    if (value >= 0) items.value = value;
  },
});
</script>
