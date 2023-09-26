import { Chart } from "react-google-charts";
import { getStoredDonations } from "../../utility/LocalStorage";
import { useEffect, useState } from "react";

const Statistic = () => {
  const [donationsLength, setDonationsLength] = useState(0);
  const [newStoredDonations, setNewStoredDonations] = useState(0);

  const storedDonations = getStoredDonations();

  useEffect(() => {
    // Fetch data from your JSON file
    fetch('/donation.json')
      .then((res) => res.json())
      .then((data) => setDonationsLength(data.length))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Update the newStoredDonations state when the storedDonations length changes
  useEffect(() => {
    setNewStoredDonations(storedDonations.length);
  }, [storedDonations]);

  // Define your chart data with meaningful labels
  const data = [
    ["Category", "Count"],
    ["Your Donations", newStoredDonations],
    ["Total Donations", donationsLength],
  ];

  return (
    <div className="container py-36 mx-auto">
      <Chart chartType="PieChart" data={data} width={"100%"} height={"400px"} />
    </div>
  );
};

export default Statistic;
