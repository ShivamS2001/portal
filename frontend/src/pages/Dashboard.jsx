import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://portal-jl4e.onrender.com/api/dashboard")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Welcome, {data.name}</h1>
      <p><strong>Referral Code:</strong> {data.referralCode}</p>
      <p><strong>Total Donations Raised:</strong> ₹{data.donationsRaised}</p>

      <h2 className="text-2xl mt-6">Rewards / Unlockables</h2>
      <ul className="list-disc ml-6">
        {data.rewards.map((reward, index) => (
          <li key={index}>{reward}</li>
        ))}
      </ul>
    </div>
  );
}


