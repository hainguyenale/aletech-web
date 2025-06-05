export const aboutPageQuery = `*[_type == "about"  && language == $language][0]{
  pageHeader {
    title,
    description
  },
  about {
    title,
    tagline,
    description,
    features,
    primaryButton {
      text,
      link
    }
  },
  values {
   title,
    tagline,
    description,
    values[] {
      title,
      description,
      icon
    }
  },
  members{
    tagline,
    title,
    description,
    teamMembers[] {
    name,
    position,
    image,
    bio
    }
  },
  stats[] {
    value,
    label,
    description
  }
}` 