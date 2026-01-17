<template>
  <div>
    <section class="page-header">
      <div class="container">
        <span class="page-subtitle">{{ $t('services.whatWeDo') }}</span>
        <h1>{{ $t('services.workshops') }}</h1>
        <p style="max-width: 600px; margin: var(--space-md) auto 0;">{{ $t('services.workshopsDesc') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-grid reveal">
          <div class="card">
            <div class="card-icon">
              <IconWorkshop />
            </div>
            <h3 class="card-title">{{ $t('pages.workshops.promptEngineering') }}</h3>
            <p class="card-text">{{ $t('pages.workshops.promptEngineeringDesc') }}</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconCode />
            </div>
            <h3 class="card-title">{{ $t('pages.workshops.vibecodingBootcamp') }}</h3>
            <p class="card-text">{{ $t('pages.workshops.vibecodingBootcampDesc') }}</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconBrain />
            </div>
            <h3 class="card-title">{{ $t('pages.workshops.aiForBusiness') }}</h3>
            <p class="card-text">{{ $t('pages.workshops.aiForBusinessDesc') }}</p>
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
  title: () => `${t('services.workshops')} | Manoga AI`,
  description: () => t('services.workshopsDesc'),
})
</script>
