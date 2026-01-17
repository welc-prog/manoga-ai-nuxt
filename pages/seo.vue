<template>
  <div>
    <section class="page-header">
      <div class="container">
        <div class="page-header-with-image">
          <div class="page-header-content">
            <span class="page-subtitle">{{ $t('marketing.tagline') }}</span>
            <h1>SEO <span class="text-gradient">Services</span></h1>
            <p class="page-header-description">{{ $t('marketing.seo') }}</p>
          </div>
          <div class="page-header-image">
            <img src="/images/seo-analytics.webp" alt="SEO Analytics" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-grid reveal">
          <div class="card">
            <div class="card-icon">
              <IconSearch />
            </div>
            <h3 class="card-title">{{ $t('pages.seo.technicalSeo') }}</h3>
            <p class="card-text">{{ $t('pages.seo.technicalSeoDesc') }}</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconCode />
            </div>
            <h3 class="card-title">{{ $t('pages.seo.contentStrategy') }}</h3>
            <p class="card-text">{{ $t('pages.seo.contentStrategyDesc') }}</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconBarChart />
            </div>
            <h3 class="card-title">{{ $t('pages.seo.analyticsReporting') }}</h3>
            <p class="card-text">{{ $t('pages.seo.analyticsReportingDesc') }}</p>
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
  title: () => `SEO | Manoga AI`,
  description: () => t('marketing.seo'),
})
</script>
