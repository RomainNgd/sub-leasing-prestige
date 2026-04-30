<script setup lang="ts">
const props = withDefaults(defineProps<{
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
  ariaLabel?: string
}>(), {
  variant: 'primary',
})

const classes = computed(() => [
  'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300',
  props.variant === 'primary'
    ? 'bg-gold-300 text-royal-950 shadow-[0_18px_44px_rgba(216,172,65,0.28)] hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-[0_22px_54px_rgba(216,172,65,0.38)]'
    : '',
  props.variant === 'secondary'
    ? 'border border-gold-300/70 bg-white/8 text-ivory-50 hover:-translate-y-0.5 hover:border-gold-200 hover:bg-white/14'
    : '',
  props.variant === 'ghost'
    ? 'border border-royal-950/12 bg-white text-royal-950 hover:-translate-y-0.5 hover:border-gold-400 hover:text-royal-900 hover:shadow-xl hover:shadow-royal-950/8'
    : '',
])
</script>

<template>
  <NuxtLink :to="href" :aria-label="ariaLabel" :class="classes">
    <slot />
    <UIcon name="i-lucide-arrow-right" class="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
  </NuxtLink>
</template>
