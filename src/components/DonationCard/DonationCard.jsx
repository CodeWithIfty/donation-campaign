const DonationCard = ({donated}) => {

  const { Img, category, title, card_color, text_color, btn_color, price} = donated;

  return (
    <div
    style={{backgroundColor: card_color}}
     className="card card-side  shadow-xl w-full my-5 ">
                <figure><img src={Img} alt="Movie" className="h-full "/></figure>
                <div className="px-6 py-4  flex items-center">
                   <div className="">
                   <button
                                       style={{backgroundColor: btn_color,
                                        color: text_color
                            }}
                   className="p-1 mb-2 text-left rounded-lg  w-24 flex justify-center  font-semibold">{category}</button>
                    <h2 className="card-title mb-2 text-xl font-bold text-gray-800 ">{title}</h2>
                    <h2 style={{color: text_color}} className="card-title mb-4  ">${price}</h2>
                    <button
                    style={{backgroundColor: btn_color,
                      color: text_color
          }}
                    className="py-1 text-left  w-28 flex justify-center text-white font-semibold">View Details</button>
                   </div>
                </div>
        </div>
  )
}

export default DonationCard
