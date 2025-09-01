import { LoginForm } from "@/components/LoginForm"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black">
      <Image src={"/logo.svg"} fill alt="logo" className="z-0 object-contain" />
      <Card className="relative z-10 w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Login Required</CardTitle>
          <CardDescription className="text-center">
            Please enter your credentials to access the application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  )
}
