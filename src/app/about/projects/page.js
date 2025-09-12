import ProjectList from "@/app/about/projects/components/project-list"
import ProjectListLoading from "@/app/about/projects/components/project-list-loading"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

export const metadata = {
  title: "Projects",
  description: "Projects",
}

export default async function ProjectsPage() {

  return (
    <>
      <div>
        <h1 className="mb-8 text-xl">Projects</h1>
        <div className="mb-8">Hello, this is the list of my repos!</div>
        {/* Suspense wrapper to show loading component while ProjectList fetches data */}
        <ErrorBoundary fallback={<div>Cannot fetch repos</div>}>
          <Suspense fallback={<ProjectListLoading />}>
            <ProjectList />
          </Suspense>
        </ErrorBoundary>
      </div>

    </>
  )
}