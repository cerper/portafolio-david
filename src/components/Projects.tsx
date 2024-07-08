import { Project } from '@/app/type/Project'
import { getProjects } from '@/sanity/sanity-utils'

const Projects = async () => {
  const projects: Project[] = await getProjects()
  return (
    <div className="h-[100vh]" id="proyectos">
      {projects.map((project) => {
        return (
          <div key={project._id} className="text-black">
            {project.name}
          </div>
        )
      })}
    </div>
  )
}
export default Projects
