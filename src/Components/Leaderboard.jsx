import { useState } from "react";

const students = [
  { name: "Aarav", points: 950, courses: 5, completion: 90, streak: 12 },
  { name: "Priya", points: 870, courses: 4, completion: 85, streak: 9 },
  { name: "Rahul", points: 820, courses: 6, completion: 88, streak: 10 },
  { name: "Sneha", points: 780, courses: 3, completion: 80, streak: 7 },
  { name: "Karan", points: 720, courses: 2, completion: 75, streak: 5 },
  { name: "Meera", points: 690, courses: 3, completion: 78, streak: 6 },
  { name: "Rohit", points: 650, courses: 2, completion: 70, streak: 4 },
];

export default function Leaderboard() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  let sorted = [...students].sort((a, b) => b.points - a.points);

  // Search filter
  sorted = sorted.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  // Top filter
  if (filter !== "all") {
    sorted = sorted.slice(0, Number(filter));
  }

  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search learner..."
          className="border p-2 rounded w-1/2"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="5">Top 5</option>
          <option value="10">Top 10</option>
        </select>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
            <th>Courses</th>
            <th>Completion %</th>
            <th>Streak</th>
          </tr>
        </thead>

        <tbody>
          {sorted.map((s, index) => (
            <tr
              key={index}
              className={`border-b ${
                index === 0
                  ? "bg-yellow-100"
                  : index === 1
                  ? "bg-gray-200"
                  : index === 2
                  ? "bg-orange-100"
                  : ""
              }`}
            >
              <td>{index + 1}</td>
              <td>{s.name}</td>
              <td>{s.points}</td>
              <td>{s.courses}</td>
              <td>{s.completion}%</td>
              <td>{s.streak}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}