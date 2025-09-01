"use client"
import { useLottie } from "lottie-react"
import groovyWalkAnimation from "./egypt.json"

const EgyptLottie = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options)

  return View
}

export default EgyptLottie
