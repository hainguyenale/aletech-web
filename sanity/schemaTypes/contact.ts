import { defineField, defineType } from 'sanity'

export const contactSchema = defineType({
  name: 'contact',
  title: 'Contact Page',
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
      name: 'contactForm',
      title: 'Contact Form Section',
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
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Name of the icon from Lucide icons',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'content',
                  title: 'Content',
                  type: 'text',
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
      name: 'offices',
      title: 'Global Offices Section',
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
          name: 'offices',
          title: 'Offices',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'city',
                  title: 'City',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'country',
                  title: 'Country',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'address',
                  title: 'Address',
                  type: 'text',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'phone',
                  title: 'Phone Number',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'email',
                  title: 'Email',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'hours',
                  title: 'Working Hours',
                  type: 'string',
                  validation: Rule => Rule.required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
}) 