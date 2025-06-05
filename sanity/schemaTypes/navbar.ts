import { defineField, defineType } from "sanity"

export const navbarSchema = defineType({
    name: "navbar",
    title: "Navigation Bar",
    type: "document",
    fields: [
        defineField({
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true
        }),
        defineField({
            name: "navLinks",
            title: "Navigation Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "href",
                            title: "Link",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: "label",
                            title: "Label",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }
                    ]
                }
            ],
            validation: (Rule) => Rule.required().min(1)
        })]
})

export default [navbarSchema] 