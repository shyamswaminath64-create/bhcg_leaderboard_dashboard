import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { students } from "../data/students";

export default function Leaderboard() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const navigate = useNavigate();

  const exportCSV = () => {
    const headers = [
      "Name",
      "Points",
      "Courses",
      "Completion",
      "Streak",
    ];

    const rows = students.map((s) => [
      s.name,
      s.points,
      s.courses,
      s.completion,
      s.streak,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const link = document.createElement("a");
    link.setAttribute("href", csvContent);
    link.setAttribute("download", "leaderboard.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  let sorted = [...students].sort((a, b) => b.points - a.points);

  sorted = sorted.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  if (filter !== "all") {
    sorted = sorted.slice(0, Number(filter));
  }

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded shadow hover:shadow-md transition">

      <h2 className="text-xl font-semibold mb-4">
        Leaderboard
      </h2>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-4">

        <input
          type="text"
          placeholder="Search learner..."
          className="border p-2 rounded w-1/2 dark:bg-gray-700 dark:text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded dark:bg-gray-700 dark:text-white"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="5">Top 5</option>
          <option value="10">Top 10</option>
        </select>

      </div>

      <button
        onClick={exportCSV}
        className="mb-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
      >
        Export CSV
      </button>

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
              key={s.name}
              onClick={() => navigate(`/student/${encodeURIComponent(s.name)}`)}
              className={`cursor-pointer border-b transition ${
                index === 0
                  ? "bg-yellow-200 font-semibold"
                  : index === 1
                  ? "bg-gray-300"
                  : index === 2
                  ? "bg-orange-200"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >

              <td>
                {index === 0
                  ? "🥇"
                  : index === 1
                  ? "🥈"
                  : index === 2
                  ? "🥉"
                  : index + 1}
              </td>

              <td className="text-blue-600 dark:text-blue-400 hover:underline">
                {s.name}
              </td>

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
