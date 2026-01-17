<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <noscript>
    <div style="background: #0f172a; color: #f8fafc; padding: 2rem; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1 style="font-size: 1.5rem; margin-bottom: 1rem;">JavaScript Required</h1>
      <p style="max-width: 400px; line-height: 1.6;">This website requires JavaScript to display correctly. Please enable JavaScript in your browser settings or upgrade to a modern browser.</p>
      <p style="margin-top: 1rem; opacity: 0.7;">Contact: +45 50 58 79 00</p>
    </div>
  </noscript>
</template>

<script setup lang="ts">
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale
  }
})
</script>
