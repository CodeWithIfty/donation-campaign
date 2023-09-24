import DonationCard from "../DonationCard/DonationCard"

const Donation = () => {
  return (
    <div className="container mx-auto flex  items-center h-screen">
        <div className="w-full flex gap-6">
        <DonationCard/> 
        <DonationCard/> 
        </div>
    </div>
  )
}

export default Donation
