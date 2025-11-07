import ImageBreak from "../assets/ImageBreak.webp"
import File from "../assets/File.webp"
import Calendar from "../assets/Calendar.webp"
import Person from "../assets/Person.webp"
function Belongs() {
    const values = [
        {img:File,owner:'For Freelancers',title:'Simplicity & Control',description:"Stay in charge of your income with seamless expense tracking, automated deductions, and smart tax strategies—so you can focus on doing what you love."},
        {img:Person,owner:"For Families",title:"Stability & Security",description:'From budgeting tools to tax-saving insights, we help you plan for the future, maximize refunds, and keep your household finances running smoothly.'},
        {img:Calendar,owner:"For Small Businesses",title:"Stability & Security",description:"Effortless bookkeeping, payroll solutions, and expert-backed tax support—so you can spend less time on finances and more time scaling your business."}
    ]
  return (
    <div className="mt-10 bg-white">
      <img src={ImageBreak} alt="Working_Hands" className="w-full"/>
      <div className="flex flex-col justify-center px-7 py-20 gap-5">
        <h1 className="text-[#2E4F21] text-4xl">Smart Finance for everyone</h1>
        <p className="text-[#2E4F21]">At Noble Finance, we believe that financial confidence should be accessible to everyone—whether you’re a solo entrepreneur, managing a growing family, or running a small business.</p>
      </div>
      <div className="flex flex-col gap-10">
        {values.map((x,idx)=>(
            <div key={idx} className="flex flex-col justify-center w-5/6 py-7 mx-auto gap-8 border-t-1 border-[#2E4F21]">
                <img src={x.img} alt="" className="size-10" />
                <h1 className="text-4xl text-[#2E4F21] ">{x.owner}</h1>
                <h1 className="text-[#2E4F21] text-2xl">{x.title}</h1>
                <p className="text-[#2E4F21]">{x.description}</p>
            </div>   
        ))}     
      </div>
    </div>
  )
}

export default Belongs
