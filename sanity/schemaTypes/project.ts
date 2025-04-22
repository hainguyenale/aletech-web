import { defineField, defineType } from "sanity"

export const projectSchema = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
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
                    validation: (Rule) => Rule.required(),
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
                                    validation: (Rule) => Rule.required(),
                                },
                                {
                                    name: "description",
                                    title: "Component Description",
                                    type: "text",
                                    validation: (Rule) => Rule.required(),
                                }
                            ]
                        }
                    ],
                    validation: (Rule) => Rule.required().min(1),
                }
            ],
            validation: (Rule) => Rule.required(),
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
            name: "caseStudy",
            title: "Case Study",
            type: "text",
            validation: (Rule) => Rule.required(),
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
    ],
}) 