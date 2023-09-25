import { useLoaderData, useParams } from "react-router-dom"
import { saveDonation } from "../../utility/LocalStorage";

const DonationDetails = () => {
    const donations =useLoaderData();
    const {id} = useParams();
    const  idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt)
    const { Img, title, text_color,price, description} = donation;

    const handleDonateBtn = () => {
      saveDonation(idInt)
    }
  return (

    
    <div className="container py-36 mx-auto  ">
      <div
        style={{backgroundImage: `url(${Img})`}}
        className={`w-11/12 lg:w-full mx-auto h-[700px] bg-[url('${Img}')] bg-cover flex justify-center items-end rounded-lg bg-center `}>
        <div className="bg-gray-900 h-28 w-full  bg-opacity-20 hover:bg-opacity-70 ease-in-out duration-300 rounded-lg flex items-center pl-5">
            <button
            onClick={handleDonateBtn}
            style={{backgroundColor: text_color}}
            className="py-3 font-semibold rounded-lg px-5 text-lg bg text-white ">Donate: ${price}</button>
        </div>
        </div>

        <div className=" my-6 mx-3">
            <h1 className="text-3xl mb-3 font-bold">{title}</h1>
            <p className="text-lg text-justify">{description}</p>
        </div>

    </div>
  )
}

export default DonationDetails
