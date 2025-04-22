import { type SchemaTypeDefinition } from 'sanity'
import { aboutSchema } from './about'
import { homeSchema } from './home'
import { projectsSchema } from './projects'
import { projectSchema } from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homeSchema, aboutSchema, projectsSchema, projectSchema],
}
