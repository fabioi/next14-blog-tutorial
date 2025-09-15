import fs from 'fs'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import path from 'path'

export async function generateMetadata({ params }) {
      return {
            title: `Blog - ${params.slug}`,
            description: `Blog post about ${params.slug}`,
      }
}

export default function BlogPost({ params }) {
      if (!["first", "second"].includes(params.slug)) {
            notFound()
      }

      // Read the MDX file content
      const filePath = path.join(process.cwd(), 'src/app/content', `${params.slug}.mdx`)

      // Check if file exists
      if (!fs.existsSync(filePath)) {
            notFound()
      }

      const content = fs.readFileSync(filePath, 'utf8')

      return (
            <>
                  <article className="prose dark:prose-invert">
                        <MDXRemote source={content} />
                  </article>
            </>
      )
}
