<script setup lang="ts">
import { siteData } from '~/data/site'
</script>

<template>
  <section id="locataires" class="bg-ivory-50 py-24 sm:py-28">
    <Container>
      <div class="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <AnimatedCard>
          <SectionHeader :eyebrow="siteData.tenants.eyebrow" :title="siteData.tenants.title" />
          <div class="mt-8 space-y-5 text-base leading-8 text-slate-600">
            <p v-for="paragraph in siteData.tenants.paragraphs" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </AnimatedCard>

        <div class="grid gap-4 sm:grid-cols-2">
          <AnimatedCard
            v-for="(profile, index) in siteData.tenants.profiles"
            :key="profile"
            :delay="index * 0.06"
            class="rounded-3xl border border-royal-950/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold-400/45 hover:shadow-xl hover:shadow-royal-950/8"
          >
            <Icon name="i-lucide-user-check" class="mb-5 size-7 text-gold-500" aria-hidden="true" />
            <h3 class="text-xl font-bold text-royal-950">{{ profile }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-500">
              Profil vérifié, usage encadré et respect des lieux attendu avant toute occupation.
            </p>
          </AnimatedCard>
        </div>
      </div>
    </Container>
  </section>
</template>
