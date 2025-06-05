## Modifying Existing Fields

### Adding New Fields
1. Update Schema
   ```typescript
   defineField({
     name: 'newField',
     title: 'New Field',
     type: 'string',
     validation: Rule => Rule.required()
   })
   ```

2. Update Query
   ```typescript
   export const pageQuery = `*[_type == "page" && language == $language][0]{
     // ... existing fields ...
     newField
   }`
   ```

3. Update TypeScript Interface
   ```typescript
   interface PageData {
     // ... existing fields ...
     newField: string
   }
   ```

4. Update Frontend Component
   ```typescript
   <div>{data.newField}</div>
   ```