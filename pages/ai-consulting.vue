<template>
  <div>
    <section class="page-header">
      <div class="container">
        <span class="page-subtitle">{{ $t('services.whatWeDo') }}</span>
        <h1>{{ $t('services.aiConsulting') }}</h1>
        <p style="max-width: 600px; margin: var(--space-md) auto 0;">{{ $t('services.aiConsultingDesc') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-grid reveal">
          <div class="card">
            <div class="card-icon">
              <IconBrain />
            </div>
            <h3 class="card-title">AI Strategy</h3>
            <p class="card-text">Comprehensive AI roadmap development tailored to your business goals and capabilities.</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconSearch />
            </div>
            <h3 class="card-title">AI Audit</h3>
            <p class="card-text">Evaluate your current processes and identify high-impact AI opportunities.</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconCode />
            </div>
            <h3 class="card-title">Implementation</h3>
            <p class="card-text">Hands-on guidance for integrating AI tools and workflows into your organization.</p>
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
