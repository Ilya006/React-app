import { useMutation, useQuery, useQueryClient } from 'react-query'
import { fetchFake, fetchPosts } from './home-page.route'
import { useEffect } from 'react'

export function HomePage() {
  const queryClient = useQueryClient()
  const { error, data } = useQuery({
    queryKey: ['users'],
    queryFn: fetchPosts
  })

  const mutation = useMutation({
    mutationFn: fetchFake,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    }
  })

  useEffect(() => {
    console.log(error, data)
  }, [error, data])

  function onClick() {
    mutation.mutate({
      test: 'data'
    })
  }

  return (
    
    <div>
      <h1>Home Page</h1>
      <button onClick={onClick}>click me</button>
    </div>
  )
}