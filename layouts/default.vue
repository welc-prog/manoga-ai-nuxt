<template>
  <div>
    <AnimatedBackground />
    <SiteHeader />
    <main class="site-main" id="main">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
// Scroll reveal effect
onMounted(() => {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger')

  const revealOnScroll = () => {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight
      const elementTop = el.getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active')
      }
    })
  }

  window.addEventListener('scroll', revealOnScroll)
  revealOnScroll() // Initial check

  onUnmounted(() => {
    window.removeEventListener('scroll', revealOnScroll)
  })
})
</script>
