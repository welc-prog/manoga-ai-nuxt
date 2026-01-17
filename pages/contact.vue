<template>
  <div>
    <section class="page-header">
      <div class="container">
        <span class="page-subtitle">{{ $t('contact.tagline') }}</span>
        <h1>{{ $t('contact.title') }} <span class="text-gradient">{{ $t('contact.amazing') }}</span></h1>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info reveal-left">
            <p style="font-size: 1.1rem;">{{ $t('contact.subtitle') }}</p>

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
            <form class="contact-form" @submit.prevent="submitForm">
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

useSeoMeta({
  title: () => `${t('contact.tagline')} | Manoga AI`,
  description: () => t('contact.subtitle'),
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const submitForm = () => {
  const mailtoLink = `mailto:contact@manoga.ai?subject=Contact from ${form.name}&body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AService: ${form.service}%0D%0A%0D%0AMessage:%0D%0A${form.message}`
  window.location.href = mailtoLink
}
</script>
