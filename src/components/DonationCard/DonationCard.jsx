
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const DonationCard = ({donated}) => {
    const {id, Img, category, title, card_color, text_color, btn_color, price} = donated;

  return (
    <div
    style={{backgroundColor: card_color}}
     className="card card-side  shadow-lg hover:shadow-2xl w-full my-5 hover:scale-105 ease-in-out duration-700 ">
                <figure className='w-32 lg:w-56  overflow-hidden'><img src={Img} alt="Movie" className="h-full lg:w-56 w-32"/></figure>
                <div className="px-6 py-4  flex items-center">
                   <div className="">
                   <button
                                       style={{backgroundColor: btn_color,
                                        color: text_color
                            }}
                   className="p-1 mb-2 text-left rounded-lg  w-24 flex justify-center  font-semibold">{category}</button>
                    <h2 className="card-title mb-2 text-xl font-bold text-gray-800 ">{title}</h2>
                    <h2 style={{color: text_color}} className="card-title mb-4  ">${price}</h2>
                    <Link
                        to={`/donation-details/${id}`}
                    style={{backgroundColor: btn_color,
                      color: text_color
          }}
                    className="py-1 text-left  w-28 flex justify-center text-white font-semibold">View Details</Link>
                   </div>
                </div>
        </div>
  )
}

DonationCard.propTypes ={
  donated: PropTypes.object
}

export default DonationCard
