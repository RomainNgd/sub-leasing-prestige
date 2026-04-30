<script setup lang="ts">
import { motion } from 'motion-v'

const props = withDefaults(defineProps<{
  delay?: number
  class?: string
}>(), {
  delay: 0,
  class: '',
})

const reduceMotion = ref(false)

onMounted(() => {
  reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

const initialState = computed(() => reduceMotion.value ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 })
const visibleState = { opacity: 1, y: 0 }
const transition = computed(() => ({
  duration: reduceMotion.value ? 0 : 0.55,
  delay: reduceMotion.value ? 0 : props.delay,
  ease: 'easeOut',
}))
</script>

<template>
  <motion.div
    :initial="initialState"
    :while-in-view="visibleState"
    :viewport="{ once: true, margin: '-80px' }"
    :transition="transition"
    :class="props.class"
  >
    <slot />
  </motion.div>
</template>
