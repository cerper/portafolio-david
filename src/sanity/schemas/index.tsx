import project from './project-schema'

const schema = [project]

export default schema

export const revalidate = 10
export const dynamic = 'force-dynamic'
