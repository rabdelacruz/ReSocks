<template>
  <div class="min-h-screen flex flex-col">
    <AppNavbar />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
