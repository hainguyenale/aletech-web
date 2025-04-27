import { defineField, defineType } from 'sanity'

export const investorsSchema = defineType({
  name: 'investors',
  title: 'Investors',
  type: 'document',
  fields: [
    defineField({
        name: 'language',
        type: 'string',
        readOnly: true,
        hidden: true
    }),
    defineField({
      name: 'pageHeader',
      title: 'Page Header',
      type: 'object',
      fields: [
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
      ],
    }),
    defineField({
      name: 'financialHighlights',
      title: 'Financial Highlights',
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
          name: 'metrics',
          title: 'Financial Metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Metric Title',
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
                  name: 'growth',
                  title: 'YoY Growth',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'progressPercentage',
                  title: 'Progress Bar Percentage',
                  type: 'number',
                  validation: Rule => Rule.required().min(0).max(100),
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Name of the icon from Lucide icons',
                  validation: Rule => Rule.required(),
                }),
              ],
            },
          ],
          validation: Rule => Rule.required().length(4),
        }),
      ],
    }),
    defineField({
      name: 'financialReports',
      title: 'Financial Reports',
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
          name: 'reports',
          title: 'Reports',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Report Title',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'date',
                  title: 'Publication Date',
                  type: 'date',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'file',
                  title: 'PDF File',
                  type: 'file',
                  options: {
                    accept: 'application/pdf'
                  },
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'type',
                  title: 'File Type',
                  type: 'string',
                  initialValue: 'PDF',
                  readOnly: true,
                  hidden: true,
                  validation: Rule => Rule.required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'upcomingEvents',
      title: 'Upcoming Events',
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
          name: 'events',
          title: 'Events',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Event Title',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'date',
                  title: 'Event Date',
                  type: 'date',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'time',
                  title: 'Event Time',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'location',
                  title: 'Event Location',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'presentation',
          title: 'Latest Presentation',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Presentation Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Presentation Description',
              type: 'text',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'thumbnailImage',
              title: 'Thumbnail Image',
              type: 'image',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'videoUrl',
              title: 'Video URL',
              type: 'url',
              validation: Rule => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'boardOfDirectors',
      title: 'Board of Directors',
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
          name: 'members',
          title: 'Board Members',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Member Name',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'position',
                  title: 'Position',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'image',
                  title: 'Member Photo',
                  type: 'image',
                  validation: Rule => Rule.required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'contactIR',
      title: 'IR Contact Information',
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
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'address',
          title: 'Office Address',
          type: 'array',
          description: 'Add each line of the address separately',
          of: [{ type: 'string' }],
          validation: Rule => Rule.required().min(1),
        }),
      ],
    }),
  ],
}) 