<script setup lang="ts">
import { siteData } from '~/data/site'
</script>

<template>
  <section id="a-propos" class="bg-ivory-50 py-24 sm:py-28">
    <Container>
      <div class="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <AnimatedCard class="relative order-2 lg:order-1">
          <div class="absolute -left-5 -top-5 hidden h-32 w-32 rounded-full border border-gold-300/40 lg:block" aria-hidden="true" />
          <div class="relative overflow-hidden rounded-[1.8rem] border border-royal-950/10 bg-white p-3 shadow-2xl shadow-royal-950/10">
            <NuxtImg
              :src="siteData.about.image.src"
              :alt="siteData.about.image.alt"
              width="1448"
              height="1086"
              sizes="sm:92vw md:52vw lg:38vw"
              loading="lazy"
              class="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </AnimatedCard>

        <AnimatedCard class="order-1 lg:order-2" :delay="0.08">
          <SectionHeader :eyebrow="siteData.about.eyebrow" :title="siteData.about.title" />
          <div class="mt-8 space-y-5 text-base leading-8 text-slate-600">
            <p v-for="paragraph in siteData.about.paragraphs" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
          <div class="mt-8 grid gap-3 sm:grid-cols-3">
            <div
              v-for="highlight in siteData.about.highlights"
              :key="highlight"
              class="flex min-h-20 items-center gap-3 rounded-2xl border border-royal-950/10 bg-white px-4 py-4 text-left text-sm font-bold leading-6 text-royal-950 shadow-sm"
            >
              <span class="grid size-10 shrink-0 place-items-center rounded-xl border border-gold-400/25 bg-gold-300/12 text-gold-500">
                <UIcon name="i-lucide-badge-check" class="size-5" aria-hidden="true" />
              </span>
              <span>{{ highlight }}</span>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </Container>
  </section>
</template>
