import { createClient, groq } from 'next-sanity'
import { Project } from '@/app/type/Project'

export async function getProjects(): Promise<Project[]> {
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

export async function getSlug(slug: string): Promise<Project> {
  const client = createClient({
    projectId: 'kkn4kjzj',
    dataset: 'production',
    apiVersion: '2024-07-04',
  })
  return client.fetch(groq`*[_type == "project" && slug.current == $slug ][0] |{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "image": image.asset ->url,
    url,
    content
    
    
    
    }`)
}
