const DonationCard = () => {
  return (
    <div className="card card-side bg-[#FF444A26] shadow-xl w-1/2">
                <figure><img src="./src/assets/Education.png" alt="Movie" className="h-full "/></figure>
                <div className="px-6 flex items-center">
                   <div className="">
                   <button className="p-1 mb-2 text-left bg-[#FF444A33] rounded-lg  w-24 flex justify-center text-[#FF444A] font-semibold">Education</button>
                    <h2 className="card-title mb-2 text-xl font-bold text-gray-800 ">Good education</h2>
                    <h2 className="card-title mb-4 text-[#FF444A] ">$290.00</h2>
                    <button className="py-1 text-left bg-[#FF444A]  w-28 flex justify-center text-white font-semibold">View Details</button>
                   </div>
                </div>
        </div>
  )
}

export default DonationCard
