import ProjectList from "@/app/about/projects/components/project-list"

export default async function ProjectsPage() {


  return (
    <>
      <div className="p-20">
        <h1 className="mb-8 text-xl">Projects</h1>
        <ProjectList />
      </div>

    </>
  )
}