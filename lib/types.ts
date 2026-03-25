// Shared types for Sanity data

export interface SanityImage {
  asset: {
    _ref: string
    _type: string
  }
  _type: string
}

export interface HomeData {
  hero: {
    tagline: string
    heading: {
      text: string
      highlightedText: string
    }
    thumbnailImage: SanityImage
    videoUrl: string
    description: string
    primaryButton: {
      text: string
      link: string
    }
    secondaryButton: {
      text: string
      link: string
    }
    stats: Array<{
      number: string
      label: string
    }>
  }
  services: {
    title: string
    description: string
    services: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  about: {
    tagline: string
    title: string
    description: string
    features: string[]
    primaryButton: {
      text: string
      link: string
    }
  }
  solutions: {
    title: string
    subtitle: string
    solutionsList: Array<{
      id: string
      icon: string
      label: string
      title: string
      description: string
      features: string[]
      image: {
        url: string
      }
      link: string
    }>
  }
  testimonials: {
    title: string
    description: string
    testimonials: Array<{
      quote: string
      name: string
      title: string
    }>
  }
  contact: {
    tagline: string
    title: string
    description: string
    contactInfo: Array<{
      type: string
      title: string
      value: string
      additionalInfo?: string[]
    }>
  }
}

export interface AboutData {
  pageHeader: {
    title: string
    description: string
  }
  about: {
    tagline: string
    title: string
    description: string
    features: string[]
    primaryButton: {
      text: string
      link: string
    }
  }
  values: {
    tagline: string
    title: string
    description: string
    values: {
      title: string
      description: string
      icon: string
    }[]
  }
  members: {
    tagline: string
    title: string
    description: string
    teamMembers: {
      name: string
      position: string
      image: SanityImage
      bio: string
    }[]
  }
  stats: Array<{
    value: string
    label: string
    description: string
  }>
}

export interface ContactData {
  pageHeader: {
    title: string
    description: string
  }
  contactForm: {
    tagline: string
    title: string
    description: string
    contactInfo: Array<{
      icon: string
      title: string
      content: string
    }>
  }
  offices: {
    tagline: string
    title: string
    description: string
    offices: Array<{
      city: string
      country: string
      address: string
      phone: string
      email: string
      hours: string
    }>
  }
}

export interface ProjectImage {
  url: string
  dimensions: {
    width: number
    height: number
  }
}

export interface Project {
  id: string
  title: string
  category: string
  client: string
  image: ProjectImage
  description: string
  tags: string[]
}

export interface ProjectsPageData {
  pageHeader: {
    title: string
    description: string
  }
  projects: Project[]
  viewCta: string
  categories: string[]
  cta: {
    title: string
    description: string
    video: {
      url: string
    }
    videoThumbnail?: {
      url: string
    }
    primaryButton: {
      text: string
      link: string
    }
  }
}

export interface ProjectMetric {
  value: string
  label: string
  description: string
}

export interface ProjectArchitecture {
  overview: string
  components: {
    name: string
    description: string
  }[]
}

export interface SingleProjectData {
  project: {
    title: string
    description: string
    category: string
    longDescription: string
    tags: string[]
    githubUrl?: string
    liveUrl?: string
    image: ProjectImage
    screenshots?: ProjectImage[]
    timeline: string
    teamSize: string
    client: string
    keyFeatures?: string[]
    architecture?: ProjectArchitecture
    challenges?: string[]
    solutions?: string[]
    technologies?: string[]
    results?: string[]
    metrics?: ProjectMetric[]
    caseStudy?: string
    sectionTitles: {
      overview: string
      timeline: string
      teamSize: string
      client: string
      keyFeatures: string
      architecture?: string
      challenges: string
      solutions: string
      technologies: string
      results: string
      keyMetrics: string
      screenshots: string
    }
    sectionIcons: {
      github: string
      externalLink: string
      listItem: string
      paragraph: string
    }
  }
}

// Legacy alias for backward compatibility
export interface ProjectsData {
  pageHeader: {
    title: string
    description: string
  }
  projects: Array<{
    id: string
    title: string
    category: string
    description: string
    image: SanityImage
    technologies: string[]
    link: string
  }>
}

export interface SolutionCaseStudy {
  id: string
  title: string
  category: string
  client: string
  description: string
  image: {
    url: string
    dimensions?: {
      width: number
      height: number
    }
  }
}

export interface Solution {
  id: string
  label: string
  title: string
  description: string
  features: string[]
  image: {
    url: string
    dimensions?: {
      width: number
      height: number
    }
  }
  benefits: string[]
  caseStudies: SolutionCaseStudy[]
}

export interface SolutionsPageData {
  pageHeader: {
    title: string
    description: string
  }
  solutions: Solution[]
  cta: {
    title: string
    description: string
    primaryButton: {
      text: string
      link: string
    }
    video?: {
      url: string
    }
    videoThumbnail?: {
      url: string
    }
  }
}

// Legacy alias
export interface SolutionsData {
  pageHeader: {
    title: string
    description: string
  }
  solutions: Array<{
    id: string
    icon: string
    label: string
    title: string
    description: string
    features: string[]
    image: {
      url: string
    }
    link: string
  }>
}

export interface InvestorsData {
  pageHeader: {
    title: string
    description: string
  }
  sections: Array<{
    title: string
    content: string
  }>
}

export interface NewsData {
  pageHeader: {
    title: string
    description: string
  }
  articles: Array<{
    id: string
    title: string
    excerpt: string
    date: string
    image: SanityImage
    category: string
  }>
}
