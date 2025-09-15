'use client'

import Card from "@/components/card"
import fs from "fs"
import { MDXRemote } from 'next-mdx-remote/rsc'
import path from "path"
import { useState } from "react"

export default function Home({ params }) {
  const [isVisible, setIsVisible] = useState(true)
  const [names, setNames] = useState(['Piotr', 'John', 'Terry'])
  const name = 'Piotr'
  const handleClick = () => {
    setIsVisible(!isVisible)
  }
  const handleAdd = () => {
    setNames([...names, 'New element!'])
  }
  const cards = isVisible
    && names.map((name, index) => <Card key={index}>{name}</Card>)
  const slug = params?.slug || 'first'
  const content = fs.readFileSync(path.join(process.cwd(), 'src/app/content', `${slug}.mdx`), 'utf8')
  return (
    <>
      <article className="prose dark:prose-invert">
        <MDXRemote source={content} />
      </article>
    </>
  )
}
