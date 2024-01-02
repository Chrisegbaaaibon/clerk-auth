import {SignUp} from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <section>
      <SignUp afterSignUpUrl={"/"} />
    </section>
  );
}
