import fs from 'fs'
import Link from 'next/link'
import path from 'path'
import { parseFrontmatter } from '../../lib/frontmatter'

export default async function BlogPostPage() {
      const files = fs.readdirSync(path.join(process.cwd(), 'src/app/content')).filter(file => file.endsWith('.mdx'))

      const posts = await Promise.all(
            files.map(async (file) => {
                  const raw = fs.readFileSync(path.join(process.cwd(), 'src/app/content', file), 'utf8')
                  const { data } = parseFrontmatter(raw)
                  return {
                        title: data.title || file.replace('.mdx', ''),
                        description: data.description || '',
                        slug: file.replace('.mdx', ''),
                  }
            })
      )

      return (
            <>
                  <h1>Recent posts</h1>
                  <ul>
                        {posts.map((post) => (
                              <li key={post.slug}>
                                    <Link href={`/blog/${post.slug}`} className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{post.title}</Link>


                              </li>
                        ))}
                  </ul>
            </>
      )
}
