<template>
  <div>
    <section class="page-header">
      <div class="container">
        <span class="page-subtitle">{{ $t('marketing.tagline') }}</span>
        <h1>{{ $t('nav.webdesign') }}</h1>
        <p style="max-width: 600px; margin: var(--space-md) auto 0;">{{ $t('marketing.webDesign') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-grid reveal">
          <div class="card">
            <div class="card-icon">
              <IconLayout />
            </div>
            <h3 class="card-title">Modern Design</h3>
            <p class="card-text">Clean, contemporary designs that reflect your brand and engage your audience. Mobile-first approach for all devices.</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconCode />
            </div>
            <h3 class="card-title">AI-Assisted Development</h3>
            <p class="card-text">Vibecoding methodology for faster development without sacrificing quality. Get your site live sooner.</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconBarChart />
            </div>
            <h3 class="card-title">Conversion Optimization</h3>
            <p class="card-text">Every design decision backed by UX best practices. Built to convert visitors into customers.</p>
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
  title: () => `${t('nav.webdesign')} | Manoga AI`,
  description: () => t('marketing.webDesign'),
})
</script>
