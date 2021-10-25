import Card from './Card'

export default {
  title: 'components/Card',
  component: Card,
}

export const pokemon = () =>
  Card({
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    name: 'name',
    id: 'id',
    height: 'height',
    type: 'type',
  })
