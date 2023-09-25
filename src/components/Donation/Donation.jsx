import { useLoaderData } from "react-router-dom"
import DonationCard from "../DonationCard/DonationCard"
import { useEffect, useState } from "react";
import { getStoredDonations } from "../../utility/LocalStorage";

const Donation = () => {
  const donations = useLoaderData();
  const [donatedCard, setDonatedCard] = useState([]);
  const [donatedCardLength, setDonatedCardLength] = useState(4);
  const [showAllBtnClick, setShowAllBtnClick] = useState(false);

  useEffect(() => {
    const storedDonations = getStoredDonations();

    if(donations.length > 0){
      const donated = donations.filter(donation => storedDonations.includes(donation.id));
      setDonatedCard(donated)
    }
  },[])

  const handleShowAll = () => {
    setShowAllBtnClick(!showAllBtnClick)
    console.log(showAllBtnClick)
    if(!showAllBtnClick){
      setDonatedCardLength(donatedCard.length)
    }else{
      setDonatedCardLength(4)
    }
  }

  return (
    <div className="container mx-auto flex flex-col items-center ">
        <div className="w-full justify-center mx-5 mt-44  lg:grid  grid-cols-2 	 gap-6 ">
            {
              donatedCard.slice(0, donatedCardLength).map( item => <DonationCard key={item.id} donated={item}/>)
            }
        </div>
        <div className=" pb-10 pt-5">
          <button onClick={handleShowAll} className="btn btn-success text-white  font-bold drop-shadow-xl hover:scale-105 ease-in-out duration-200">{ !showAllBtnClick ? 'See All' : 'See Less'}</button>
        </div>
    </div>
  )
}

export default Donation
