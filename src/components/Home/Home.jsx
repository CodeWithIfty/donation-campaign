import { useLoaderData } from "react-router-dom"
import Card from "../Card/Card"
import Banner from "../Header/Banner/Banner"

const Home = () => {
  const donation =useLoaderData();
  console.log(donation)
  return (
    <div>
        <Banner/>
      <div className=" container mx-auto py-16 flex justify-evenly flex-wrap gap-7">
        {
          donation?.map((donation => <Card key={donation.id} donation={donation}/>))
        }
      </div>
    </div>
  )
}

export default Home
