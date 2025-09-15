import fs from 'fs'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import path from 'path'
import { parseFrontmatter } from '../../../lib/frontmatter'

export async function generateMetadata({ params }) {
      const filePath = path.join(process.cwd(), 'src/app/content', `${params.slug}.mdx`)
      if (!fs.existsSync(filePath)) {
            return {
                  title: `Blog - ${params.slug}`,
                  description: `Blog post about ${params.slug}`,
            }
      }
      const raw = fs.readFileSync(filePath, 'utf8')
      const { data } = parseFrontmatter(raw)
      return {
            title: data.title || `Blog - ${params.slug}`,
            description: data.description || `Blog post about ${params.slug}`,
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

      const raw = fs.readFileSync(filePath, 'utf8')
      const { content } = parseFrontmatter(raw)

      return (
            <>
                  <article className="prose dark:prose-invert">
                        <MDXRemote source={content} />
                  </article>
            </>
      )
}
