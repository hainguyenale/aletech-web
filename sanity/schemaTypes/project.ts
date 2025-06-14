import { defineField, defineType } from "sanity"

export const projectSchema = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        }),
        defineField({
            name: "id",
            title: "ID",
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
            name: "category",
            title: "Category",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "client",
            title: "Client",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "screenshots",
            title: "Screenshots",
            type: "array",
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true,
                        metadata: ['dimensions', 'lqip'],
                        storeOriginalFilename: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                            description: 'Important for SEO and accessibility.',
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        }
                    ]
                }
            ],
            validation: (Rule) => Rule.max(10),
        }),
        defineField({
            name: "description",
            title: "Short Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "longDescription",
            title: "Long Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.max(4),
        }),
        defineField({
            name: "timeline",
            title: "Project Timeline",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "teamSize",
            title: "Team Size",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "keyFeatures",
            title: "Key Features",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "architecture",
            title: "Architecture",
            type: "object",
            fields: [
                {
                    name: "overview",
                    title: "Architecture Overview",
                    type: "text",
                    // validation: (Rule) => Rule.required(),
                },
                {
                    name: "components",
                    title: "Key Components",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                {
                                    name: "name",
                                    title: "Component Name",
                                    type: "string",
                                    // validation: (Rule) => Rule.required(),
                                },
                                {
                                    name: "description",
                                    title: "Component Description",
                                    type: "text",
                                    // validation: (Rule) => Rule.required(),
                                }
                            ]
                        }
                    ],
                    // validation: (Rule) => Rule.required().min(1),
                }
            ],
            // validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "challenges",
            title: "Challenges",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "solutions",
            title: "Solutions",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "results",
            title: "Results",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "metrics",
            title: "Key Metrics",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "label",
                            title: "Label",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: "value",
                            title: "Value",
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
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "githubUrl",
            title: "GitHub URL",
            type: "url",
        }),
        defineField({
            name: "liveUrl",
            title: "Live URL",
            type: "url",
        }),
        defineField({
            name: "sectionTitles",
            title: "Section Titles",
            type: "object",
            fields: [
                {
                    name: "overview",
                    title: "Project Overview",
                    type: "string",
                    initialValue: "Project Overview",
                },
                {
                    name: "timeline",
                    title: "Timeline",
                    type: "string",
                    initialValue: "Timeline",
                },
                {
                    name: "teamSize",
                    title: "Team Size",
                    type: "string",
                    initialValue: "Team Size",
                },
                {
                    name: "client",
                    title: "Client",
                    type: "string",
                    initialValue: "Client",
                },
                {
                    name: "keyFeatures",
                    title: "Key Features",
                    type: "string",
                    initialValue: "Key Features",
                },
                {
                    name: "architecture",
                    title: "Architecture",
                    type: "string",
                    initialValue: "Architecture",
                },
                {
                    name: "challenges",
                    title: "Challenges",
                    type: "string",
                    initialValue: "Challenges",
                },
                {
                    name: "solutions",
                    title: "Solutions",
                    type: "string",
                    initialValue: "Solutions",
                },
                {
                    name: "technologies",
                    title: "Technologies",
                    type: "string",
                    initialValue: "Technologies",
                },
                {
                    name: "results",
                    title: "Results",
                    type: "string",
                    initialValue: "Results",
                },
                {
                    name: "keyMetrics",
                    title: "Key Metrics",
                    type: "string",
                    initialValue: "Key Metrics",
                },
                {
                    name: "screenshots",
                    title: "Screenshots",
                    type: "string",
                    initialValue: "Screenshots",
                }
            ],
            initialValue: {
                overview: "Project Overview",
                timeline: "Timeline",
                teamSize: "Team Size",
                client: "Client",
                keyFeatures: "Key Features",
                architecture: "Architecture",
                challenges: "Challenges",
                solutions: "Solutions",
                technologies: "Technologies",
                results: "Results",
                keyMetrics: "Key Metrics",
                screenshots: "Screenshots"
            }
        }),
        defineField({
            name: "sectionIcons",
            title: "Section Icons",
            type: "object",
            fields: [
                {
                    name: "github",
                    title: "GitHub Icon",
                    type: "string",
                    initialValue: "Github",
                },
                {
                    name: "externalLink",
                    title: "External Link Icon",
                    type: "string",
                    initialValue: "ExternalLink",
                },
                {
                    name: "listItem",
                    title: "List Item Icon",
                    type: "string",
                    initialValue: "Sun",
                },
                {
                    name: "paragraph",
                    title: "Paragraph Icon",
                    type: "string",
                    initialValue: "Document",
                }
            ],
            initialValue: {
                github: "Github",
                externalLink: "ExternalLink",
                listItem: "Sun",
                paragraph: "Document"
            }
        }),
    ],
    preview: {
        select: {
            title: 'title',
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