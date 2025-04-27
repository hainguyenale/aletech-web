import { defineField, defineType } from "sanity"

export const solutionsSchema = defineType({
    name: "solutions",
    title: "Solutions Page",
    type: "document",
    fields: [
        defineField({
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true
        }),
        // Page Header Section
        defineField({
            name: "pageHeader",
            title: "Page Header",
            type: "object",
            fields: [
                {
                    name: "title",
                    title: "Title",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: "description",
                    title: "Description",
                    type: "text",
                    validation: (Rule) => Rule.required(),
                },
            ],
        }),
        // Solutions List
        defineField({
            name: "solutions",
            title: "Solutions",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "solution" }]
                }
            ],
        }),
        // CTA Section
        defineField({
            name: "cta",
            title: "CTA Section",
            type: "object",
            fields: [
                {
                    name: "title",
                    title: "Title",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: "description",
                    title: "Description",
                    type: "text",
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: "primaryButton",
                    title: "Primary Button",
                    type: "object",
                    fields: [
                        {
                            name: "text",
                            title: "Text",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: "link",
                            title: "Link",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                },
                {
                    name: "video",
                    title: "Video",
                    type: "file",
                    options: {
                        accept: 'video/*'
                    },
                },
                {
                    name: "videoThumbnail",
                    title: "Video Thumbnail",
                    type: "image",
                    description: "Thumbnail shown before video plays",
                },
            ],
        }),
    ],
})

export const solutionSchema = defineType({
    name: "solution",
    title: "Solution",
    type: "document",
    fields: [
        defineField({
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true
        }),
        defineField({
            name: "id",
            title: "ID",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "label",
            title: "Label",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "features",
            title: "Features",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "benefits",
            title: "Benefits",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "caseStudies",
            title: "Case Studies",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "project" }]
                }
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',  // your title field
            language: 'language'
        },
        prepare(selection) {
            const { title, language } = selection;
            return {
                title: title ? `${title} [${language}]` : `[${language}]`
            };
        }
    }
})

// Export both schemas for registration
export default [solutionsSchema, solutionSchema] 