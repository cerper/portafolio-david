import { Project } from '@/app/type/Project'
import { getProjects } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const Projects = async () => {
  const projects: Project[] = await getProjects()
  console.log(projects)
  return (
    <div className="h-[100vh]" id="proyectos">
      <div className="grid grid-cols-3 gap-8 place-content-center place-items-center mt-8 rounded-3xl">
        {projects.map((project) => {
          return (
            <div
              key={project._id}
              className="text-black flex flex-col items-center justify-center"
            >
              <Link href={'project/' + project.slug} className="h-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={200}
                  className="aspect-[6/4]  rounded-lg   object-center hover:scale-105 transition-all ease-in duration-200"
                />
                <Button variant={'default'}>Ver más</Button>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Projects
