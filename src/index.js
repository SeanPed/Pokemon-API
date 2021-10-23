import Card from './components/Card'
import { getBySelector } from './lib/dom'
import './styles/index.css'

const url = 'https://pokeapi.co/api/v2/pokemon?limit=100'

fetch(url)
  .then(res => res.json())
  .then(data => {
    data.results.forEach(({ url }) => {
      fetch(url)
        .then(res => res.json())
        .then(pokemon => renderCards(pokemon))
    })
  })

function renderCards(data) {
  const container = getBySelector('#pokedex')
  const card = Card({
    name: data.name,
    image: data.sprites.front_default,
    id: data.id,
    height: data.height,
  })
  container.append(card)
}
