import fs from 'fs'
import path from 'path'

export default async function BlogPostPage() {
      const files = fs.readdirSync(path.join(process.cwd(), 'src/app/content')).filter(file => file.endsWith('.mdx'))

      const posts = await Promise.all(files.map(async file => {
            const content = await fs.readFileSync(path.join(process.cwd(), 'src/app/content', file), 'utf8')
            return {
                  frontmatter: content.split('---')[1],
                  slug: file.replace('.mdx', '')
            }
      }))

      return (
            <>
                  <h1>Recent posts</h1>
                  <ul>
                        {posts.map(post => (
                              <li key={post.slug}>{post.frontmatter.title}</li>
                        ))}
                  </ul>
            </>
      )
}