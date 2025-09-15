# next-14-blog

Simple Next.js project (from udemy tutorial).


## Run locally

1. Install dependencies:
```bash
npm install
```

2. Start the Next.js dev server:
```bash
npm run dev
```

3. In another terminal, start the mock API (json-server):
```bash
npm run json-server
```

- App: http://localhost:3000
- Mock API: http://localhost:3001

## Next.js features used

- App Router (`src/app`) with Server Components
- Layouts: root (`src/app/layout.js`) and route (`src/app/about/layout.js`)
- Dynamic routes: `src/app/blog/[slug]`
- Metadata API: `metadata` and `generateMetadata`
- Open Graph image generation via `next/og` (`src/app/blog/[slug]/opengraph-image.js`)
- Optimized fonts with `next/font/google` (Inter, Roboto)
- Optimized images with `next/image` and static imports
- Client navigation with `next/link`
- Error handling: route `error.js`, `global-error.js`, `not-found.js`, and `notFound()`
- MDX support using `@next/mdx` and rendering with `next-mdx-remote/rsc`
- Script loading with `next/script` (`src/components/chatbot.js`)
- Server data fetching with `fetch(..., { cache: 'no-store' })` and React `Suspense` fallback