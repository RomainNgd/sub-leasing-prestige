<script setup lang="ts">
import { siteData } from '~/data/site'
</script>

<template>
  <section id="contact" class="relative overflow-hidden bg-royal-950 py-24 text-ivory-50 sm:py-28">
    <div class="contact-glow" aria-hidden="true" />
    <Container>
      <div class="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <AnimatedCard>
          <SectionHeader
            :eyebrow="siteData.contact.eyebrow"
            :title="siteData.contact.title"
            :subtitle="siteData.contact.subtitle"
            tone="dark"
          />
          <p class="mt-6 rounded-2xl border border-gold-300/24 bg-gold-300/10 p-4 text-sm leading-7 text-ivory-50/68">
            {{ siteData.contact.note }}
          </p>
        </AnimatedCard>

        <AnimatedCard class="rounded-[1.8rem] border border-white/12 bg-white/[0.07] p-6 shadow-2xl shadow-black/20 backdrop-blur-md" :delay="0.08">
          <div class="grid gap-4 sm:grid-cols-2">
            <a
              :href="`mailto:${siteData.brand.email}`"
              class="rounded-3xl border border-white/10 bg-white/8 p-6 transition hover:-translate-y-0.5 hover:border-gold-300/50 hover:bg-white/12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
            >
              <UIcon name="i-lucide-mail" class="size-6 text-gold-200" aria-hidden="true" />
              <p class="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-gold-200">E-mail</p>
              <p class="mt-2 break-words text-lg font-semibold text-white">{{ siteData.brand.email }}</p>
            </a>

            <a
              :href="siteData.brand.phoneHref"
              class="rounded-3xl border border-white/10 bg-white/8 p-6 transition hover:-translate-y-0.5 hover:border-gold-300/50 hover:bg-white/12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
            >
              <UIcon name="i-lucide-phone" class="size-6 text-gold-200" aria-hidden="true" />
              <p class="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-gold-200">Téléphone</p>
              <p class="mt-2 text-lg font-semibold text-white">{{ siteData.brand.phone }}</p>
            </a>
          </div>
          <div class="mt-5 rounded-3xl border border-gold-300/24 bg-gold-300/10 p-6">
            <p class="text-sm font-bold uppercase tracking-[0.2em] text-gold-200">Réponse rapide</p>
            <p class="mt-3 leading-7 text-ivory-50/72">
              Présentez brièvement votre bien par e-mail ou téléphone : localisation, surface, nombre de pièces et disponibilité souhaitée.
            </p>
          </div>
        </AnimatedCard>
      </div>
    </Container>
  </section>
</template>
