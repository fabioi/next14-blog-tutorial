import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { promises as fs } from 'node:fs'
import path from 'node:path'

export default async function Home({ params }) {
  const slug = params?.slug ?? 'first'
  const filePath = path.join(process.cwd(), 'src/app/content', `${slug}.mdx`)

  let content = ''

  try {
    content = await fs.readFile(filePath, 'utf8')
  } catch (error) {
    console.error(`Unable to read MDX file for slug "${slug}":`, error)
    notFound()
  }

  return (
    <article className="prose dark:prose-invert">
      <MDXRemote source={content} />
    </article>
  )
}
