<script setup lang="ts">
import { siteData } from '~/data/site'
</script>

<template>
  <section id="faq" class="bg-cold-50 py-24 sm:py-28">
    <Container>
      <SectionHeader
        :eyebrow="siteData.faq.eyebrow"
        :title="siteData.faq.title"
        align="center"
      />

      <div class="mx-auto mt-12 grid max-w-4xl gap-4">
        <AnimatedCard
          v-for="(item, index) in siteData.faq.items"
          :key="item.question"
          :delay="index * 0.04"
        >
          <details class="group rounded-3xl border border-royal-950/10 bg-white p-6 shadow-sm open:border-gold-400/50">
            <summary class="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-bold text-royal-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400">
              {{ item.question }}
              <Icon name="i-lucide-chevron-down" class="size-5 shrink-0 text-gold-500 transition group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p class="mt-4 whitespace-pre-line leading-7 text-slate-600">
              <template
                v-for="(part, partIndex) in item.answer"
                :key="`${item.question}-${partIndex}`"
              >
                <strong v-if="part.strong" class="font-bold text-royal-950">{{ part.text }}</strong>
                <span v-else>{{ part.text }}</span>
              </template>
            </p>
          </details>
        </AnimatedCard>
      </div>
    </Container>
  </section>
</template>
