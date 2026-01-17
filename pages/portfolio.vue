<template>
  <div>
    <section class="page-header">
      <div class="container">
        <span class="page-subtitle">{{ $t('portfolio.tagline') }}</span>
        <h1>{{ $t('portfolio.featured') }} <span class="text-gradient">{{ $t('portfolio.projects') }}</span></h1>
        <p class="page-header-description">{{ $t('portfolio.subtitle') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="showcase-grid reveal">
          <!-- WELC -->
          <div class="showcase-item">
            <img class="showcase-image" src="/images/portfolio-crypto.webp" alt="WeLoveEverythingCrypto" loading="lazy" />
            <div class="showcase-overlay">
              <span class="showcase-tag">{{ $t('portfolio.liveProject') }}</span>
              <h3 class="showcase-title">WeLoveEverythingCrypto</h3>
              <p>{{ $t('portfolio.welcDesc') }}</p>
              <a href="https://weloveeverythingcrypto.com" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top: 1rem;">
                {{ $t('portfolio.visitSite') }} <IconExternal />
              </a>
            </div>
          </div>

          <!-- Handball Stats -->
          <div class="showcase-item">
            <img class="showcase-image" src="/images/portfolio-handball.webp" alt="Handball Stats" loading="lazy" />
            <div class="showcase-overlay">
              <span class="showcase-tag">{{ $t('portfolio.comingSoon') }}</span>
              <h3 class="showcase-title">Handball Stats App</h3>
              <p>{{ $t('portfolio.handballDesc') }}</p>
              <span class="btn btn-secondary" style="margin-top: 1rem;">
                {{ $t('portfolio.inDevelopment') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section" style="background: rgba(30, 41, 59, 0.3);">
      <div class="container">
        <div class="card text-center" style="padding: var(--space-xl); max-width: 800px; margin: 0 auto;">
          <h2 class="mb-1">{{ $t('cta.title') }}</h2>
          <p style="font-size: 1.25rem; margin-bottom: var(--space-md);">{{ $t('cta.subtitle') }}</p>
          <NuxtLink :to="localePath('/contact')" class="btn btn-primary btn-glow">
            {{ $t('cta.button') }}
            <IconArrowRight />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => `Portfolio | Manoga AI`,
  description: () => t('portfolio.subtitle'),
})
</script>
