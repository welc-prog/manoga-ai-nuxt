<template>
  <div>
    <section class="page-header">
      <div class="container">
        <div class="page-header-with-image">
          <div class="page-header-content">
            <span class="page-subtitle">{{ $t('services.whatWeDo') }}</span>
            <h1><span class="text-gradient">Vibecoding</span></h1>
            <p class="page-header-description">{{ $t('services.vibecoding') }}</p>
          </div>
          <div class="page-header-image">
            <img src="/images/vibecoding.webp" alt="Vibecoding - AI-assisted development" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-grid reveal">
          <div class="card">
            <div class="card-icon">
              <IconCode />
            </div>
            <h3 class="card-title">{{ $t('pages.vibecoding.rapidPrototyping') }}</h3>
            <p class="card-text">{{ $t('pages.vibecoding.rapidPrototypingDesc') }}</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconLayout />
            </div>
            <h3 class="card-title">{{ $t('pages.vibecoding.fullStack') }}</h3>
            <p class="card-text">{{ $t('pages.vibecoding.fullStackDesc') }}</p>
          </div>

          <div class="card">
            <div class="card-icon">
              <IconBrain />
            </div>
            <h3 class="card-title">{{ $t('pages.vibecoding.aiIntegration') }}</h3>
            <p class="card-text">{{ $t('pages.vibecoding.aiIntegrationDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section" style="background: rgba(30, 41, 59, 0.3);">
      <div class="container">
        <div class="text-center mb-3">
          <span class="hero-tagline">{{ $t('process.tagline') }}</span>
          <h2>{{ $t('process.the') }}<span class="text-gradient">Vibecoding</span>{{ $t('process.process') }}</h2>
        </div>

        <div class="process-grid reveal">
          <div class="process-step">
            <div class="process-number">1</div>
            <h4 class="process-title">{{ $t('process.discovery') }}</h4>
            <p class="process-text">{{ $t('process.discoveryDesc') }}</p>
          </div>
          <div class="process-step">
            <div class="process-number">2</div>
            <h4 class="process-title">{{ $t('process.design') }}</h4>
            <p class="process-text">{{ $t('process.designDesc') }}</p>
          </div>
          <div class="process-step">
            <div class="process-number">3</div>
            <h4 class="process-title">{{ $t('process.develop') }}</h4>
            <p class="process-text">{{ $t('process.developDesc') }}</p>
          </div>
          <div class="process-step">
            <div class="process-number">4</div>
            <h4 class="process-title">{{ $t('process.deploy') }}</h4>
            <p class="process-text">{{ $t('process.deployDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
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
  title: () => `Vibecoding | Manoga AI`,
  description: () => t('services.vibecoding'),
})
</script>
