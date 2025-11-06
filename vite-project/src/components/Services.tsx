import { Button } from '@headlessui/react'

function Services() {
  return (
    <div className='flex flex-col items-center gap-6 justify-center py-40 px-6'>
      <h1 className='text-[#2E4F21] font-semibold'>Services</h1>
      <p className='text-center w-50 text-[#2E4F21] text-4xl font-semibold'>Let us handle the numbers, so you can handle your success.</p>
      <p className='text-center text-[#2E4F21] text-xl '>Serving individuals and small businesses since 1987</p>
      <Button className="bg-hug-100 text-white rounded-full  py-3 px-2 font-semibold">Schedule a call</Button>
    </div>
  )
}

export default Services
