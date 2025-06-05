import { defineField, defineType } from "sanity"

export const projectsSchema = defineType({
    name: "projects",
    title: "Projects Page",
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
        // Projects List
        defineField({
            name: "projects",
            title: "Projects",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "project" }]
                }
            ],
        }),
        // View CTA
        defineField({
            name: "viewCta",
            title: "View CTA",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        // Categories
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required(),
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
                    validation: (Rule) => Rule.required(),
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