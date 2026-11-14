/**
 * Seed data. Swap in your own favourites — a movie only needs
 * title, description, posterURL, trailerLink and rating (0–5).
 *
 * The posters here are generated as inline SVG so the app works with no
 * network. For a real poster, just put a URL in `posterURL` instead.
 */
function poster(title, from, to, ink) {
  const words = title.toUpperCase().split(' ')
  const lines = []
  let line = ''
  for (const word of words) {
    if ((line + ' ' + word).trim().length > 11 && line) {
      lines.push(line)
      line = word
    } else {
      line = (line + ' ' + word).trim()
    }
  }
  if (line) lines.push(line)

  const startY = 300 - (lines.length - 1) * 26
  const text = lines
    .map(
      (value, index) =>
        `<text x="200" y="${startY + index * 52}" text-anchor="middle" font-family="Oswald, Impact, sans-serif" font-size="44" font-weight="700" letter-spacing="2" fill="${ink}">${value}</text>`
    )
    .join('')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="400" height="600" fill="url(#g)"/><g fill="${ink}" opacity="0.14"><circle cx="330" cy="92" r="58"/><rect x="0" y="470" width="400" height="3"/></g><rect x="26" y="26" width="348" height="548" fill="none" stroke="${ink}" stroke-opacity="0.35" stroke-width="2"/>${text}</svg>`

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const initialMovies = [
  {
    id: 1,
    title: 'Spirited Away',
    description:
      'A sulky ten-year-old wanders into a bathhouse for spirits and has to work her way back out — and back to her own name.',
    posterURL: poster('Spirited Away', '#1b2a3a', '#0d1620', '#e9d8a6'),
    trailerLink: 'https://www.youtube.com/embed/ByXuk9QqQkk',
    rating: 5,
  },
  {
    id: 2,
    title: 'Mad Max: Fury Road',
    description:
      'Two hours of chase scene across a sun-bleached wasteland, and somehow the quietest moments land hardest.',
    posterURL: poster('Mad Max Fury Road', '#4a2011', '#1d0d07', '#f4a261'),
    trailerLink: 'https://www.youtube.com/embed/hEJnMQG9ev8',
    rating: 5,
  },
  {
    id: 3,
    title: 'Breaking Bad',
    description:
      'A chemistry teacher decides he would rather be feared than pitied. Five seasons of that decision compounding.',
    posterURL: poster('Breaking Bad', '#18291c', '#0a1210', '#a7c957'),
    trailerLink: 'https://www.youtube.com/embed/HhesaQXLuRY',
    rating: 5,
  },
  {
    id: 4,
    title: 'Arrival',
    description:
      'A linguist is handed first contact and discovers that learning a language can rearrange how you live a life.',
    posterURL: poster('Arrival', '#2a2740', '#14131f', '#c9ada7'),
    trailerLink: 'https://www.youtube.com/embed/7W1m5ER3I1Y',
    rating: 4,
  },
  {
    id: 5,
    title: 'The Grand Budapest Hotel',
    description:
      'A concierge, a lobby boy, a stolen painting, and more symmetry per frame than seems strictly necessary.',
    posterURL: poster('Grand Budapest', '#48233a', '#1e0f18', '#f2cc8f'),
    trailerLink: 'https://www.youtube.com/embed/1Fg5iWmQjwk',
    rating: 4,
  },
  {
    id: 6,
    title: 'Dark',
    description:
      'A missing child in a small German town, four families, and a cave that refuses to keep its decades separate.',
    posterURL: poster('Dark', '#1a1d25', '#090a0d', '#8d99ae'),
    trailerLink: 'https://www.youtube.com/embed/zy0b9e40tK8',
    rating: 3,
  },
]

export default initialMovies
