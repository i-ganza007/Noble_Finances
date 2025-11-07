import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import TaxSection from "../components/TaxSection"
import Dash from '../assets/Dash.webp'
import Wallet from '../assets/Wallet.webp'
import Safe from '../assets/Safe.webp'
import Testimonials from "../components/Testimonials"
import Belongs from "../components/Belongs"
import Prefinal from "../components/Prefinal"
import Experts from "../components/Experts"
import Footer from "../components/Footer"
function Home() {
  return (
    <div className="bg-[#F4F7F5]">
      <Navbar/>
      <Hero/>
      <Services/>
      <div className="flex flex-col gap-6">
        <TaxSection imageUrl={Wallet}  headText="Tax Preparation & Filing" description="Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance."/>
        <TaxSection imageUrl={Dash}  headText="IRS Audit Assistance" description="Offer expert guidance and representation to resolve tax audits and disputes with confidence."/>
        <TaxSection imageUrl={Safe}  headText="Bookkeeping & Accounting" description="Maintain organized financial records and provide clear reports to support business growth and financial health."/>
      </div>
      <Testimonials/>
      <Belongs/>
      <Prefinal/>
      <Experts/>
      <Footer/>
    </div>
  )
}

export default Home
