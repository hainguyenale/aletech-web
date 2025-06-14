import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Documents')
    .items([
      S.documentTypeListItem('home').title('Home'),
      S.documentTypeListItem('about').title('About'),
      S.documentTypeListItem('projects').title('Projects'),
      S.documentTypeListItem('project').title('Project'),
      S.documentTypeListItem('investors').title('Investors'),
      S.documentTypeListItem('contact').title('Contact'),
      S.documentTypeListItem('solutions').title('Solutions'),
      S.documentTypeListItem('solution').title('Solution'),
      S.documentTypeListItem('footer').title('Footer'),
      S.documentTypeListItem('navbar').title('Navbar'),
      S.documentTypeListItem('metadata').title('Metadata'),
    ])
