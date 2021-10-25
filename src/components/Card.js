import { createElement } from '../lib/dom'
import './Card.css'

export default function Card({ image, name, id, shiny, height, type }) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `
      <li class="poke-card">
      <img data-js="Cardimage" class="card-image" src="${image}" alt="" width="96" height="96"/>
      <img data-js="shinyImage" class="Card__image hidden" src="${shiny}" alt="" />
      <h2 class="card-name">${id}. ${name}</h2>
      <p class="height-prop">height: ${height}</p>
      <p class="height-prop">type: ${type}</p>
      <button data-js="Card__button" class="Card__button">Make me shiny</button>
      </li>
    `,
  })

  const button = el.querySelector('[data-js="Card__button"]')
  const frontImage = el.querySelector('[data-js="Cardimage"]')
  const shinyImage = el.querySelector('[data-js="shinyImage"]')
  button.addEventListener('click', () => {
    frontImage.classList.toggle('hidden')
    shinyImage.classList.toggle('hidden')
  })

  return el
}
