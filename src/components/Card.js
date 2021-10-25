import { createElement } from '../lib/dom'
import './Card.css'

export default function Card({ image, name, id, shiny }) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `
      <li class="card">
      <img data-js="Cardimage" class="Card__image" src="${image}" alt="" />
      <img data-js="shinyImage" class="Card__image hidden" src="${shiny}" alt="" />
      <h2 class="card-name">${id}. ${name}</h2>
      <button data-js="Card__button" class="learn-more__button">Make me shiny</button>
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
