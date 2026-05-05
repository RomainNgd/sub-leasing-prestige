<script setup lang="ts">
import { motion } from 'motion-v'
import { siteData } from '~/data/site'
</script>

<template>
  <section id="accueil" class="relative min-h-[92svh] overflow-hidden bg-ivory-50 pt-32 text-royal-950 sm:pt-36">
    <div class="hero-aurora" aria-hidden="true" />
    <Container>
      <div class="grid items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28">
        <motion.div
          :initial="{ opacity: 0, y: 28 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.65, ease: 'easeOut' }"
          class="relative z-10"
        >
          <p class="mb-5 inline-flex rounded-full border border-gold-400/28 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-gold-500 shadow-sm">
            {{ siteData.hero.eyebrow }}
          </p>
          <h1 class="max-w-4xl font-display text-5xl font-semibold leading-[0.98] text-balance sm:text-6xl lg:text-7xl">
            {{ siteData.hero.title }}
          </h1>
          <p class="mt-7 max-w-2xl text-lg leading-8 text-bluegray-500 sm:text-xl">
            {{ siteData.hero.subtitle }}
          </p>

          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton :href="siteData.hero.primaryCta.href">
              {{ siteData.hero.primaryCta.label }}
            </PrimaryButton>
            <PrimaryButton :href="siteData.hero.secondaryCta.href" variant="ghost">
              {{ siteData.hero.secondaryCta.label }}
            </PrimaryButton>
          </div>

          <div class="mt-9 flex flex-wrap gap-3">
            <span
              v-for="item in siteData.hero.trust"
              :key="item"
              class="inline-flex items-center gap-2 rounded-full border border-royal-950/10 bg-white px-4 py-2 text-sm font-medium text-royal-950/76 shadow-sm"
            >
              <Icon name="i-lucide-check" class="size-4 text-gold-500" aria-hidden="true" />
              {{ item }}
            </span>
          </div>
        </motion.div>

        <motion.div
          :initial="{ opacity: 0, scale: 0.96, y: 30 }"
          :animate="{ opacity: 1, scale: 1, y: 0 }"
          :transition="{ duration: 0.75, delay: 0.12, ease: 'easeOut' }"
          class="relative"
        >
          <div class="relative overflow-hidden rounded-[2rem] border border-royal-950/10 bg-white p-3 shadow-[0_30px_90px_rgba(14,32,68,0.14)]">
            <NuxtImg
              src="/images/hero-residence.png"
              alt="Résidence premium exploitée en gestion locative haut de gamme"
              width="1536"
              height="843"
              sizes="sm:100vw md:92vw lg:48vw"
              format="webp"
              preload
              class="aspect-[1.25/1] w-full rounded-[1.45rem] object-cover"
            />
            <div class="absolute inset-x-8 bottom-8 rounded-3xl border border-white/16 bg-royal-950/78 p-5 shadow-2xl backdrop-blur-xl">
              <p class="text-xs font-bold uppercase tracking-[0.24em] text-gold-200">Tableau propriétaire</p>
              <div class="mt-4 grid grid-cols-3 gap-3">
                <div v-for="metric in siteData.hero.metrics" :key="metric.label">
                  <p class="font-display text-2xl font-semibold text-white">{{ metric.value }}</p>
                  <p class="mt-1 text-xs text-ivory-50/62">{{ metric.label }}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
</template>
