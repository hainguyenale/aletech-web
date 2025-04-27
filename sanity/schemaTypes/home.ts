import { defineField, defineType } from 'sanity'

export const homeSchema = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          description: 'The small text that appears above the main heading',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'heading',
          title: 'Main Heading',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'string',
              description: 'The main heading text',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'highlightedText',
              title: 'Highlighted Text',
              type: 'string',
              description: 'The text that will be highlighted in the heading',
              validation: Rule => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'The paragraph text below the heading',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'primaryButton',
          title: 'Primary Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
              description: 'The URL the button links to',
              validation: Rule => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'secondaryButton',
          title: 'Secondary Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
              description: 'The URL the button links to',
              validation: Rule => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'stats',
          title: 'Statistics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'number',
                  title: 'Number',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
              ],
            },
          ],
          validation: Rule => Rule.max(3),
        }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Name of the icon from Lucide icons',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Service Title',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Service Description',
                  type: 'text',
                  validation: Rule => Rule.required(),
                }),
              ],
            },
          ],
          validation: Rule => Rule.max(6),
        }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'About Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              type: 'string',
            },
          ],
          validation: Rule => Rule.max(6),
        }),
      ],
    }),
    defineField({
      name: 'solutions',
      title: 'Solutions Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'solutionsList',
          title: 'Solutions List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'id',
                  title: 'ID',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Name of the Lucide icon to use (e.g., "Cloud", "Stethoscope", etc.)',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'features',
                  title: 'Features',
                  type: 'array',
                  of: [{ type: 'string' }],
                  validation: Rule => Rule.required().min(1),
                }),
                defineField({
                  name: 'image',
                  title: 'Solution Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative Text',
                      description: 'Important for SEO and accessibility.',
                      validation: Rule => Rule.required(),
                    },
                  ],
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'link',
                  title: 'Solution Link',
                  type: 'string',
                  description: 'URL path for the solution details page',
                  validation: Rule => Rule.required(),
                }),
              ],
            },
          ],
          validation: Rule => Rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'quote',
                  title: 'Quote',
                  type: 'text',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Title/Company',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'contactInfo',
          title: 'Contact Information',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'type',
                  title: 'Type',
                  type: 'string',
                  options: {
                    list: ['email', 'phone', 'address'],
                  },
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'additionalInfo',
                  title: 'Additional Information',
                  type: 'array',
                  of: [{ type: 'string' }],
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
}) 