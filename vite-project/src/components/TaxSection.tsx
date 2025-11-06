import { Button } from '@headlessui/react'
import { useState } from 'react'
type propTypes = {
    imageUrl:string,
    headText:string,
    description:string
}
function TaxSection({imageUrl,headText,description}:propTypes) {
    const [highlight,setHighlight] = useState<number|null>(null)
    const tax_texts:[string,string,string] = ["1099 taxes","Dependents","Trust Taxes"]
    const buttons = tax_texts.map((x:string,idx:number)=><Button key={idx} onClick={()=>setHighlight(idx)} className={`text-[#2E4F21]  p-2 rounded-md ${idx == highlight ? "bg-[#A0F1BD]" : "bg-white"}`}>{x}</Button>)
  return (
    <div className='flex flex-col items-center px-5 py-15 gap-10 rounded-xl w-sm mx-auto bg-background-600'>
      <img src={imageUrl} alt="Phone Wallet" />
      <div className='flex flex-col items-center gap-10'>
            <h1 className='text-2xl font-medium text-[#2E4F21]'>{headText}</h1>
            <p className='text-[#2E4F21]'>{description}</p>
            <div className='flex gap-3'>
                {buttons}
            </div>
      </div>
    </div>
  )
}

export default TaxSection
