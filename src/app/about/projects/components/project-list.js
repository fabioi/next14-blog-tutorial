import Card from "@/components/card"

export default async function ProjectList() {
      const response = await fetch("http://localhost:3001/repos", { cache: 'no-store' })
      const repos = await response.json()

      return (
            <ul className="space-y-4">
                  {repos.map((repo) => (
                        <li key={repo.id} className="mb-4">
                              <Card className="font-mono">
                                    <div className="flex justify-between items-center mb-4">
                                          <div>{repo.title}</div>
                                          <div className="flex items-center gap-1">
                                                <span>⭐</span>{repo.stargazers_count}
                                          </div>
                                    </div>
                                    <div>{repo.description}</div>
                              </Card>
                        </li>
                  ))}
            </ul>
      )
}