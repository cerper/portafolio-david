import { createClient, groq } from 'next-sanity'
import { Blog } from '@/app/type/Blog'

export async function getProjects(): Promise<Blog[]> {
  const client = createClient({
    projectId: 'kkn4kjzj',
    dataset: 'production',
    apiVersion: '2024-07-04',
  })
  return client.fetch(groq`*[_type == "project"]| order(createdAt asc){
     _id,
      _createdAt,
      name,
      'slug': slug.current,
      'image':image.asset->url,
      url,
      content,
    }`)
}
