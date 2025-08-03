const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const dummyData = {
  name: "Shivam Intern",
  referralCode: "shivam2025",
  donationsRaised: 2500,
  rewards: ["Certificate", "Amazon Voucher", "T-Shirt"]
};

const leaderboard = [
  { name: "Amit", donations: 5000 },
  { name: "Shivam", donations: 2500 },
  { name: "Riya", donations: 1000 }
];

// API endpoint for dashboard
app.get('/api/dashboard', (req, res) => {
  res.json(dummyData);
});

// API endpoint for leaderboard
app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
