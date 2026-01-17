<template>
  <div>
    <section class="page-header">
      <div class="container">
        <span class="page-subtitle">{{ $t('marketing.tagline') }}</span>
        <h1>Google <span class="text-gradient">Ads</span></h1>
        <p style="max-width: 600px; margin: var(--space-md) auto 0;">{{ $t('marketing.googleAds') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-grid reveal">
          <div class="card">
            <div class="card-icon">
              <IconTarget />
            </div>
            <h3 class="card-title">Search Campaigns</h3>
            <p class="card-text">Targeted search ads that capture high-intent users at the moment they're looking for your services.</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconLayout />
            </div>
            <h3 class="card-title">Display & Remarketing</h3>
            <p class="card-text">Visual ads across the Google Display Network and smart remarketing to re-engage past visitors.</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconBarChart />
            </div>
            <h3 class="card-title">Performance Max</h3>
            <p class="card-text">AI-powered campaign optimization across all Google channels for maximum reach and conversions.</p>
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
  title: 'Google Ads | Manoga AI',
  description: () => t('marketing.googleAds'),
})
</script>
