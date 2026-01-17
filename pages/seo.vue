<template>
  <div>
    <section class="page-header">
      <div class="container">
        <span class="page-subtitle">{{ $t('marketing.tagline') }}</span>
        <h1>SEO <span class="text-gradient">Services</span></h1>
        <p style="max-width: 600px; margin: var(--space-md) auto 0;">{{ $t('marketing.seo') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-grid reveal">
          <div class="card">
            <div class="card-icon">
              <IconSearch />
            </div>
            <h3 class="card-title">Technical SEO</h3>
            <p class="card-text">Site audits, performance optimization, structured data, and ensuring search engines can properly crawl and index your content.</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconCode />
            </div>
            <h3 class="card-title">Content Strategy</h3>
            <p class="card-text">AI-powered keyword research and content planning to target the right audiences with the right messages.</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconBarChart />
            </div>
            <h3 class="card-title">Analytics & Reporting</h3>
            <p class="card-text">Track rankings, traffic, and conversions with clear, actionable reports that show real business impact.</p>
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
  title: 'SEO Services | Manoga AI',
  description: () => t('marketing.seo'),
})
</script>
