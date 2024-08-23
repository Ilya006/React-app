import 'swiper/css'
import { Carousel } from '~ui/carousel'

const testData = [
  {
    id: 1,
    name: 'test1'
  },
  {
    id: 2,
    name: 'test2'
  },
  {
    id: 3,
    name: 'test3'
  },
  {
    id: 4,
    name: 'test4'
  }
]

export function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <Carousel
        items={testData}
        renderElement={(item) => <h1>{item.name}</h1>}
      />
    </div>
  )
}