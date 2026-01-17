<template>
  <div>
    <section class="page-header">
      <div class="container">
        <span class="page-subtitle">{{ $t('marketing.tagline') }}</span>
        <h1>Google Tag <span class="text-gradient">Manager</span></h1>
        <p style="max-width: 600px; margin: var(--space-md) auto 0;">{{ $t('marketing.gtm') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-grid reveal">
          <div class="card">
            <div class="card-icon">
              <IconBarChart />
            </div>
            <h3 class="card-title">GTM Setup</h3>
            <p class="card-text">Professional Google Tag Manager implementation with proper container structure, naming conventions, and documentation.</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconTarget />
            </div>
            <h3 class="card-title">Conversion Tracking</h3>
            <p class="card-text">Track what matters - form submissions, purchases, button clicks, and custom events across all platforms.</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconCode />
            </div>
            <h3 class="card-title">GA4 Integration</h3>
            <p class="card-text">Proper Google Analytics 4 setup with enhanced ecommerce, custom events, and cross-domain tracking.</p>
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
  title: 'Google Tag Manager | Manoga AI',
  description: () => t('marketing.gtm'),
})
</script>
