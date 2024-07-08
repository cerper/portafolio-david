import { PortableTextBlock } from 'sanity'

export type Project = {
  _id: string
  _createdAt: Date
  name: string
  slug: String
  image: String
  url: String
  content: PortableTextBlock[]
}
