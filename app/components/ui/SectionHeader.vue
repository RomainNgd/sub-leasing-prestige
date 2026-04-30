<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
}>(), {
  align: 'left',
  tone: 'light',
})
</script>

<template>
  <div :class="['max-w-3xl', align === 'center' ? 'mx-auto text-center' : '']">
    <p
      v-if="eyebrow"
      :class="[
        'mb-4 text-xs font-bold uppercase tracking-[0.28em]',
        tone === 'dark' ? 'text-gold-200' : 'text-gold-500',
      ]"
    >
      {{ eyebrow }}
    </p>
    <h2
      :class="[
        'font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl',
        tone === 'dark' ? 'text-ivory-50' : 'text-royal-950',
      ]"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      :class="[
        'mt-5 text-base leading-8 sm:text-lg',
        tone === 'dark' ? 'text-ivory-50/72' : 'text-slate-500',
      ]"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
