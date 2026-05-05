<script setup lang="ts">
import { motion } from 'motion-v'

const props = withDefaults(defineProps<{
  delay?: number
  class?: string
}>(), {
  delay: 0,
  class: '',
})

const initialState = { opacity: 1, y: 0 }
const visibleState = { opacity: 1, y: 0 }
const transition = {
  duration: 0.35,
  delay: props.delay,
  ease: 'easeOut',
}
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
