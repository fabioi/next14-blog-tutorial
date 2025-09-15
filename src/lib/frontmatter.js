// Minimal frontmatter parser for simple key: value pairs
// Returns { data: Record<string, string>, content: string }
export function parseFrontmatter(fileContent) {
  if (typeof fileContent !== 'string') {
    return { data: {}, content: '' }
  }

  const lines = fileContent.split(/\r?\n/)
  if (lines[0]?.trim() !== '---') {
    return { data: {}, content: fileContent }
  }

  // find closing ---
  let end = -1
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      end = i
      break
    }
  }

  if (end === -1) {
    // no closing fence; treat as no frontmatter
    return { data: {}, content: fileContent }
  }

  const yamlLines = lines.slice(1, end)
  const data = {}
  for (const line of yamlLines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const idx = trimmed.indexOf(':')
    if (idx === -1) continue
    const key = trimmed.slice(0, idx).trim()
    let value = trimmed.slice(idx + 1).trim()
    // remove surrounding quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith('\'') && value.endsWith('\''))) {
      value = value.slice(1, -1)
    }
    data[key] = value
  }

  const content = lines.slice(end + 1).join('\n')
  return { data, content }
}

