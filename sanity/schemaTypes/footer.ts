import { defineField, defineType } from "sanity"

export const footerSchema = defineType({
    name: "footer",
    title: "Footer",
    type: "document",
    fields: [
        defineField({
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true
        }),
        // Company Info Section
        defineField({
            name: "companyInfo",
            title: "Company Information",
            type: "object",
            fields: [
                {
                    name: "description",
                    title: "Description",
                    type: "text",
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: "socialLinks",
                    title: "Social Links",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                {
                                    name: "platform",
                                    title: "Platform",
                                    type: "string",
                                    options: {
                                        list: [
                                            { title: "Facebook", value: "facebook" },
                                            { title: "LinkedIn", value: "linkedin" },
                                            { title: "Email", value: "email" }
                                        ]
                                    }
                                },
                                {
                                    name: "url",
                                    title: "URL",
                                    type: "url"
                                }
                            ]
                        }
                    ]
                }
            ]
        }),
        // Solutions Links
        defineField({
            name: "solutionsLinks",
            title: "Solutions Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            title: "Title",
                            type: "string"
                        },
                        {
                            name: "url",
                            title: "URL",
                            type: "string"
                        }
                    ]
                }
            ]
        }),
        // Company Links
        defineField({
            name: "companyLinks",
            title: "Company Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            title: "Title",
                            type: "string"
                        },
                        {
                            name: "url",
                            title: "URL",
                            type: "string"
                        }
                    ]
                }
            ]
        }),
        // Contact Information
        defineField({
            name: "contactInfo",
            title: "Contact Information",
            type: "object",
            fields: [
                {
                    name: "address",
                    title: "Address",
                    type: "string"
                },
                {
                    name: "email",
                    title: "Email",
                    type: "string"
                }
            ]
        }),
        // Copyright Text
        defineField({
            name: "copyright",
            title: "Copyright Text",
            type: "string"
        }),
        // Tagline
        defineField({
            name: "tagline",
            title: "Tagline",
            type: "string"
        })
    ],
    preview: {
        select: {
            language: 'language'
        },
        prepare(selection) {
            const { language } = selection;
            return {
                title: `Footer [${language}]`
            };
        }
    }
})

export default [footerSchema] 