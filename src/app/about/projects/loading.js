// Next.js way to show temporary loading state UI until the data is loaded

export default function Loading() {
      return (
            <>
                  <div className="p-20">
                        <h1 className="mb-8 text-xl">Projects</h1>
                        <ul className="space-y-4">
                              {
                                    Array(3).fill(0).map((_, index) => (
                                          <li key={index} className="mb-4">
                                                <div className="w-full h-24 animate-pulse bg-neutral-100 dark:bg-neutral-800 rounded-md"></div>
                                          </li>
                                    ))
                              }
                        </ul>
                  </div>

            </>
      )
}