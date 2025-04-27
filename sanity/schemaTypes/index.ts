import { type SchemaTypeDefinition } from 'sanity'
import { aboutSchema } from './about'
import { homeSchema } from './home'
import { projectsSchema } from './projects'
import { projectSchema } from './project'
import { investorsSchema } from './investors'
import { contactSchema } from './contact'
import { solutionsSchema, solutionSchema } from './solutions'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homeSchema, aboutSchema, projectsSchema, projectSchema, investorsSchema, contactSchema, solutionsSchema, solutionSchema],
}
