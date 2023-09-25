import { useLoaderData } from "react-router-dom"
import DonationCard from "../DonationCard/DonationCard"
import { useEffect, useState } from "react";
import { getStoredDonations } from "../../utility/LocalStorage";

const Donation = () => {
  const donations = useLoaderData();
  const [donatedCard, setDonatedCard] = useState([]);

  useEffect(() => {
    const storedDonations = getStoredDonations();

    if(donations.length > 0){
      const donated = donations.filter(donation => storedDonations.includes(donation.id));
      setDonatedCard(donated)
    }
  },[])


  return (
    <div className="container mx-auto flex  items-center ">
        <div className="w-full justify-center mx-5 mt-44  lg:grid  grid-rows-6  grid-cols-2 	 gap-6 ">
            {
              donatedCard.map( item => <DonationCard key={item.id} donated={item}/>)
            }
        </div>
    </div>
  )
}

export default Donation
