import { Project } from '@/app/type/Project'
import { getProjects } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const Projects = async () => {
  const projects: Project[] = await getProjects()
  console.log(projects)
  return (
    <div className="mt-16" id="proyectos">
      <h2 className="text-center text-5xl font-oswald">Proyectos</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 place-content-center place-items-center mt-16 rounded-3xl">
        {projects.map((project) => {
          return (
            <main
              key={project._id}
              className="text-black flex flex-col items-center justify-center"
            >
              <Link href={'project/' + project.slug} className="h-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="aspect-[6/4]  rounded-lg   object-center hover:scale-105 transition-all ease-in duration-200"
                />

                <div className="flex flex-col justify-center items-center mt-2">
                  <p className="my-4 text-xl font-semibold">{project.name}</p>
                  <Button variant={'default'}>Ver más</Button>
                </div>
              </Link>
            </main>
          )
        })}
      </div>
    </div>
  )
}
export default Projects
