<script setup lang="ts">
import { siteData } from '~/data/site'

const isScrolled = ref(false)
const isOpen = ref(false)

const updateScroll = () => {
  isScrolled.value = window.scrollY > 16
}

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll)
})

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 transition-all duration-300">
    <Container>
      <nav
        :class="[
          'mt-4 flex items-center justify-between rounded-full border px-4 py-3 transition duration-300 lg:px-5',
          isScrolled || isOpen
            ? 'border-white/14 bg-royal-950/82 shadow-2xl shadow-royal-950/20 backdrop-blur-xl'
            : 'border-white/14 bg-royal-950/88 shadow-2xl shadow-royal-950/18 backdrop-blur-xl',
        ]"
        aria-label="Navigation principale"
      >
        <NuxtLink
          to="#accueil"
          :aria-label="`Retour à l'accueil ${siteData.brand.name}`"
          class="flex h-16 w-48 items-center justify-center rounded-[1.35rem] border border-gold-300/55 bg-ivory-50 px-4 py-2 shadow-[0_14px_34px_rgba(0,0,0,0.18)] ring-1 ring-white/25 transition hover:-translate-y-0.5 hover:border-gold-200 hover:shadow-[0_18px_44px_rgba(216,172,65,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300 sm:w-60 lg:w-64"
          @click="closeMenu"
        >
          <img
            :src="siteData.brand.logo"
            :alt="`Logo ${siteData.brand.name}`"
            width="787"
            height="317"
            class="block h-12 w-full object-contain"
            loading="eager"
            decoding="async"
          >
        </NuxtLink>

        <div class="hidden items-center gap-1 lg:flex">
          <NuxtLink
            v-for="item in siteData.navigation"
            :key="item.href"
            :to="item.href"
            class="rounded-full px-4 py-2 text-sm font-semibold text-ivory-50/76 transition hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <div class="hidden lg:block">
          <PrimaryButton href="#contact" variant="primary" aria-label="Contacter Sub Leasing Prestige">
            Nous contacter
          </PrimaryButton>
        </div>

        <button
          type="button"
          class="grid size-11 place-items-center rounded-full border border-white/14 text-ivory-50 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300 lg:hidden"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          aria-label="Ouvrir ou fermer le menu"
          @click="isOpen = !isOpen"
        >
          <UIcon :name="isOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="size-5" aria-hidden="true" />
        </button>
      </nav>

      <Transition name="mobile-nav">
        <div
          v-if="isOpen"
          id="mobile-menu"
          class="mt-3 rounded-3xl border border-white/12 bg-royal-950/94 p-3 shadow-2xl shadow-royal-950/30 backdrop-blur-xl lg:hidden"
        >
          <NuxtLink
            v-for="item in siteData.navigation"
            :key="item.href"
            :to="item.href"
            class="block rounded-2xl px-4 py-3 font-semibold text-ivory-50/82 transition hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
            @click="closeMenu"
          >
            {{ item.label }}
          </NuxtLink>
          <PrimaryButton href="#contact" class="mt-2 w-full" @click="closeMenu">
            Nous contacter
          </PrimaryButton>
        </div>
      </Transition>
    </Container>
  </header>
</template>
