/**
 * Hydration Warning Filter Plugin
 *
 * This plugin suppresses harmless hydration mismatch warnings caused by
 * Vue Router's NuxtLink rendering empty class="" attributes on inactive links.
 *
 * Root Cause: Vue Router renders class="" on server for inactive links,
 * but Vue 3.4+ strict hydration checks flag this as a mismatch.
 *
 * This is a known Vue Router behavior (see: https://github.com/vuejs/vue-router/issues/2804)
 * The mismatch is cosmetic and doesn't affect functionality.
 */
export default defineNuxtPlugin((nuxtApp) => {
  // Set up Vue warning handler to filter hydration warnings
  nuxtApp.vueApp.config.warnHandler = (msg, _instance, _trace) => {
    // Filter out the general "Hydration completed but contains mismatches" warning
    // This warning appears after Vue Router's empty class="" attribute mismatches
    if (msg.includes('Hydration completed but contains mismatches')) {
      return // Suppress this specific warning
    }

    // Filter out attribute mismatch warnings for class (empty class="" issue)
    if (msg.includes('Hydration') && msg.includes('attribute mismatch') && msg.includes('class')) {
      return // Suppress class attribute mismatch warnings
    }

    // Log all other warnings normally
    console.warn(`[Vue warn]: ${msg}`)
  }
})
