export const solutionsPageQuery = `*[_type == "solutions" && language == $language][0]{
    pageHeader {
        title,
        description
    },
    solutions[]->{
        id,
        label,
        title,
        description,
        features,
        "image": image.asset->{
            url,
            "dimensions": metadata.dimensions
        },
        benefits,
        caseStudies[]->{
            id,
            title,
            category,
            client,
            "image": image.asset->{
                url,
                "dimensions": metadata.dimensions
            },
            description
        }
    },
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

export const solutionQuery = `*[_type == "solution" && id == $id && language == $language][0]{
    id,
    label,
    title,
    description,
    features,
    "image": image.asset->{
        url,
        "dimensions": metadata.dimensions
    },
    benefits,
    caseStudies[]->{
        id,
        title,
        category,
        client,
        "image": image.asset->{
            url,
            "dimensions": metadata.dimensions
        },
        description
    }
}` 