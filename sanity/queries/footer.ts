export const footerQuery = `*[_type == "footer" && language == $language][0] {
    companyInfo {
        description,
        socialLinks[] {
            platform,
            url
        }
    },
    solutionsLinks[] {
        title,
        url
    },
    companyLinks[] {
        title,
        url
    },
    contactInfo {
        address,
        email
    },
    copyright,
    tagline
}` 