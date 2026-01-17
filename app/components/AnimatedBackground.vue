<template>
  <ClientOnly>
    <div class="bg-animation">
      <div
        v-for="(particle, i) in particles"
        :key="i"
        class="particle"
        :style="particle"
      />
    </div>
    <template #fallback>
      <div class="bg-animation" aria-hidden="true"></div>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const particles = ref<Array<{ left: string; animationDelay: string; animationDuration: string }>>([])

onMounted(() => {
  // Generate particles only on client side to avoid hydration mismatch
  particles.value = Array.from({ length: 20 }, () => ({
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 15}s`,
    animationDuration: `${10 + Math.random() * 10}s`
  }))
})
</script>
