<template>
  <div class="bg-animation">
    <div
      v-for="i in 20"
      :key="i"
      class="particle"
      :style="{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${10 + Math.random() * 10}s`
      }"
    />
  </div>
</template>
