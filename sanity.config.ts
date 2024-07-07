import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import schema from '@/sanity/schemas'

const config = defineConfig({
  projectId: 'kkn4kjzj',
  dataset: 'production',
  title: 'Portafolio David',
  apiVersion: '2024-07-04',
  basePath: '/admin',
  plugins: [structureTool(), visionTool()],
  schema: { types: schema },
})

export default config
