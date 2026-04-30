<script setup lang="ts">
import { siteData } from '~/data/site'

const canonical = siteData.seo.url

useSeoMeta({
  title: siteData.seo.title,
  description: siteData.seo.description,
  ogTitle: siteData.seo.title,
  ogDescription: siteData.seo.description,
  ogImage: siteData.seo.image,
  ogUrl: canonical,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: siteData.seo.title,
  twitterDescription: siteData.seo.description,
  twitterImage: siteData.seo.image,
})

useHead({
  link: [
    { rel: 'canonical', href: canonical },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: siteData.brand.name,
        description: siteData.seo.description,
        serviceType: 'Gestion locative et sous-location professionnelle',
        areaServed: 'France',
        provider: {
          '@type': 'Organization',
          name: siteData.brand.name,
          email: siteData.brand.email,
          telephone: siteData.brand.phone,
          url: canonical,
        },
      }),
    },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-cold-50 text-royal-950">
    <AppNavbar />
    <main>
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <ProcessSection />
      <TenantsSection />
      <FaqSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
