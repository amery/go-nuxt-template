<template>
  <UDashboardLayout>
    <UDashboardPanel
      :width="250"
      collapsible
    >
      <UDashboardNavbar>
        <template #left>
          Logo
        </template>
      </UDashboardNavbar>
      <UDashboardSidebar>
        Sidebar
        <UDivider class="sticky bottom-0" />

        <template #footer>
          <span class="text-sm">
            Sidebar Footer
          </span>
          <UColorModeToggle class="right-0" />
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>

    <UDashboardPage>
      <NuxtPage />
    </UDashboardPage>
  </UDashboardLayout>
</template>
