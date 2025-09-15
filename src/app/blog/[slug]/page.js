import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

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

      return (
            <>
                  <article className="prose dark:prose-invert">
                        <MDXRemote source={
                              `# Hello world

This is from server component for ${params.slug}`
                        }

                        />
                  </article>
            </>
      )
}
