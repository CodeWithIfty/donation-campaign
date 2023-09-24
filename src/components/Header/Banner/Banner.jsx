
const Banner = () => {
  return (
    <div className="md:h-[70vh] h-[50vh]  bg-[url('./src/assets/bannerImg.jpeg')] bg-cover bg-center bg-no-repeat bg-blend-lighten bg-white bg-opacity-90 flex justify-center items-center">
      <div className=" mt-28 md:mt-0">
        <h1 className="lg:text-5xl md:text-4xl font-bold text-2xl mb-12 text-center">I Grow By Helping People In Need</h1>
        <div className=" flex items-center w-full justify-center">
        <input type="text"  className="py-3 md:w-96 rounded-s-lg outline-none p-4 bg-white border-2" placeholder="Search here...."/>
        <button className="bg-[#FF444A] py-3 rounded-e-lg px-6 font-bold text-white border-2 border-[#FF444A]">Search</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
