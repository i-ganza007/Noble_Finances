import { Button } from "@heroui/button"
function Footer() {
  return (
    <div className="bg-background-300 flex flex-col gap-15 p-7">
      <h1 className="text-3xl font-bold text-white">Noble Services</h1>
      <div className="flex justify-between items-center">
        <span className="text-[#D5E4D0]">Services</span>
        <Button className="bg-white p-4 text-background-300 rounded-full font-semibold">Book An Appointment</Button>
      </div>
      <div>
        <p className="text-white">Financial Clarity You Can Trust</p>
        <span className="text-[#D5E4D0]">Trusted financial guidance for every stage of life and business since 1987</span>
      </div>
      <p className="text-[#D5E4D0]">© 2025 All Rights Reserved</p>
    </div>
  )
}

export default Footer
