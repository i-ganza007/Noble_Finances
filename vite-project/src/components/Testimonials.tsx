import Markus from '../assets/Markus.webp'
import Margaret from '../assets/Margaret.webp'
import Taylor from '../assets/Taylor.webp'
import { useState } from 'react'
function Testimonials() {
    const testimonials = [
        {job:"Graphic Designer",location:"Ontario, Canada",thanks:"Managing my taxes as a freelancer used to be overwhelming, but Noble Finance made it effortless.”",image:Taylor,info:"Taylor M., 28 years old"},
        {job:"Commercial Photographer",location:"Ontario, Canada",thanks:"From invoicing to tax prep, Noble Finance has been a game-changer for my freelance business.”",image:Markus,info:"Markus N., 31 years old"},
        {job:"Stylist",location:"Austin, Texas",thanks:"I used to worry about missing deductions, but with Noble Finance, I know I’m maximizing my savings.”",image:Margaret,info:"Margaret L., 24 years old"}
    ]
    const [selectedId,setselectedId] = useState<number|null>(null)
  return (
    <div className="px-5 py-15 bg-white w-sm mx-auto mt-15 flex flex-col gap-10">
      <h1 className="text-center text-4xl text-[#2E4F21]">Hear From Our Happy Clients</h1>
      <div>
        <div className="flex justify-center gap-3">
            {testimonials.map((x,idx)=>{
                return (
                    <div key={idx} onClick={()=>setselectedId(idx)} className={`w-80 h-32  p-4 flex items-center justify-center border-t-1 border-[#7D9276] ${idx == selectedId ? "bg-[#2E4F21] rounded-md border-t-1 border-[#7D9276]":""}`}>
                        <div className="flex flex-col items-center text-center gap-2">
                            <h1 className={`text-lg font-semibold ${idx == selectedId ? "text-[#FFFFFF]" : "text-[#2E4F21]"}`}>{x.job}</h1>
                            <p className={`${idx == selectedId ? "text-[#7D9276]" : "text-[#7D9276]"} text-sm`}>{x.location}</p>
                        </div>  
                    </div>
                )
            })}
        </div>
      </div>
      <div className='flex flex-col gap-15'>
        <h1 className='text-2xl text-[#2E4F21]'>{testimonials[selectedId || 0].thanks}</h1>
        <div className='flex items-center gap-8'>
            <img src={testimonials[selectedId || 0].image} alt="" className='size-16 rounded-md' />
            <p className='text-[#2E4F21] text-xl'>{testimonials[selectedId || 0].info}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
