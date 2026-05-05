<script setup lang="ts">
import { siteData } from '~/data/site'

const canonical = `${siteData.seo.url.replace(/\/$/, '')}/mentions-legales`

useSeoMeta({
  title: 'Mentions légales',
  description: `Mentions légales du site ${siteData.brand.name}. Informations sur l'éditeur, l'hébergement et les données personnelles.`,
  ogTitle: `Mentions légales - ${siteData.brand.name}`,
  ogDescription: `Mentions légales du site ${siteData.brand.name}.`,
  robots: 'noindex, follow',
})

useHead({
  link: [
    { rel: 'canonical', href: canonical },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-cold-50 text-royal-950">
    <AppNavbar />

    <main class="pt-32">
      <Container>
        <article class="mx-auto max-w-4xl py-16">
          <NuxtLink
            to="/"
            class="mb-8 inline-flex items-center gap-2 text-sm font-bold text-gold-500 transition hover:text-gold-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
          >
            <Icon name="i-lucide-arrow-left" class="size-4" aria-hidden="true" />
            Retour à l'accueil
          </NuxtLink>

          <h1 class="font-display text-5xl font-semibold leading-tight text-royal-950">
            Mentions légales
          </h1>
          <p class="mt-5 text-sm leading-7 text-bluegray-500">
            Informations relatives à l'éditeur du site, à son hébergement et à l'utilisation des données personnelles.
          </p>

          <div class="mt-12 space-y-10 rounded-3xl border border-royal-950/10 bg-white p-6 shadow-sm sm:p-8">
            <section>
              <h2 class="text-2xl font-bold">Éditeur du site</h2>
              <div class="mt-4 space-y-2 leading-7 text-slate-600">
                <p>Nom commercial : {{ siteData.brand.name }}</p>
                <p>Raison sociale : {{ siteData.brand.legalName }}</p>
                <p>Forme juridique : Micro-entreprise</p>
                <p>Capital social : non applicable</p>
                <p>SIRET : 94477727500016</p>
                <p>Adresse du siège social : {{ siteData.brand.address.streetAddress }}, {{ siteData.brand.address.addressLocality }}, {{ siteData.brand.address.postalCode }}</p>
                <p>E-mail : <a :href="`mailto:${siteData.brand.email}`" class="font-semibold text-royal-950 underline decoration-gold-400/50 underline-offset-4">{{ siteData.brand.email }}</a></p>
                <p>Téléphone : <a :href="siteData.brand.phoneHref" class="font-semibold text-royal-950 underline decoration-gold-400/50 underline-offset-4">{{ siteData.brand.phone }}</a></p>
              </div>
            </section>

            <section>
              <h2 class="text-2xl font-bold">Directeur de la publication</h2>
              <p class="mt-4 leading-7 text-slate-600">
                Directeur de la publication : {{ siteData.brand.publicationDirector }}.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold">Hébergement</h2>
              <p class="mt-4 leading-7 text-slate-600">
                Site hébergé par : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold">Propriété intellectuelle</h2>
              <p class="mt-4 leading-7 text-slate-600">
                L'ensemble des contenus présents sur ce site, notamment les textes, visuels, logos, éléments graphiques et structure de page, est protégé par le droit de la propriété intellectuelle. Toute reproduction ou utilisation non autorisée est interdite.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold">Données personnelles</h2>
              <p class="mt-4 leading-7 text-slate-600">
                Les données transmises par e-mail ou téléphone sont utilisées uniquement pour répondre aux demandes de contact et évaluer les biens proposés. Vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à {{ siteData.brand.email }}.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold">Cookies</h2>
              <p class="mt-4 leading-7 text-slate-600">
                Le site n'utilise pas de cookies publicitaires ni d'outil de mesure d'audience nécessitant un consentement.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold">Responsabilité</h2>
              <p class="mt-4 leading-7 text-slate-600">
                Les informations présentées sur ce site sont fournies à titre indicatif. Elles peuvent être modifiées à tout moment. L'éditeur s'efforce d'assurer l'exactitude des informations publiées, sans garantir l'absence totale d'erreurs.
              </p>
            </section>
          </div>
        </article>
      </Container>
    </main>

    <AppFooter />
  </div>
</template>
