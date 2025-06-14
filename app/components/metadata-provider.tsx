'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/contexts/language-context'
import { client } from '@/sanity/lib/client'
import { metadataQuery } from '@/sanity/queries/metadata'

export default function MetadataProvider() {
  const { language } = useLanguage()

  useEffect(() => {
    const updateMetadata = async () => {
      try {
        const metadata = await client.fetch(metadataQuery, { language })
        
        // Update title
        document.title = metadata?.title || "Aletech - Problem-Centered Technology Solutions"
        
        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]')
        if (!metaDescription) {
          metaDescription = document.createElement('meta')
          metaDescription.setAttribute('name', 'description')
          document.head.appendChild(metaDescription)
        }
        metaDescription.setAttribute('content', metadata?.description || "Aletech is your committed outsourcing partner, delivering tailored end-to-end solutions by deeply understanding your unique challenges and ensuring user-centered outcomes.")
        
        // Update Open Graph tags
        const updateMetaTag = (property: string, content: string) => {
          let metaTag = document.querySelector(`meta[property="${property}"]`)
          if (!metaTag) {
            metaTag = document.createElement('meta')
            metaTag.setAttribute('property', property)
            document.head.appendChild(metaTag)
          }
          metaTag.setAttribute('content', content)
        }
        
        updateMetaTag('og:title', metadata?.title || "Aletech - Problem-Centered Technology Solutions")
        updateMetaTag('og:description', metadata?.description || "Aletech is your committed outsourcing partner, delivering tailored end-to-end solutions by deeply understanding your unique challenges and ensuring user-centered outcomes.")
        updateMetaTag('og:image', metadata?.thumbnailUrl || '/og-image.jpg')
        
        // Update Twitter Card tags
        const updateTwitterTag = (name: string, content: string) => {
          let metaTag = document.querySelector(`meta[name="${name}"]`)
          if (!metaTag) {
            metaTag = document.createElement('meta')
            metaTag.setAttribute('name', name)
            document.head.appendChild(metaTag)
          }
          metaTag.setAttribute('content', content)
        }
        
        updateTwitterTag('twitter:title', metadata?.title || "Aletech - Problem-Centered Technology Solutions")
        updateTwitterTag('twitter:description', metadata?.description || "Aletech is your committed outsourcing partner, delivering tailored end-to-end solutions by deeply understanding your unique challenges and ensuring user-centered outcomes.")
        updateTwitterTag('twitter:image', metadata?.thumbnailUrl || '/og-image.jpg')
      } catch (error) {
        console.error('Error updating metadata:', error)
      }
    }

    updateMetadata()
  }, [language])

  return null
} 