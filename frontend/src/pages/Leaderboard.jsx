import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("https://portal-backend-g903.onrender.com/api/leaderboard")
      .then(res => res.json())
      .then(setLeaders);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Leaderboard</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Donations</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((l, i) => (
            <tr key={i}>
              <td className="border p-2">{l.name}</td>
              <td className="border p-2">₹{l.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

