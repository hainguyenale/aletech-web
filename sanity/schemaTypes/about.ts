import { defineField, defineType } from "sanity"

export const aboutSchema = defineType({
    name: "about",
    title: "About Page",
    type: "document",
    fields: [
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
        // About Section
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
                defineField({
                    name: 'primaryButton',
                    title: 'Primary Button',
                    type: 'object',
                    fields: [
                        {
                            name: 'text',
                            title: 'Button Text',
                            type: 'string',
                            validation: Rule => Rule.required(),
                        },
                        {
                            name: 'link',
                            title: 'Button Link',
                            type: 'string',
                            validation: Rule => Rule.required(),
                        },
                    ],
                }),
            ],
        }),
        // Values Section
        defineField({
            name: "values",
            title: "Company Values",
            type: "array",
            of: [
                {
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
                            name: "icon",
                            title: "Icon",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                            options: {
                                list: [
                                    { title: "Target", value: "Target" },
                                    { title: "Users", value: "Users" },
                                    { title: "Lightbulb", value: "Lightbulb" },
                                    { title: "Globe", value: "Globe" },
                                    { title: "Puzzle", value: "Puzzle" },
                                    { title: "Handshake", value: "Handshake" },
                                ],
                            },
                        },
                    ],
                },
            ],
        }),

        // Team Members Section
        defineField({
            name: "teamMembers",
            title: "Team Members",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "name",
                            title: "Name",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: "position",
                            title: "Position",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true,
                            },
                            validation: (Rule) => Rule.optional(),
                        },
                        {
                            name: "bio",
                            title: "Bio",
                            type: "text",
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                },
            ],
        }),

        // Stats Section
        defineField({
            name: "stats",
            title: "Statistics",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "value",
                            title: "Value",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: "label",
                            title: "Label",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: "description",
                            title: "Description",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                },
            ],
        }),
    ],
}) 