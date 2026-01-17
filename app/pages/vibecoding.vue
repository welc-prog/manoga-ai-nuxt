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

    <!-- Core Services -->
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

    <!-- About Section -->
    <section class="section" style="background: rgba(30, 41, 59, 0.3);">
      <div class="container">
        <div class="content-section reveal">
          <h2 class="section-title">{{ $t('pages.vibecoding.aboutTitle') }}</h2>
          <p class="section-text">{{ $t('pages.vibecoding.aboutDesc') }}</p>
          <p class="section-text">{{ $t('pages.vibecoding.aboutDesc2') }}</p>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section">
      <div class="container">
        <div class="text-center mb-3">
          <span class="hero-tagline">{{ $t('common.benefits') }}</span>
          <h2>{{ $t('pages.vibecoding.whyTitle') }}</h2>
          <p style="max-width: 700px; margin: 0 auto;">{{ $t('pages.vibecoding.whyDesc') }}</p>
        </div>

        <div class="benefits-grid reveal">
          <div class="benefit-item">
            <div class="benefit-icon">
              <IconCode />
            </div>
            <h4>{{ $t('pages.vibecoding.benefit1') }}</h4>
            <p>{{ $t('pages.vibecoding.benefit1Desc') }}</p>
          </div>

          <div class="benefit-item">
            <div class="benefit-icon">
              <IconTarget />
            </div>
            <h4>{{ $t('pages.vibecoding.benefit2') }}</h4>
            <p>{{ $t('pages.vibecoding.benefit2Desc') }}</p>
          </div>

          <div class="benefit-item">
            <div class="benefit-icon">
              <IconBarChart />
            </div>
            <h4>{{ $t('pages.vibecoding.benefit3') }}</h4>
            <p>{{ $t('pages.vibecoding.benefit3Desc') }}</p>
          </div>

          <div class="benefit-item">
            <div class="benefit-icon">
              <IconShield />
            </div>
            <h4>{{ $t('pages.vibecoding.benefit4') }}</h4>
            <p>{{ $t('pages.vibecoding.benefit4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section" style="background: rgba(30, 41, 59, 0.3);">
      <div class="container">
        <div class="text-center mb-3">
          <span class="hero-tagline">{{ $t('services.whatWeDo') }}</span>
          <h2>{{ $t('pages.vibecoding.servicesTitle') }}</h2>
        </div>

        <div class="services-grid reveal">
          <div class="card">
            <h4 class="card-title">{{ $t('pages.vibecoding.service1') }}</h4>
            <p class="card-text">{{ $t('pages.vibecoding.service1Desc') }}</p>
          </div>
          <div class="card">
            <h4 class="card-title">{{ $t('pages.vibecoding.service2') }}</h4>
            <p class="card-text">{{ $t('pages.vibecoding.service2Desc') }}</p>
          </div>
          <div class="card">
            <h4 class="card-title">{{ $t('pages.vibecoding.service3') }}</h4>
            <p class="card-text">{{ $t('pages.vibecoding.service3Desc') }}</p>
          </div>
          <div class="card">
            <h4 class="card-title">{{ $t('pages.vibecoding.service4') }}</h4>
            <p class="card-text">{{ $t('pages.vibecoding.service4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section">
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

    <!-- FAQ Section -->
    <section class="section" style="background: rgba(30, 41, 59, 0.3);">
      <div class="container">
        <div class="text-center mb-3">
          <span class="hero-tagline">{{ $t('common.faq') }}</span>
          <h2>{{ $t('common.faq') }}</h2>
        </div>

        <div class="faq-grid reveal">
          <div class="faq-item">
            <h4 class="faq-question">{{ $t('pages.vibecoding.faq1') }}</h4>
            <p class="faq-answer">{{ $t('pages.vibecoding.faq1Answer') }}</p>
          </div>

          <div class="faq-item">
            <h4 class="faq-question">{{ $t('pages.vibecoding.faq2') }}</h4>
            <p class="faq-answer">{{ $t('pages.vibecoding.faq2Answer') }}</p>
          </div>

          <div class="faq-item">
            <h4 class="faq-question">{{ $t('pages.vibecoding.faq3') }}</h4>
            <p class="faq-answer">{{ $t('pages.vibecoding.faq3Answer') }}</p>
          </div>

          <div class="faq-item">
            <h4 class="faq-question">{{ $t('pages.vibecoding.faq4') }}</h4>
            <p class="faq-answer">{{ $t('pages.vibecoding.faq4Answer') }}</p>
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

// SEO - use computed values for SSR consistency
const pageDescription = computed(() => t('services.vibecoding'))

useSeoMeta({
  title: 'Vibecoding | Manoga AI',
  description: pageDescription
})
</script>

<style scoped>
.content-section {
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  margin-bottom: var(--space-md);
}

.section-text {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: var(--space-md);
  color: var(--color-text-muted);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
}

.benefit-item {
  text-align: center;
  padding: var(--space-lg);
}

.benefit-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto var(--space-md);
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-icon :deep(svg) {
  width: 28px;
  height: 28px;
  color: white;
}

.benefit-item h4 {
  margin-bottom: var(--space-sm);
  color: var(--color-text);
}

.benefit-item p {
  color: var(--color-text-muted);
  line-height: 1.6;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-lg);
  max-width: 1000px;
  margin: 0 auto;
}

.faq-item {
  background: var(--color-surface);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.faq-question {
  color: var(--color-text);
  margin-bottom: var(--space-sm);
  font-size: 1.1rem;
}

.faq-answer {
  color: var(--color-text-muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>
