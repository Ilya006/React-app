import { useParams } from 'react-router-dom'

export function ContactPage() {
  const { projectId, taskId } = useParams()

  return (
    <div>
      <h1>Contact page</h1>
      <h5>ProjectId: {projectId}</h5>
      <h5>taskId: {taskId}</h5>
    </div>
  )
}