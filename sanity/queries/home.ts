export const homeQuery = `*[_type == "home" && language == $language][0]{
  hero {
    tagline,
    heading {
      text,
      highlightedText
    },
    description,
    primaryButton {
      text,
      link
    },
    secondaryButton {
      text,
      link
    },
    stats[] {
      number,
      label
    }
  },
  services {
    title,
    description,
    services[] {
      icon,
      title,
      description
    }
  },
  about {
    tagline,
    title,
    description,
    features[],
    primaryButton {
      text,
      link
    }
  },
  solutions {
    title,
    subtitle,
    solutionsList[] {
      id,
      icon,
      label,
      title,
      description,
      features[],
      "image": image {
        "url": asset->url,
        "dimensions": asset->metadata.dimensions,
        alt
      },
      link
    }
  },
  testimonials {
    title,
    description,
    testimonials[] {
      quote,
      name,
      title
    }
  },
  contact {
    tagline,
    title,
    description,
    contactInfo[] {
      type,
      title,
      value,
      additionalInfo[]
    }
  }
}` 