import { createElement } from '../lib/dom'
import './Card.css'

export default function Card({ image, name, id, height }) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `
      <li class="card">
      <img class="card-image" src="${image}" alt="" width="96" height="96"/>
      <h2 class="card-name">${id}. ${name}</h2>
      <p class="height-prop">height: ${height}</p>
      </li>
    `,
  })

  return el
}
