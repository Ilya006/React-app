import { useState } from 'react'
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
  const [ value, setValue ] = useState(0)
  
  return (
    <div>
      <h1>Home Page</h1>
      <h4>Count: {value}</h4>
      <button onClick={() => setValue(prev => prev += 1)}>Click me</button>

      <Carousel
        items={testData}
        renderElement={(item) => <h1>{item.name}</h1>}
      />
    </div>
  )
}