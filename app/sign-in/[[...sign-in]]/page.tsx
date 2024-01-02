
import {SignIn} from '@clerk/nextjs'

export default function SigninPage() {
  return (
    <section>
      <SignIn afterSignInUrl={"/"} />
    </section>
  )
}
