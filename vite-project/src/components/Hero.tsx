import Globe from "../assets/Globe.webp"
import { Button } from '@headlessui/react'
function Hero() {
  return (
    <div className="flex flex-col items-center px-4 py-10 gap-10 bg-[#A0F1BD] rounded-b-3xl">
      <img src={Globe} alt="Globe Image" className="w-5/6"/>
      <div className="flex flex-col gap-8">
        <h1 className="text-[#2E4F21] text-4xl font-semibold ">Financial Clarity You Can Trust</h1>
        <p className="text-[#2E4F21] text-2xl">Trusted financial guidance for every stage of life and business since 1987</p>
        <Button className="bg-hug-100 text-white rounded-full w-56 py-3 px-2 font-semibold">Connect with our experts</Button>
      </div>
    </div>
  )
}

export default Hero
