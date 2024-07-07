import { getProjects } from '@/sanity/sanity-utils'

const Projects = async () => {
  const projects = await getProjects()
  return (
    <div className="h-[100vh]">
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
