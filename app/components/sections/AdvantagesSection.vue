<script setup lang="ts">
import { siteData } from '~/data/site'
</script>

<template>
  <section id="avantages" class="relative overflow-hidden bg-royal-950 py-24 text-ivory-50 sm:py-28">
    <div class="section-glow" aria-hidden="true" />
    <Container>
      <SectionHeader
        :eyebrow="siteData.advantages.eyebrow"
        :title="siteData.advantages.title"
        :subtitle="siteData.advantages.subtitle"
        align="center"
        tone="dark"
      />

      <div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatedCard
          v-for="(item, index) in siteData.advantages.items"
          :key="item.title"
          :delay="index * 0.05"
          class="group rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-gold-300/42 hover:bg-white/[0.075]"
        >
          <div class="mb-6 grid size-12 place-items-center rounded-2xl border border-gold-300/30 bg-gold-300/12 text-gold-200">
            <UIcon :name="item.icon" class="size-6" aria-hidden="true" />
          </div>
          <h3 class="text-xl font-bold text-white">{{ item.title }}</h3>
          <p class="mt-3 leading-7 text-ivory-50/68">{{ item.text }}</p>
        </AnimatedCard>
      </div>
    </Container>
  </section>
</template>
