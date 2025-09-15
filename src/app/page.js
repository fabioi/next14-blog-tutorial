import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { parseFrontmatter } from '../lib/frontmatter'

export async function generateMetadata() {
  const slug = 'first'
  const filePath = path.join(process.cwd(), 'src/app/content', `${slug}.mdx`)

  try {
    const raw = await fs.readFile(filePath, 'utf8')
    const { data } = parseFrontmatter(raw)
    return {
      title: data.title || 'Home',
      description: data.description || 'Welcome to the blog',
    }
  } catch {
    return {
      title: 'Home',
      description: 'Welcome to the blog',
    }
  }
}

export default async function Home({ params }) {
  const slug = params?.slug ?? 'first'
  const filePath = path.join(process.cwd(), 'src/app/content', `${slug}.mdx`)

  let content = ''

  try {
    const raw = await fs.readFile(filePath, 'utf8')
    const parsed = parseFrontmatter(raw)
    content = parsed.content
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
