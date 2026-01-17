<template>
  <div>
    <!-- Hero Section -->
    <section class="hero section" id="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <span class="hero-tagline">{{ $t('hero.tagline') }}</span>
            <h1 class="hero-title">
              {{ $t('hero.title') }}
              <span class="text-gradient glitch" data-text="Vibecoding">Vibecoding</span>
            </h1>
            <p class="hero-description">{{ $t('hero.description') }}</p>
            <div class="hero-buttons">
              <NuxtLink :to="localePath('/contact')" class="btn btn-primary btn-glow">
                {{ $t('hero.cta') }}
                <IconArrowRight />
              </NuxtLink>
              <NuxtLink :to="localePath('/portfolio')" class="btn btn-secondary">
                {{ $t('hero.secondary') }}
              </NuxtLink>
            </div>
          </div>
          <div class="hero-visual">
            <AIBrain />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Marquee -->
    <div class="marquee section-sm">
      <div class="marquee-content">
        <span>Vibecoding</span>
        <span>{{ $t('services.aiConsulting') }}</span>
        <span>SEO</span>
        <span>Google Ads</span>
        <span>Meta {{ $t('services.advertising') }}</span>
        <span>{{ $t('services.webDesign') }}</span>
        <span>GTM</span>
        <span>Workshops</span>
        <span>Vibecoding</span>
        <span>{{ $t('services.aiConsulting') }}</span>
        <span>SEO</span>
        <span>Google Ads</span>
        <span>Meta {{ $t('services.advertising') }}</span>
        <span>{{ $t('services.webDesign') }}</span>
        <span>GTM</span>
        <span>Workshops</span>
      </div>
    </div>

    <!-- Core Services Section -->
    <section class="section" id="services">
      <div class="container">
        <div class="text-center mb-3">
          <span class="hero-tagline">{{ $t('services.whatWeDo') }}</span>
          <h2>{{ $t('services.title') }}</h2>
          <p style="max-width: 600px; margin: 0 auto;">{{ $t('services.subtitle') }}</p>
        </div>

        <div class="services-grid stagger reveal">
          <!-- Vibecoding -->
          <div class="card service-card">
            <div class="card-icon">
              <IconCode />
            </div>
            <h3 class="card-title">Vibecoding</h3>
            <p class="card-text">{{ $t('services.vibecoding') }}</p>
            <NuxtLink :to="localePath('/vibecoding')" class="btn btn-secondary mt-1">
              {{ $t('common.learnMore') }}
            </NuxtLink>
          </div>

          <!-- AI Consulting -->
          <div class="card service-card">
            <div class="card-icon">
              <IconBrain />
            </div>
            <h3 class="card-title">{{ $t('services.aiConsulting') }}</h3>
            <p class="card-text">{{ $t('services.aiConsultingDesc') }}</p>
            <NuxtLink :to="localePath('/ai-consulting')" class="btn btn-secondary mt-1">
              {{ $t('common.learnMore') }}
            </NuxtLink>
          </div>

          <!-- Workshops -->
          <div class="card service-card">
            <div class="card-icon">
              <IconWorkshop />
            </div>
            <h3 class="card-title">{{ $t('services.workshops') }}</h3>
            <p class="card-text">{{ $t('services.workshopsDesc') }}</p>
            <NuxtLink :to="localePath('/workshops')" class="btn btn-secondary mt-1">
              {{ $t('common.learnMore') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Digital Marketing Section -->
    <section class="section" style="background: rgba(30, 41, 59, 0.3);">
      <div class="container">
        <div class="text-center mb-3">
          <span class="hero-tagline">{{ $t('marketing.tagline') }}</span>
          <h2>15+ {{ $t('marketing.yearsOf') }} <span class="text-gradient">{{ $t('marketing.expertise') }}</span></h2>
          <p style="max-width: 600px; margin: 0 auto;">{{ $t('marketing.subtitle') }}</p>
        </div>

        <div class="services-grid stagger reveal">
          <!-- SEO -->
          <div class="card">
            <div class="card-icon">
              <IconSearch />
            </div>
            <h4 class="card-title">SEO</h4>
            <p class="card-text">{{ $t('marketing.seo') }}</p>
            <NuxtLink :to="localePath('/seo')">{{ $t('common.learnMore') }} &rarr;</NuxtLink>
          </div>

          <!-- Google Ads -->
          <div class="card">
            <div class="card-icon">
              <IconTarget />
            </div>
            <h4 class="card-title">Google Ads</h4>
            <p class="card-text">{{ $t('marketing.googleAds') }}</p>
            <NuxtLink :to="localePath('/google-ads')">{{ $t('common.learnMore') }} &rarr;</NuxtLink>
          </div>

          <!-- Meta Advertising -->
          <div class="card">
            <div class="card-icon">
              <IconTag />
            </div>
            <h4 class="card-title">{{ $t('nav.metaAds') }}</h4>
            <p class="card-text">{{ $t('marketing.metaAds') }}</p>
            <NuxtLink :to="localePath('/meta-advertising')">{{ $t('common.learnMore') }} &rarr;</NuxtLink>
          </div>

          <!-- Web Design -->
          <div class="card">
            <div class="card-icon">
              <IconLayout />
            </div>
            <h4 class="card-title">{{ $t('nav.webdesign') }}</h4>
            <p class="card-text">{{ $t('marketing.webDesign') }}</p>
            <NuxtLink :to="localePath('/webdesign')">{{ $t('common.learnMore') }} &rarr;</NuxtLink>
          </div>

          <!-- Google Tag Manager -->
          <div class="card">
            <div class="card-icon">
              <IconBarChart />
            </div>
            <h4 class="card-title">Google Tag Manager</h4>
            <p class="card-text">{{ $t('marketing.gtm') }}</p>
            <NuxtLink :to="localePath('/google-tag-manager')">{{ $t('common.learnMore') }} &rarr;</NuxtLink>
          </div>

          <!-- Analytics -->
          <div class="card">
            <div class="card-icon">
              <IconBarChart />
            </div>
            <h4 class="card-title">{{ $t('marketing.analytics') }}</h4>
            <p class="card-text">{{ $t('marketing.analyticsDesc') }}</p>
            <NuxtLink :to="localePath('/contact')">{{ $t('common.learnMore') }} &rarr;</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section">
      <div class="container">
        <div class="stats-grid reveal">
          <div class="stat-item">
            <div class="stat-number">15+</div>
            <div class="stat-label">{{ $t('stats.years') }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100+</div>
            <div class="stat-label">{{ $t('stats.projects') }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">10x</div>
            <div class="stat-label">{{ $t('stats.faster') }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">{{ $t('stats.support') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Showcase -->
    <section class="section" id="portfolio">
      <div class="container">
        <div class="text-center mb-3">
          <span class="hero-tagline">{{ $t('portfolio.tagline') }}</span>
          <h2>{{ $t('portfolio.featured') }} <span class="text-gradient">{{ $t('portfolio.projects') }}</span></h2>
          <p style="max-width: 600px; margin: 0 auto;">{{ $t('portfolio.subtitle') }}</p>
        </div>

        <div class="showcase-grid reveal">
          <!-- WELC -->
          <div class="showcase-item">
            <img class="showcase-image" src="/images/portfolio-crypto.webp" alt="WeLoveEverythingCrypto" />
            <div class="showcase-overlay">
              <span class="showcase-tag">{{ $t('portfolio.liveProject') }}</span>
              <h3 class="showcase-title">WeLoveEverythingCrypto</h3>
              <p>{{ $t('portfolio.welcDesc') }}</p>
              <a href="https://weloveeverythingcrypto.com" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top: 1rem;">
                {{ $t('portfolio.visitSite') }} <IconExternal />
              </a>
            </div>
          </div>

          <!-- Handball Stats -->
          <div class="showcase-item">
            <img class="showcase-image" src="/images/portfolio-handball.webp" alt="Handball Stats" />
            <div class="showcase-overlay">
              <span class="showcase-tag">{{ $t('portfolio.comingSoon') }}</span>
              <h3 class="showcase-title">Handball Stats App</h3>
              <p>{{ $t('portfolio.handballDesc') }}</p>
              <span class="btn btn-secondary" style="margin-top: 1rem;">
                {{ $t('portfolio.inDevelopment') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section" style="background: rgba(30, 41, 59, 0.3);">
      <div class="container">
        <div class="text-center mb-3">
          <span class="hero-tagline">{{ $t('process.tagline') }}</span>
          <h2>{{ $t('process.the') }} <span class="text-gradient">Vibecoding</span>{{ $t('process.process') }}</h2>
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

    <!-- CTA Section -->
    <section class="section">
      <div class="container">
        <div class="card text-center" style="padding: var(--space-xl); max-width: 800px; margin: 0 auto;">
          <h2 class="mb-1">{{ $t('cta.title') }}</h2>
          <p style="font-size: 1.25rem; margin-bottom: var(--space-md);">{{ $t('cta.subtitle') }}</p>
          <div class="flex-center" style="gap: var(--space-sm); flex-wrap: wrap;">
            <NuxtLink :to="localePath('/contact')" class="btn btn-primary btn-glow">
              {{ $t('cta.button') }}
              <IconArrowRight />
            </NuxtLink>
            <a href="tel:+4550587900" class="btn btn-secondary">
              <IconPhone />
              +45 50 58 79 00
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section" id="contact" style="background: rgba(30, 41, 59, 0.3);">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info reveal-left">
            <span class="hero-tagline">{{ $t('contact.tagline') }}</span>
            <h2>{{ $t('contact.title') }} <span class="text-gradient">{{ $t('contact.amazing') }}</span></h2>
            <p>{{ $t('contact.subtitle') }}</p>

            <div class="contact-item">
              <div class="contact-icon">
                <IconPhone />
              </div>
              <div>
                <strong>{{ $t('contact.phone') }}</strong><br>
                <a href="tel:+4550587900">+45 50 58 79 00</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <IconLinkedIn />
              </div>
              <div>
                <strong>LinkedIn</strong><br>
                <a href="https://www.linkedin.com/in/kennethabueg/" target="_blank" rel="noopener">
                  {{ $t('contact.connectLinkedIn') }}
                </a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <IconLocation />
              </div>
              <div>
                <strong>{{ $t('contact.businessReg') }}</strong><br>
                CVR: DK39733730<br>
                {{ $t('footer.denmark') }}
              </div>
            </div>
          </div>

          <div class="reveal-right">
            <form class="contact-form" id="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <label class="form-label" for="contact-name">{{ $t('contact.name') }} *</label>
                <input type="text" id="contact-name" name="name" class="form-input" required v-model="form.name">
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-email">Email *</label>
                <input type="email" id="contact-email" name="email" class="form-input" required v-model="form.email">
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-phone">{{ $t('contact.phone') }}</label>
                <input type="tel" id="contact-phone" name="phone" class="form-input" v-model="form.phone">
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-service">{{ $t('contact.serviceInterest') }}</label>
                <select id="contact-service" name="service" class="form-input form-select" v-model="form.service">
                  <option value="">{{ $t('contact.selectService') }}</option>
                  <option value="vibecoding">Vibecoding</option>
                  <option value="ai-consulting">{{ $t('services.aiConsulting') }}</option>
                  <option value="workshops">AI Workshops</option>
                  <option value="seo">SEO</option>
                  <option value="google-ads">Google Ads</option>
                  <option value="meta-ads">{{ $t('nav.metaAds') }}</option>
                  <option value="webdesign">{{ $t('nav.webdesign') }}</option>
                  <option value="gtm">Google Tag Manager</option>
                  <option value="other">{{ $t('contact.other') }}</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-message">{{ $t('contact.message') }} *</label>
                <textarea id="contact-message" name="message" class="form-textarea" required :placeholder="$t('contact.messagePlaceholder')" v-model="form.message"></textarea>
              </div>

              <button type="submit" class="btn btn-primary w-full">
                {{ $t('contact.send') }}
                <IconArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

// SEO
useSeoMeta({
  title: () => t('meta.homeTitle'),
  description: () => t('meta.homeDescription'),
  ogTitle: () => t('meta.homeTitle'),
  ogDescription: () => t('meta.homeDescription'),
})

// Form handling
const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const submitForm = () => {
  // For static site, we'll use mailto or a form service
  const mailtoLink = `mailto:contact@manoga.ai?subject=Contact from ${form.name}&body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AService: ${form.service}%0D%0A%0D%0AMessage:%0D%0A${form.message}`
  window.location.href = mailtoLink
}
</script>
