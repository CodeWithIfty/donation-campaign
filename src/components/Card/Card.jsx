import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Card = ({donation}) => {
  const {id, Img, category, title, card_color, text_color, btn_color} = donation;


  return (
    <Link
    to={`/donation-details/${id}`}
      className=" cursor-pointer">
            <div
            style={{backgroundColor: card_color}}
            className={`card w-80 bg-[${card_color}] hover:shadow-xl shadow-lg ease-in-out duration-700 hover:scale-105`}>
                <figure><img src={Img} alt="Shoes"  className="w-full"/></figure>
                <div className="p-4">
                    <button
                    style={{backgroundColor: btn_color,
                                color: text_color
                    }}
                    className={`p-1 mb-1 text-left bg-[${btn_color}] rounded-lg  w-24 flex justify-center text-[${text_color}] font-semibold`}>{category}</button>
                    <h2
                    style={{color: text_color}}
                    className={`card-title text-[${text_color}]`}>{title}</h2>
                </div>
            </div>
    </Link>
  )
}

Card.propTypes ={
  donation: PropTypes.object

}

export default Card
