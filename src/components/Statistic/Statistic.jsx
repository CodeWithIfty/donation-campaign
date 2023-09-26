import { Chart } from "react-google-charts";
import { getStoredDonations } from "../../utility/LocalStorage";
import { useEffect, useState } from "react";


export const options = {
    title: "My Daily Activities",
  };





const Statistic = () => {
    const [donationsLength, setDonationsLength] = useState(0);
    
    const storedDonations = getStoredDonations();
    const newStoredDonations = storedDonations.length;
    console.log(newStoredDonations)
useEffect(() => {

    fetch('/donation.json')
    .then(res => res.json())
    .then(data => setDonationsLength(data.length))
},[])


const data = [
    ["Task", "Hours per Day"],
    ["Total Donations", donationsLength],
    ["Donated", newStoredDonations],

  ];

  return (
    <div className="container py-36 mx-auto ">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  )
}

export default Statistic
