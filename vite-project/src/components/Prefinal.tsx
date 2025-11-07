import StackedBlocks from '../assets/StackedBlocks.webp'
import { Button } from '@headlessui/react'
function Prefinal() {
  return (
    <div className='flex flex-col items-center justify-center gap-7 bg-white py-25'>
      <img src={StackedBlocks} alt="blocks-stacked" className='w-4/5' />
      <div className=' flex flex-col w-4/5 bg-background-300 text-white p-15 rounded-lg gap-10'>
        <h1 className='text-4xl'>A custom built plan for you</h1>
        <p>At Noble Finances, we believe that tax filing should be seamless, accurate, and stress-free. Our approach is centered on three key pillars: simplicity, accuracy, and security.</p>
        <Button className="self-start bg-white p-3 rounded-full text-background-300">Learn More</Button>
      </div>
    </div>
  )
}

export default Prefinal
