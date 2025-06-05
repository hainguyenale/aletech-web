export const projectPageQuery = `*[_type == "projects"  && language == $language][0]{
  pageHeader {
    title,
    description
  },
  "projects": projects[]-> {
    id,
    title,
    category,
    client,
    "image": image.asset->{
      url,
      "dimensions": metadata.dimensions
    },
    description,
    tags
  },
  "viewCta": viewCta,
  categories,
  cta {
    title,
    description,
    primaryButton {
      text,
      link
    },
    "video": video.asset->{
      url
    },
    "videoThumbnail": videoThumbnail.asset->{
      url
    }
  }
}`

// Query for a single project by ID
export const singleProjectQuery = `*[_type == "project" && id == $id && language == $language][0]{
  "project": {
    id,
    title,
    category,
    client,
    "image": image.asset->{
      url,
      "dimensions": metadata.dimensions
    },
    description,
    longDescription,
    tags,
    timeline,
    teamSize,
    keyFeatures,
    architecture {
      overview,
      components[] {
        name,
        description
      }
    },
    challenges,
    solutions,
    technologies,
    results,
    metrics[] {
      label,
      value,
      description
    },
    githubUrl,
    liveUrl,
    sectionTitles {
      overview,
      timeline,
      teamSize,
      client,
      keyFeatures,
      architecture,
      challenges,
      solutions,
      technologies,
      results,
      keyMetrics
    },
    sectionIcons {
      github,
      externalLink,
      listItem,
      paragraph
    }
  }
}` 