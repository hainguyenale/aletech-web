export const metadataQuery = `*[_type == "metadata" && language == $language][0] {
  title,
  description,
  "logoUrl": logo.asset->url,
  "thumbnailUrl": thumbnail.asset->url
}` 