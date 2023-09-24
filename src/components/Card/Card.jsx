
const Card = () => {
  return (
    <div>
            <div className="card w-96 bg-[#FF444A26] shadow-xl">
                <figure><img src="./src/assets/Education.png" alt="Shoes"  className="w-full"/></figure>
                <div className="p-4">
                    <button className="p-1 mb-1 text-left bg-[#FF444A33] rounded-lg  w-24 flex justify-center text-[#FF444A] font-semibold">Education</button>
                    <h2 className="card-title text-[#FF444A] ">Good education</h2>
                </div>
            </div>
    </div>
  )
}

export default Card
