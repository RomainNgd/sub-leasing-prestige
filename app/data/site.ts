const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://sub-prestige.fr'

export const siteData = {
  brand: {
    name: 'Sub Leasing Prestige',
    shortName: 'Sub Prestige',
    legalName: 'EI Quentin Taymont',
    publicationDirector: 'Quentin Taymont',
    baseline: 'Gestion locative premium',
    logo: '/images/Sublocation.png',
    email: 'contact@sub-prestige.com',
    phone: '+33 7 67 16 50 18',
    phoneHref: 'tel:+33767165018',
    city: 'Choisy-au-Bac',
    address: {
      streetAddress: '673 rue du Sergenteret',
      postalCode: '60750',
      addressLocality: 'Choisy-au-Bac',
      addressCountry: 'FR',
    },
    areaServed: ['France', 'Oise', 'Compiègne', 'Choisy-au-Bac'],
  },
  seo: {
    title: 'Gestion locative premium et loyer garanti',
    description:
      'Sub Leasing Prestige accompagne les propriétaires avec une solution de sous-location professionnelle, loyer mensuel garanti, gestion complète et sélection rigoureuse des occupants.',
    image: '/images/hero-residence.png',
    imageWidth: 1200,
    imageHeight: 630,
    url: siteUrl,
  },
  navigation: [
    { label: 'À propos', href: '/#a-propos' },
    { label: 'Avantages', href: '/#avantages' },
    { label: 'Méthode', href: '/#methode' },
    { label: 'Locataires', href: '/#locataires' },
    { label: 'FAQ', href: '/#faq' },
  ],
  hero: {
    eyebrow: 'Sous-location professionnelle pour biens meublés',
    title: 'Le confort professionnel, sans compromis pour votre bien.',
    subtitle:
      "Sub Leasing Prestige transforme la gestion de votre logement meublé en revenu fixe, ponctuel et piloté avec exigence, de la sélection des occupants à l'entretien quotidien.",
    primaryCta: { label: 'Évaluer mon bien', href: '/#contact' },
    secondaryCta: { label: 'Découvrir la méthode', href: '/#methode' },
    trust: ['Loyer fixe mensuel', 'Aucun frais de gestion', 'Sélection haut de gamme'],
    metrics: [
      { value: '0 €', label: 'frais cachés' },
      { value: '100%', label: 'gestion déléguée' },
      { value: '24/7', label: 'suivi des séjours' },
    ],
  },
  about: {
    eyebrow: 'À propos',
    title: 'Un partenaire locatif fiable pour propriétaires exigeants.',
    paragraphs: [
      'Sub Leasing Prestige, spécialiste de la sous-location professionnelle, vous garantit un loyer mensuel fixe et sécurisé, sans frais de gestion. Ce loyer est défini dès la signature du contrat et reste stable quelle que soit la saison.',
      "Votre bien est ensuite exploité légalement sur des plateformes de location courte durée, auprès d'une clientèle soigneusement sélectionnée. Notre équipe prend en charge l'intégralité de la gestion : vous percevez vos loyers avec sérénité, sans effort opérationnel.",
      "Choisir Sub Leasing Prestige, c'est confier son logement à des professionnels qui prennent soin de votre bien et optimisent sa rentabilité dans une logique durable.",
    ],
    highlights: [
      'Bail professionnel conforme',
      'Gestion complète sans commission',
      'Logement suivi avant, pendant et après séjour',
    ],
    image: {
      src: '/images/a-propos.png',
      alt: 'Appartement meublé haut de gamme préparé pour une location professionnelle',
    },
  },
  advantages: {
    eyebrow: 'Pourquoi nous choisir ?',
    title: 'Une expérience simple, lisible et gagnant-gagnant.',
    subtitle:
      'Le service reprend les points forts du site existant : sécurité, rentabilité, flexibilité et entretien quotidien, avec une présentation plus claire pour convaincre rapidement.',
    items: [
      {
        icon: 'i-lucide-shield-check',
        title: 'Sérénité',
        text: 'Nous prenons en charge la gestion complète de votre bien, sans aucun frais caché.',
      },
      {
        icon: 'i-lucide-banknote',
        title: 'Rentabilité',
        text: 'Le versement de votre loyer chaque mois est notre engagement principal.',
      },
      {
        icon: 'i-lucide-refresh-cw',
        title: 'Flexibilité',
        text: 'Vous conservez la possibilité de récupérer votre bien selon les conditions prévues au bail.',
      },
      {
        icon: 'i-lucide-file-check-2',
        title: 'Assurance',
        text: 'Votre logement est protégé par une assurance spécifique contre les dégradations.',
      },
      {
        icon: 'i-lucide-lock-keyhole',
        title: 'Sécurité',
        text: 'Un bail professionnel conforme encadre la relation et clarifie les engagements.',
      },
      {
        icon: 'i-lucide-sparkles',
        title: 'Entretien',
        text: 'Votre bien est entretenu régulièrement par une équipe qualifiée.',
      },
    ],
  },
  process: {
    eyebrow: 'Notre méthode',
    title: 'Une formule simple, 100% gagnant-gagnant.',
    subtitle:
      'Chaque étape est pensée pour limiter votre charge mentale et sécuriser la mise en location.',
    steps: [
      {
        title: 'Prise de rendez-vous',
        text: 'Une première rencontre pour présenter notre solution et comprendre votre bien.',
      },
      {
        title: 'Visite du logement',
        text: "Nous évaluons sur place le potentiel locatif, l'emplacement et les besoins éventuels.",
      },
      {
        title: 'Signature du bail',
        text: "Une fois l'état des lieux réalisé, nous signons un bail pour devenir officiellement vos locataires.",
      },
      {
        title: 'Ameublement & décoration',
        text: 'Si nécessaire, notre équipe vous accompagne pour adapter le bien aux standards attendus.',
      },
      {
        title: 'Recherche des résidents',
        text: 'Mise en ligne du logement et sélection rigoureuse des locataires et voyageurs.',
      },
      {
        title: 'Nettoyage & maintenance',
        text: "Notre équipe assure l'entretien complet du logement entre les séjours.",
      },
    ],
  },
  tenants: {
    eyebrow: 'Nos locataires',
    title: 'Des occupants sélectionnés pour leur sérieux.',
    paragraphs: [
      'Nous accueillons des professionnels en déplacement, des cadres, des prestataires et des salariés récemment arrivés dans la région pour une mission courte ou moyenne durée.',
      "Nous hébergeons également des touristes et voyageurs de passage, à la recherche d'un lieu confortable, calme et bien entretenu. Chaque profil est sélectionné pour son sérieux, sa fiabilité et son respect des lieux.",
      'Cette exigence permet de garantir une occupation sans tracas, un logement préservé et une sérénité totale pour les propriétaires.',
    ],
    profiles: ['Cadres en mission', 'Prestataires qualifiés', 'Voyageurs premium', 'Salariés relocalisés'],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Les réponses avant de nous confier votre bien.',
    items: [
      {
        question: 'Comment savoir si mon bien est éligible à votre service ?',
        answer: [
          { text: 'Il vous suffit de nous contacter pour en discuter ! Si besoin, nous pouvons organiser une rencontre afin d’évaluer ensemble si votre logement correspond à nos critères. Nos coordonnées sont disponibles en bas de cette page — n’hésitez pas, nous serons ravis d’échanger avec vous.' },
        ],
      },
      {
        question: 'Êtes-vous une agence immobilière ?',
        answer: [
          { text: 'Non, nous ne sommes pas une agence immobilière. Il n’y a donc ' },
          { text: 'aucun frais d’agence ni commission', strong: true },
          { text: ' à prévoir. Nous proposons un service de ' },
          { text: 'gestion locative sur-mesure', strong: true },
          { text: ' : nous louons votre bien pour le mettre à disposition de notre clientèle soigneusement sélectionnée, composée de professionnels et de voyageurs haut de gamme. Que le logement soit occupé ou non, ' },
          { text: 'vous percevez vos revenus de façon fixe, fiable et ponctuelle.', strong: true },
        ],
      },
      {
        question: 'Quelle est la différence entre votre bail et un bail d’habitation classique ?',
        answer: [
          { text: 'Contrairement à un bail classique signé avec un particulier — souvent à durée indéterminée et avec des délais de préavis longs — notre contrat est un ' },
          { text: 'bail dérogatoire', strong: true },
          { text: ', conclu entre vous (le propriétaire) et notre société. Ce type de bail est ' },
          { text: 'beaucoup plus souple', strong: true },
          { text: ' : les deux parties peuvent y mettre fin à tout moment, avec un simple ' },
          { text: 'préavis de quelques semaines', strong: true },
          { text: '. C’est une solution plus flexible et sécurisante, qui vous permet de garder la maîtrise de votre bien sans les contraintes habituelles.' },
        ],
      },
      {
        question: 'Le loyer est-il vraiment garanti chaque mois ?',
        answer: [
          { text: 'Absolument. Le paiement de votre loyer est notre priorité et notre engagement numéro un. Votre bien représente pour nous un véritable outil de travail, et c’est en vous versant un loyer fixe et ponctuel, chaque début de mois, que nous assurons la stabilité de notre activité.\nChez ' },
          { text: 'Sub Leasing Prestige', strong: true },
          { text: ', vous êtes payé que votre logement soit occupé ou non. Vous avez ainsi la tranquillité d’esprit d’avoir trouvé un locataire fiable, sérieux et durable.' },
        ],
      },
      {
        question: 'Comment assurez-vous le bon entretien du bien ?',
        answer: [
          { text: 'Nous faisons intervenir régulièrement notre personnel d’entretien pour vérifier l’état du logement, effectuer les contrôles nécessaires et garantir une remise en état irréprochable entre chaque séjour. Cela nous permet d’assurer la ' },
          { text: 'qualité constante du bien', strong: true },
          { text: ', de préserver sa valeur sur le long terme et de maintenir ' },
          { text: 'l’image haut de gamme', strong: true },
          { text: ' de nos services. Votre logement reste toujours en excellent état, comme si c’était le nôtre.' },
        ],
      },
      {
        question: 'Vais-je perdre mes avantages fiscaux LMNP ?',
        answer: [
          { text: 'Non, vous conservez tous les avantages du statut ' },
          { text: 'LMNP (Loueur Meublé Non Professionnel)', strong: true },
          { text: '. Notre bail est spécialement conçu pour être ' },
          { text: 'compatible avec ce régime fiscal', strong: true },
          { text: ', tant que votre bien reste meublé et répond aux critères exigés par l’administration. Vous continuez donc à bénéficier de la fiscalité avantageuse du LMNP, tout en déléguant la gestion à un professionnel de confiance.' },
        ],
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Parlons de votre logement.',
    subtitle:
      'Nous serions ravis de répondre à vos questions. Contactez-nous directement pour une première évaluation.',
  },
}

export type SiteData = typeof siteData
