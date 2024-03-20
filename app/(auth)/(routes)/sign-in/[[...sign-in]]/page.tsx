import { SignIn } from "@clerk/nextjs";
import { SignInWithMetamaskButton } from "@clerk/nextjs";
export default function Page() {
  return (
    <SignInWithMetamaskButton>
      <SignIn />
    </SignInWithMetamaskButton>
  )

}