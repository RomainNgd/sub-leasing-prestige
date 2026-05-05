<script setup lang="ts">
import { siteData } from '~/data/site'
</script>

<template>
  <footer class="bg-royal-950 text-ivory-50">
    <Container>
      <div class="grid gap-10 border-t border-white/10 py-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p class="font-display text-2xl font-semibold">{{ siteData.brand.name }}</p>
          <p class="mt-3 max-w-md text-sm leading-7 text-ivory-50/68">
            Gestion locative premium pour propriétaires de biens meublés, avec loyer garanti et sous-location professionnelle encadrée.
          </p>
        </div>

        <div>
          <p class="text-sm font-bold uppercase tracking-[0.22em] text-gold-200">Navigation</p>
          <div class="mt-4 grid gap-2">
            <NuxtLink
              v-for="item in siteData.navigation"
              :key="item.href"
              :to="item.href"
              class="w-fit text-sm text-ivory-50/68 transition hover:text-gold-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
            >
              {{ item.label }}
            </NuxtLink>
            <NuxtLink
              to="/mentions-legales"
              class="mt-1 w-fit text-sm text-ivory-50/68 transition hover:text-gold-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
            >
              Mentions légales
            </NuxtLink>
          </div>
        </div>

        <div>
          <p class="text-sm font-bold uppercase tracking-[0.22em] text-gold-200">Contact</p>
          <div class="mt-4 grid gap-2 text-sm text-ivory-50/72">
            <a :href="`mailto:${siteData.brand.email}`" class="transition hover:text-gold-200">{{ siteData.brand.email }}</a>
            <a :href="siteData.brand.phoneHref" class="transition hover:text-gold-200">{{ siteData.brand.phone }}</a>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-ivory-50/54 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ new Date().getFullYear() }} {{ siteData.brand.name }}. Tous droits réservés.</p>
        <p>Site powered by <a href="https://majorcraft.romainnigond.fr" target="_blank" rel="noopener noreferrer" class="transition hover:text-gold-200">Majorcraft</a></p>
      </div>
    </Container>
  </footer>
</template>
