<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand Column -->
        <div class="footer-brand">
          <NuxtLink :to="localePath('/')" class="logo">
            <span class="logo-icon">M</span>
            <span class="logo-text">Manoga<span class="text-gradient">AI</span></span>
          </NuxtLink>
          <p>{{ $t('footer.description') }}</p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/kennethabueg/" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <IconLinkedIn />
            </a>
          </div>
        </div>

        <!-- Services Column -->
        <div class="footer-column">
          <h4 class="footer-heading">{{ $t('footer.digitalMarketing') }}</h4>
          <ul class="footer-links">
            <li><NuxtLink :to="localePath('/seo')">{{ $t('footer.seoServices') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/google-ads')">Google Ads</NuxtLink></li>
            <li><NuxtLink :to="localePath('/meta-advertising')">{{ $t('nav.metaAds') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/webdesign')">{{ $t('nav.webdesign') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/google-tag-manager')">Google Tag Manager</NuxtLink></li>
          </ul>
        </div>

        <!-- AI Services Column -->
        <div class="footer-column">
          <h4 class="footer-heading">{{ $t('footer.aiServices') }}</h4>
          <ul class="footer-links">
            <li><NuxtLink :to="localePath('/ai-consulting')">{{ $t('nav.aiConsulting') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/vibecoding')">Vibecoding</NuxtLink></li>
            <li><NuxtLink :to="localePath('/workshops')">AI Workshops</NuxtLink></li>
            <li><NuxtLink :to="localePath('/portfolio')">Portfolio</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div class="footer-column">
          <h4 class="footer-heading">{{ $t('footer.contact') }}</h4>
          <ul class="footer-links">
            <li>
              <a href="tel:+4550587900">+45 50 58 79 00</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kennethabueg/" target="_blank" rel="noopener">
                {{ $t('footer.linkedinProfile') }}
              </a>
            </li>
            <li>CVR: DK39733730</li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Manoga AI. {{ $t('footer.allRights') }}</p>
        <p>CVR: DK39733730 | {{ $t('footer.denmark') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

// Hardcode year for SSR to prevent hydration mismatch
// (prerendered pages might have different year than client)
const currentYear = 2025
</script>
