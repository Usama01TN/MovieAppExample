/**
 * Turns whatever a user pastes into a URL an <iframe> can load.
 *
 * Accepts:  https://www.youtube.com/watch?v=ID
 *           https://youtu.be/ID
 *           https://www.youtube.com/embed/ID   (already an embed link)
 *           ID
 * Returns an embed URL, or '' when there is nothing usable.
 */
export function toEmbedUrl(link) {
  const value = (link || '').trim()
  if (!value) return ''

  // Already an embed link (YouTube, Vimeo, anything else) — leave it alone.
  if (value.includes('/embed/') || value.includes('player.vimeo.com')) return value

  const idFromWatch = value.match(/[?&]v=([\w-]{11})/)
  if (idFromWatch) return `https://www.youtube.com/embed/${idFromWatch[1]}`

  const idFromShortLink = value.match(/youtu\.be\/([\w-]{11})/)
  if (idFromShortLink) return `https://www.youtube.com/embed/${idFromShortLink[1]}`

  // A bare 11-character video id.
  if (/^[\w-]{11}$/.test(value)) return `https://www.youtube.com/embed/${value}`

  // Some other URL — hand it back and let the iframe try.
  return /^https?:\/\//.test(value) ? value : ''
}
