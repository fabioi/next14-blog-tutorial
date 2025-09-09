import ProjectList from "@/app/about/projects/components/project-list"
import ProjectListLoading from "@/app/about/projects/components/project-list-loading"
import { Suspense } from "react"

export default async function ProjectsPage() {

  return (
    <>
      <div>
        <h1 className="mb-8 text-xl">Projects</h1>
        <div className="mb-8">Hello, this is the list of my projects</div>
        <Suspense fallback={<ProjectListLoading />}>
          <ProjectList />
        </Suspense>
      </div>

    </>
  )
}