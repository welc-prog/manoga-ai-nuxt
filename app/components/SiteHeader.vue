<template>
  <header class="site-header" :class="{ 'menu-open': menuOpen }" id="site-header">
    <div class="container">
      <div class="header-inner">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="logo" aria-label="Manoga AI">
          <span class="logo-icon">M</span>
          <span class="logo-text">Manoga<span class="text-gradient">AI</span></span>
        </NuxtLink>

        <!-- Main Navigation -->
        <nav class="main-nav" :class="{ active: menuOpen }" id="main-nav" aria-label="Primary Navigation">
          <ul>
            <li><NuxtLink :to="localePath('/')" @click="closeMenu">{{ $t('nav.home') }}</NuxtLink></li>
            <li class="has-dropdown" :class="{ 'dropdown-open': dropdownOpen }">
              <button
                type="button"
                class="dropdown-trigger"
                @click="toggleDropdown"
                aria-haspopup="menu"
                :aria-expanded="dropdownOpen"
                aria-controls="services-dropdown"
              >
                {{ $t('nav.services') }}
                <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <ul class="dropdown" id="services-dropdown" role="menu">
                <li role="none"><NuxtLink :to="localePath('/seo')" @click="closeMenu" role="menuitem">SEO</NuxtLink></li>
                <li role="none"><NuxtLink :to="localePath('/google-ads')" @click="closeMenu" role="menuitem">Google Ads</NuxtLink></li>
                <li role="none"><NuxtLink :to="localePath('/meta-advertising')" @click="closeMenu" role="menuitem">{{ $t('nav.metaAds') }}</NuxtLink></li>
                <li role="none"><NuxtLink :to="localePath('/webdesign')" @click="closeMenu" role="menuitem">{{ $t('nav.webdesign') }}</NuxtLink></li>
                <li role="none"><NuxtLink :to="localePath('/google-tag-manager')" @click="closeMenu" role="menuitem">Google Tag Manager</NuxtLink></li>
              </ul>
            </li>
            <li><NuxtLink :to="localePath('/ai-consulting')" @click="closeMenu">{{ $t('nav.aiConsulting') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/workshops')" @click="closeMenu">Workshops</NuxtLink></li>
            <li><NuxtLink :to="localePath('/portfolio')" @click="closeMenu">Portfolio</NuxtLink></li>
            <li><NuxtLink :to="localePath('/contact')" class="nav-cta" @click="closeMenu">{{ $t('nav.getStarted') }}</NuxtLink></li>
          </ul>
        </nav>

        <!-- Language Switcher -->
        <LanguageSwitcher />

        <!-- Mobile Menu Toggle -->
        <button
          class="menu-toggle"
          :class="{ active: menuOpen }"
          id="menu-toggle"
          aria-label="Toggle Menu"
          :aria-expanded="menuOpen"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const menuOpen = ref(false)
const dropdownOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  dropdownOpen.value = false

  // Body scroll lock - client only
  if (import.meta.client) {
    if (menuOpen.value) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }
}

const closeMenu = () => {
  menuOpen.value = false
  dropdownOpen.value = false
  if (import.meta.client) {
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.width = ''
  }
}

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

// Apply scrolled class via DOM (not reactive) to prevent hydration mismatch
const updateScrollClass = () => {
  const header = document.getElementById('site-header')
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  }
}

// Throttle for scroll performance
let scrollThrottle: ReturnType<typeof setTimeout> | null = null
const throttledScrollHandler = () => {
  if (scrollThrottle) return
  scrollThrottle = setTimeout(() => {
    updateScrollClass()
    scrollThrottle = null
  }, 100)
}

onMounted(() => {
  window.addEventListener('scroll', throttledScrollHandler, { passive: true })

  // Initial scroll check after mount
  updateScrollClass()

  // Close menu on escape key
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && menuOpen.value) {
      closeMenu()
    }
  }
  window.addEventListener('keydown', handleEscape)

  onUnmounted(() => {
    window.removeEventListener('scroll', throttledScrollHandler)
    window.removeEventListener('keydown', handleEscape)
    if (scrollThrottle) clearTimeout(scrollThrottle)
    // Ensure body scroll is restored
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.width = ''
  })
})
</script>
