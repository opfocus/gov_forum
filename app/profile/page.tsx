import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(async function Profile() {
  const session = await getSession();
  if (session) {
    const {user} = session
    return <div>Hello {user.name}</div>;
  }
  return (
    <div>
      hello
    </div>
  )
}, { returnTo: '/profile' })
// You need to provide a `returnTo` since Server Components aren't aware of the page's URL