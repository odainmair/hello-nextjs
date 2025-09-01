// import Image from "next/image"
import React from "react"
import { Button } from "@/components/ui/button"

// import NotFoundImage from "@/public/assets/404.svg"
// import NotFoundMobileImage from "@/public/assets/404-mobile.svg"
import { Link } from "@/i18n/navigation"

const NotFoundPage = () => {
  return (
    <main className="bg-primary-light relative min-h-svh overflow-hidden py-28">
      <div className="container mx-auto">
        {/* left */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="order-2 flex flex-col gap-4 text-center lg:text-start">
            <h1 className="text-4xl font-bold">Oops! Page not found</h1>
            <p className="text-lg">
              We couldn’t find the page you’re looking for..
            </p>
            <Link href={"/"}>
              <Button className="bg-red mt-8 w-fit">BACK TO HOME</Button>
            </Link>
          </div>
          {/* right */}
          <div className="order-1 block lg:hidden">
            {/* <Image
                            src={NotFoundMobileImage}
                            alt="not found"
                            className="object-contain"
                        /> */}
            {/* <img src="/assets/404.svg" alt="not found" /> */}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 right-0 bottom-0 hidden aspect-[1.62/1.3] w-full lg:block">
        {/* <Image
                    src={NotFoundImage}
                    alt="not found"
                    fill
                    className="object-contain"
                /> */}
      </div>
    </main>
  )
}

export default NotFoundPage
