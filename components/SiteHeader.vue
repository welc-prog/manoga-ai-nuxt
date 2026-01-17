<template>
  <header class="site-header" :class="{ scrolled: isScrolled }" id="site-header">
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
            <li><NuxtLink :to="localePath('/')" @click="menuOpen = false">{{ $t('nav.home') }}</NuxtLink></li>
            <li class="has-dropdown">
              <a href="#">{{ $t('nav.services') }}</a>
              <ul class="dropdown">
                <li><NuxtLink :to="localePath('/seo')" @click="menuOpen = false">SEO</NuxtLink></li>
                <li><NuxtLink :to="localePath('/google-ads')" @click="menuOpen = false">Google Ads</NuxtLink></li>
                <li><NuxtLink :to="localePath('/meta-advertising')" @click="menuOpen = false">{{ $t('nav.metaAds') }}</NuxtLink></li>
                <li><NuxtLink :to="localePath('/webdesign')" @click="menuOpen = false">{{ $t('nav.webdesign') }}</NuxtLink></li>
                <li><NuxtLink :to="localePath('/google-tag-manager')" @click="menuOpen = false">Google Tag Manager</NuxtLink></li>
              </ul>
            </li>
            <li><NuxtLink :to="localePath('/ai-consulting')" @click="menuOpen = false">{{ $t('nav.aiConsulting') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/workshops')" @click="menuOpen = false">Workshops</NuxtLink></li>
            <li><NuxtLink :to="localePath('/portfolio')" @click="menuOpen = false">Portfolio</NuxtLink></li>
            <li><NuxtLink :to="localePath('/contact')" class="nav-cta" @click="menuOpen = false">{{ $t('nav.getStarted') }}</NuxtLink></li>
          </ul>
        </nav>

        <!-- Language Switcher -->
        <LanguageSwitcher />

        <!-- Mobile Menu Toggle -->
        <button
          class="menu-toggle"
          id="menu-toggle"
          aria-label="Toggle Menu"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
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
const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>
