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
// Throttle helper for performance
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Scroll reveal effect with throttling
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

  const throttledReveal = throttle(revealOnScroll, 100)
  window.addEventListener('scroll', throttledReveal, { passive: true })
  revealOnScroll() // Initial check

  onUnmounted(() => {
    window.removeEventListener('scroll', throttledReveal)
  })
})
</script>
