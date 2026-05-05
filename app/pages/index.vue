<script setup lang="ts">
import { siteData } from '~/data/site'

const siteUrl = siteData.seo.url.replace(/\/$/, '')
const canonical = `${siteUrl}/`
const ogImage = siteData.seo.image.startsWith('http')
  ? siteData.seo.image
  : `${siteUrl}${siteData.seo.image}`
const fullTitle = `${siteData.seo.title} | ${siteData.brand.name}`
const organizationId = `${canonical}#organization`

useSeoMeta({
  title: siteData.seo.title,
  description: siteData.seo.description,
  ogTitle: fullTitle,
  ogDescription: siteData.seo.description,
  ogImage,
  ogImageWidth: siteData.seo.imageWidth,
  ogImageHeight: siteData.seo.imageHeight,
  ogImageAlt: `${siteData.brand.name} - ${siteData.seo.title}`,
  ogUrl: canonical,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: fullTitle,
  twitterDescription: siteData.seo.description,
  twitterImage: ogImage,
  twitterImageAlt: `${siteData.brand.name} - ${siteData.seo.title}`,
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
        '@graph': [
          {
            '@id': organizationId,
            '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
            name: siteData.brand.name,
            legalName: siteData.brand.legalName,
            url: canonical,
            logo: `${siteUrl}${siteData.brand.logo}`,
            image: ogImage,
            email: siteData.brand.email,
            telephone: siteData.brand.phone,
            address: {
              '@type': 'PostalAddress',
              ...siteData.brand.address,
            },
            areaServed: siteData.brand.areaServed.map(area => ({
              '@type': 'Place',
              name: area,
            })),
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              email: siteData.brand.email,
              telephone: siteData.brand.phone,
              availableLanguage: ['fr'],
            },
          },
          {
            '@type': 'Service',
            name: `${siteData.brand.name} - ${siteData.seo.title}`,
            description: siteData.seo.description,
            serviceType: 'Gestion locative et sous-location professionnelle',
            areaServed: siteData.brand.areaServed.map(area => ({
              '@type': 'Place',
              name: area,
            })),
            provider: {
              '@id': organizationId,
            },
          },
          {
            '@type': 'FAQPage',
            inLanguage: 'fr',
            mainEntity: siteData.faq.items.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer.map(part => part.text).join(''),
              },
            })),
          },
        ],
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
