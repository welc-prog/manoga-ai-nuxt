<template>
  <div>
    <section class="page-header">
      <div class="container">
        <div class="page-header-with-image">
          <div class="page-header-content">
            <span class="page-subtitle">{{ $t('services.whatWeDo') }}</span>
            <h1>{{ $t('services.aiConsulting') }}</h1>
            <p class="page-header-description">{{ $t('services.aiConsultingDesc') }}</p>
          </div>
          <div class="page-header-image">
            <img src="/images/ai-consulting.webp" :alt="$t('services.aiConsulting')" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-grid reveal">
          <div class="card">
            <div class="card-icon">
              <IconBrain />
            </div>
            <h3 class="card-title">{{ $t('pages.aiConsulting.strategy') }}</h3>
            <p class="card-text">{{ $t('pages.aiConsulting.strategyDesc') }}</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconSearch />
            </div>
            <h3 class="card-title">{{ $t('pages.aiConsulting.audit') }}</h3>
            <p class="card-text">{{ $t('pages.aiConsulting.auditDesc') }}</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconCode />
            </div>
            <h3 class="card-title">{{ $t('pages.aiConsulting.implementation') }}</h3>
            <p class="card-text">{{ $t('pages.aiConsulting.implementationDesc') }}</p>
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
  title: () => `${t('services.aiConsulting')} | Manoga AI`,
  description: () => t('services.aiConsultingDesc'),
})
</script>
