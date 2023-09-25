import { useLoaderData, useParams } from "react-router-dom"

const DonationDetails = () => {
    const donations =useLoaderData();
    const {id} = useParams();
    const  idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt)
    const {Img, title, text_color,price, description} = donation;
    console.log( donation, idInt)
  return (
    <div className="container py-32 mx-auto  ">
      <div className="w-full h-[700px] overflow-hidden">
        <img src={Img} className="w-full cover"  alt={title} />
        </div>
        <div className="bg-gray-900 h-28 -mt-28 relative bg-opacity-70 hover:bg-opacity-80 ease-in-out duration-300 flex items-center pl-5">
            <button
            style={{backgroundColor: text_color}}
            className="py-3 font-semibold rounded-lg px-5 text-lg bg text-white ">Donate: ${price}</button>
        </div>

        <div className=" my-6">
            <h1 className="text-3xl mb-3 font-bold">{title}</h1>
            <p className="text-lg text-justify">{description}</p>
        </div>

    </div>
  )
}

export default DonationDetails
