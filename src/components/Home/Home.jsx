import Card from "../Card/Card"
import Banner from "../Header/Banner/Banner"
import { useEffect, useState } from "react"

const Home = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() =>{
    fetch('donation.json')
    .then(res => res.json())
    .then(data => setDonations(data))
  },[])
  return (
    <div>
        <Banner/>
      <div className=" container mx-auto py-16 flex justify-evenly flex-wrap gap-7">
        {
          donations?.map((donation => <Card key={donation.id} donation={donation}/>))
        }
      </div>
    </div>
  )
}

export default Home
