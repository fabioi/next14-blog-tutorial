import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateMetadata() {
      return {
            title: "Blog",
            description: "Blog",
      }
}

export default function BlogPage() {
      return (
            <>
                  <article className="prose dark:prose-invert">
                        <MDXRemote source={
                              `# Hello world

This is from server component`
                        }

                        />
                  </article>
            </>
      )
}