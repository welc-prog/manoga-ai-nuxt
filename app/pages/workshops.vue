<template>
  <div>
    <section class="page-header">
      <div class="container">
        <div class="page-header-with-image">
          <div class="page-header-content">
            <span class="page-subtitle">{{ $t('services.whatWeDo') }}</span>
            <h1>{{ $t('services.workshops') }}</h1>
            <p class="page-header-description">{{ $t('services.workshopsDesc') }}</p>
          </div>
          <div class="page-header-image">
            <img src="/images/workshops.webp" :alt="$t('services.workshops')" />
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

    <!-- About Section -->
    <section class="section" style="background: rgba(30, 41, 59, 0.3);">
      <div class="container">
        <div class="content-section reveal">
          <h2 class="section-title">{{ $t('pages.workshops.aboutTitle') }}</h2>
          <p class="section-text">{{ $t('pages.workshops.aboutDesc') }}</p>
          <p class="section-text">{{ $t('pages.workshops.aboutDesc2') }}</p>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section">
      <div class="container">
        <div class="text-center mb-3">
          <span class="hero-tagline">{{ $t('common.benefits') }}</span>
          <h2>{{ $t('pages.workshops.whyTitle') }}</h2>
          <p style="max-width: 700px; margin: 0 auto;">{{ $t('pages.workshops.whyDesc') }}</p>
        </div>

        <div class="benefits-grid reveal">
          <div class="benefit-item">
            <div class="benefit-icon">
              <IconBarChart />
            </div>
            <h4>{{ $t('pages.workshops.benefit1') }}</h4>
            <p>{{ $t('pages.workshops.benefit1Desc') }}</p>
          </div>

          <div class="benefit-item">
            <div class="benefit-icon">
              <IconWorkshop />
            </div>
            <h4>{{ $t('pages.workshops.benefit2') }}</h4>
            <p>{{ $t('pages.workshops.benefit2Desc') }}</p>
          </div>

          <div class="benefit-item">
            <div class="benefit-icon">
              <IconShield />
            </div>
            <h4>{{ $t('pages.workshops.benefit3') }}</h4>
            <p>{{ $t('pages.workshops.benefit3Desc') }}</p>
          </div>

          <div class="benefit-item">
            <div class="benefit-icon">
              <IconTarget />
            </div>
            <h4>{{ $t('pages.workshops.benefit4') }}</h4>
            <p>{{ $t('pages.workshops.benefit4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Workshop Formats Section -->
    <section class="section" style="background: rgba(30, 41, 59, 0.3);">
      <div class="container">
        <div class="text-center mb-3">
          <span class="hero-tagline">{{ $t('common.howItWorks') }}</span>
          <h2>{{ $t('pages.workshops.workshopsTitle') }}</h2>
        </div>

        <div class="services-grid reveal">
          <div class="card">
            <h4 class="card-title">{{ $t('pages.workshops.workshop1') }}</h4>
            <p class="card-text">{{ $t('pages.workshops.workshop1Desc') }}</p>
          </div>
          <div class="card">
            <h4 class="card-title">{{ $t('pages.workshops.workshop2') }}</h4>
            <p class="card-text">{{ $t('pages.workshops.workshop2Desc') }}</p>
          </div>
          <div class="card">
            <h4 class="card-title">{{ $t('pages.workshops.workshop3') }}</h4>
            <p class="card-text">{{ $t('pages.workshops.workshop3Desc') }}</p>
          </div>
          <div class="card">
            <h4 class="card-title">{{ $t('pages.workshops.workshop4') }}</h4>
            <p class="card-text">{{ $t('pages.workshops.workshop4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section">
      <div class="container">
        <div class="text-center mb-3">
          <span class="hero-tagline">{{ $t('common.gotQuestions') }}</span>
          <h2>{{ $t('common.faq') }}</h2>
        </div>

        <div class="faq-grid reveal">
          <div class="faq-item">
            <h4 class="faq-question">{{ $t('pages.workshops.faq1') }}</h4>
            <p class="faq-answer">{{ $t('pages.workshops.faq1Answer') }}</p>
          </div>

          <div class="faq-item">
            <h4 class="faq-question">{{ $t('pages.workshops.faq2') }}</h4>
            <p class="faq-answer">{{ $t('pages.workshops.faq2Answer') }}</p>
          </div>

          <div class="faq-item">
            <h4 class="faq-question">{{ $t('pages.workshops.faq3') }}</h4>
            <p class="faq-answer">{{ $t('pages.workshops.faq3Answer') }}</p>
          </div>

          <div class="faq-item">
            <h4 class="faq-question">{{ $t('pages.workshops.faq4') }}</h4>
            <p class="faq-answer">{{ $t('pages.workshops.faq4Answer') }}</p>
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

// SEO - use computed values for SSR consistency
const pageTitle = computed(() => `${t('services.workshops')} | Manoga AI`)
const pageDescription = computed(() => t('services.workshopsDesc'))

useSeoMeta({
  title: pageTitle,
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
  color: var(--text-secondary);
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
  color: var(--text-primary);
}

.benefit-item p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
  max-width: 1000px;
  margin: 0 auto;
}

.faq-item {
  background: var(--bg-surface);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle);
}

.faq-question {
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
  font-size: 1.1rem;
}

.faq-answer {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>
