import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { ImageBanner } from './style'

interface ItemProps {
  key: number
  item: {
    name: string
    description: string
    image: string
  }
}

export const CarouselPage = () => {
  var items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
      image: '/banner.jpeg',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      image: '/banner-carro.png',
    },
  ]

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  )
}

function Item(props: ItemProps) {
  return (
    <Paper>
      <ImageBanner src={props.item.image} />
    </Paper>
  )
}
