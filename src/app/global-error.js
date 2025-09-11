'use client'

// This global error boundary only works in production mode

export default function GlobalError({ error, reset }) {
      return (
            <html lang="en">
                  <body>
                        <h2>Something went wrong</h2>
                  </body>
            </html>
      )
}