import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
  //loader is to get the data that the component needs before rendering it
  //this is where we load the data from the server for the component
  loader: async({params}) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    return {
      postId: params.postId

    }
  },
  pendingComponent:() =>  <div>Loading..</div>,
  errorComponent: () => <div>Error</div>
})

function RouteComponent() {
  const {postId} = Route.useLoaderData()
  return <div>Hello {postId}</div>
}
