<template>
  <div>
    <section class="page-header">
      <div class="container">
        <span class="page-subtitle">{{ $t('marketing.tagline') }}</span>
        <h1>Meta <span class="text-gradient">{{ $t('services.advertising') }}</span></h1>
        <p style="max-width: 600px; margin: var(--space-md) auto 0;">{{ $t('marketing.metaAds') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-grid reveal">
          <div class="card">
            <div class="card-icon">
              <IconTag />
            </div>
            <h3 class="card-title">{{ $t('pages.metaAds.facebookAds') }}</h3>
            <p class="card-text">{{ $t('pages.metaAds.facebookAdsDesc') }}</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconLayout />
            </div>
            <h3 class="card-title">{{ $t('pages.metaAds.instagramAds') }}</h3>
            <p class="card-text">{{ $t('pages.metaAds.instagramAdsDesc') }}</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconBarChart />
            </div>
            <h3 class="card-title">{{ $t('pages.metaAds.advantagePlus') }}</h3>
            <p class="card-text">{{ $t('pages.metaAds.advantagePlusDesc') }}</p>
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
  title: () => `${t('nav.metaAds')} | Manoga AI`,
  description: () => t('marketing.metaAds'),
})
</script>
