<script setup lang="ts">
import { siteData } from '~/data/site'
</script>

<template>
  <section id="methode" class="bg-cold-50 py-24 sm:py-28">
    <Container>
      <div class="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <div class="lg:sticky lg:top-28 lg:h-fit">
          <SectionHeader :eyebrow="siteData.process.eyebrow" :title="siteData.process.title" :subtitle="siteData.process.subtitle" />
        </div>

        <div class="grid gap-4">
          <AnimatedCard
            v-for="(step, index) in siteData.process.steps"
            :key="step.title"
            :delay="index * 0.045"
            class="grid gap-5 rounded-3xl border border-royal-950/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold-400/45 hover:shadow-xl hover:shadow-royal-950/8 sm:grid-cols-[4rem_1fr]"
          >
            <div class="grid size-16 place-items-center rounded-2xl bg-royal-950 text-gold-200 shadow-lg shadow-royal-950/16">
              <span class="font-display text-2xl font-semibold">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-royal-950">{{ step.title }}</h3>
              <p class="mt-2 leading-7 text-slate-500">{{ step.text }}</p>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </Container>
  </section>
</template>
