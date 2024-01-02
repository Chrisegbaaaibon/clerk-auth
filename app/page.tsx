import {SignedIn, currentUser} from '@clerk/nextjs'
import {UserButton} from '@clerk/nextjs'
import {redirectToSignIn} from '@clerk/nextjs/server';

export default async function Home() {
  const user = await currentUser()
  const data = JSON.stringify(user);
  if (!user) {
    redirectToSignIn()
    return <></>
  }
  console.log(data);
  return (
    <div>
      <h1 className='text-blue-500'>Welcome</h1>
      <SignedIn>
        <p>You are signed in as {user?.emailAddresses[0]?.emailAddress}</p>
      </SignedIn>
      <UserButton />
    </div>
  )
}
