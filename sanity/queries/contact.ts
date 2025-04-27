export const contactPageQuery = `*[_type == "contact" && language == $language][0]{
  pageHeader {
    title,
    description
  },
  contactForm {
    tagline,
    title,
    description,
    contactInfo[] {
      icon,
      title,
      content
    }
  },
  offices {
    tagline,
    title,
    description,
    offices[] {
      city,
      country,
      address,
      phone,
      email,
      hours
    }
  }
}` 