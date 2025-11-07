export const useSEO = () => {
  const baseUrl = 'https://communityday.awscmr.com'
  
  const defaultMeta = {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    author: 'AWS User Groups Cameroon',
    themeColor: '#ff9b00',
    'msapplication-TileColor': '#ff9b00',
    'geo.region': 'CM-SW',
    'geo.placename': 'Buea, Cameroon',
    'geo.position': '4.1590;9.2971',
    ICBM: '4.1590, 9.2971'
  }

  const generatePageSEO = (page: {
    title: string
    description: string
    keywords?: string
    path: string
    lang?: string
    image?: string
  }) => {
    const fullUrl = `${baseUrl}${page.path}`
    const ogImage = page.image || `${baseUrl}/white-aws-community-day.svg`
    
    return {
      title: page.title,
      meta: [
        { name: 'description', content: page.description },
        { name: 'keywords', content: page.keywords || 'AWS, Community Day, Cameroon, Cloud Computing, Tech Conference' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: page.title },
        { property: 'og:description', content: page.description },
        { property: 'og:image', content: ogImage },
        { property: 'og:url', content: fullUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'AWS Community Day Cameroon' },
        { property: 'og:locale', content: page.lang === 'fr' ? 'fr_FR' : 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@awsugDouala' },
        { name: 'twitter:title', content: page.title },
        { name: 'twitter:description', content: page.description },
        { name: 'twitter:image', content: ogImage },
      ],
      link: [
        { rel: 'canonical', href: fullUrl }
      ],
      htmlAttrs: {
        lang: page.lang || 'en'
      }
    }
  }

  const generateEventStructuredData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'AWS Community Day Cameroon 2025',
      description: 'A community-driven event bringing together AWS enthusiasts, developers, and cloud professionals in Cameroon. Learn about cloud computing, AWS services, DevOps, serverless architecture, and machine learning from industry experts.',
      startDate: '2025-11-22T08:00:00+01:00',
      endDate: '2025-11-22T17:00:00+01:00',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: 'Chariot Hotel Buea',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Chariot Hotel',
          addressLocality: 'Buea',
          addressRegion: 'South West Region',
          addressCountry: 'CM'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '4.1590',
          longitude: '9.2971'
        }
      },
      organizer: [
        {
          '@type': 'Organization',
          name: 'AWS User Group Douala',
          url: 'https://www.meetup.com/awsugdouala'
        },
        {
          '@type': 'Organization',
          name: 'AWS User Group Yaounde',
          url: 'https://www.meetup.com/aws-user-group-yaounde'
        },
        {
          '@type': 'Organization',
          name: 'AWS Cloud Clubs UBa',
          url: 'https://www.meetup.com/aws-cloud-club-at-the-university-of-bamenda'
        }
      ],
      offers: {
        '@type': 'Offer',
        price: '3000',
        priceCurrency: 'XAF',
        availability: 'https://schema.org/InStock',
        validFrom: '2024-11-01T00:00:00+01:00'
      },
      image: `${baseUrl}/white-aws-community-day.svg`,
      url: baseUrl,
      audience: {
        '@type': 'Audience',
        audienceType: 'Developers, Cloud Engineers, IT Professionals, Students'
      },
      keywords: 'AWS, Cloud Computing, DevOps, Serverless, Machine Learning, Cameroon, Tech Conference',
      inLanguage: ['en', 'fr']
    }
  }

  return {
    defaultMeta,
    generatePageSEO,
    generateEventStructuredData,
    baseUrl
  }
}