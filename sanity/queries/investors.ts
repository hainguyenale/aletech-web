export const investorsPageQuery = `*[_type == "investors"][0]{
  pageHeader {
    title,
    description
  },
  financialHighlights {
    tagline,
    title,
    description,
    metrics[] {
      title,
      value,
      growth,
      progressPercentage,
      icon
    }
  },
  financialReports {
    tagline,
    title,
    description,
    reports[] {
      title,
      date,
      "file": file.asset->{
        url,
        size,
        originalFilename
      },
      type
    }
  },
  upcomingEvents {
    tagline,
    title,
    description,
    events[] {
      title,
      date,
      time,
      location
    },
    presentation {
      title,
      description,
      "thumbnailImage": thumbnailImage.asset->{
        url,
        metadata {
          dimensions
        }
      },
      videoUrl
    }
  },
  boardOfDirectors {
    tagline,
    title,
    description,
    members[] {
      name,
      position,
      "image": image.asset->{
        url,
        metadata {
          dimensions
        }
      }
    }
  },
  contactIR {
    title,
    description,
    email,
    phone,
    address
  }
}` 