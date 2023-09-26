import Card from "../Card/Card";
import Banner from "../Header/Banner/Banner";
import { useEffect, useState } from "react";

const Home = () => {
  const [donations, setDonations] = useState([]);
  const [filteredDonations, setFilteredDonations] = useState([]);

  useEffect(() => {
    fetch('donation.json')
      .then(res => res.json())
      .then(data => {
        setDonations(data);
        setFilteredDonations(data); // Initialize filtered donations with all donations
      });
  }, []);

  const handleCategoryFilter = (category) => {
    const filtered = donations.filter(donation => {
      return donation.category.toLowerCase().includes(category.toLowerCase());
    });
    setFilteredDonations(filtered);
  };

  return (
    <div>
      <Banner onCategoryChange={handleCategoryFilter} />
      <div className="container mx-auto py-16 flex justify-evenly flex-wrap gap-7">
        {
          filteredDonations.map(donation => <Card key={donation.id} donation={donation} />)
        }
      </div>
    </div>
  );
};

export default Home;
