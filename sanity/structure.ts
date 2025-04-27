import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('home').title('Home'),
      S.documentTypeListItem('about').title('About'),
      S.documentTypeListItem('projects').title('Projects'),
      S.documentTypeListItem('investors').title('Investors'),
      S.documentTypeListItem('contact').title('Contact'),
      S.documentTypeListItem('solutions').title('Solutions'),
      S.documentTypeListItem('solution').title('Solution'),
    ])
