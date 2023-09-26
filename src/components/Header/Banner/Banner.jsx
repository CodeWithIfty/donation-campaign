import  { useState } from 'react';
import PropTypes from 'prop-types'

const Banner = ({ onCategoryChange }) => {
  const [categoryInput, setCategoryInput] = useState('');

  const handleInputChange = (e) => {
    setCategoryInput(e.target.value);
  };

  const handleSearch = () => {
    onCategoryChange(categoryInput);
  };

  return (
    <div className="md:h-[70vh] h-[50vh] bg-[url('../src/assets/bannerImg.jpeg')] bg-cover bg-center bg-no-repeat bg-blend-lighten bg-white bg-opacity-90 flex justify-center items-center">
      <div className="mt-28 md:mt-0">
        <h1 className="lg:text-5xl md:text-4xl font-bold text-2xl mb-12 text-center drop-shadow-2xl ease-out duration-1000 hover:scale-105">I Grow By Helping People In Need</h1>
        <div className="flex items-center w-full justify-center focus:scale-105 ease-in duration-100">
          <input
            type="text"
            className="py-3 md:w-96 rounded-s-lg outline-none p-4 focus:drop-shadow-2xl shadow bg-white border-2 ease-in duration-100"
            placeholder="Search here...."
            value={categoryInput}
            onChange={handleInputChange}
          />
          <button
            className="bg-[#FF444A] py-3 rounded-e-lg px-6 font-bold ease-out duration-100 hover:scale-105 text-white shadow-md border-2 border-[#FF444A]"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes ={
  onCategoryChange: PropTypes.func
}

export default Banner;
