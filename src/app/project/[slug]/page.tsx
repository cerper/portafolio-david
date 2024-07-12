import { Button } from '@/components/ui/button'
import { getSlug } from '@/sanity/sanity-utils'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
  params: { slug: string }
}

export default async function pageInfo({ params }: ProjectProps) {
  const slug = params.slug
  const infoProject = await getSlug(slug)
  return (
    <div className=" flex flex-col items-center justify-center">
      <h2 className="font-oswald mt-4 text-4xl lg:text-6xl mb-8">
        {infoProject.name}
      </h2>
      <Link href={infoProject.url} className="my-8">
        <Button variant={'default'}>Ver proyecto</Button>
      </Link>

      <div className="text-justify mt-8 mx-8 lg:w-[900px] font-roboto text-lg">
        <PortableText value={infoProject.content} />
      </div>
    </div>
  )
}
