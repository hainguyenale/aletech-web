interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}

// Organization schema (for layout)
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Aletech',
        url: 'https://aletech.com',
        logo: 'https://aletech.com/logo.png',
        description: 'Problem-Centered Technology Solutions',
        foundingDate: '2020',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Buon Ma Thuot',
          addressCountry: 'VN',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'contact@aletech.dev',
        },
        sameAs: [
          'https://linkedin.com/company/aletech',
        ],
      }}
    />
  )
}

// WebPage schema
export function WebPageJsonLd({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name,
        description,
        url,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Aletech',
          url: 'https://aletech.com',
        },
      }}
    />
  )
}

// BreadcrumbList schema
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  )
}
