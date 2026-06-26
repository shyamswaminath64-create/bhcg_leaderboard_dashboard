import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Leaderboard from "./Components/Leaderboard";
import SummaryCards from "./Components/SummaryCards";
import StudentProfile from "./Components/StudentProfile";

import { students } from "./data/students";

function Dashboard() {

  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark bg-gray-900 min-h-screen p-6" : "bg-gray-100 min-h-screen p-6"}>

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
          Learning Leaderboard Dashboard
        </h1>

        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black"
        >
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

      </div>

      <SummaryCards students={students} />

      <div className="mt-8">
        <Leaderboard />
      </div>

    </div>
  );
}

function App() {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />} />

      <Route
        path="/student/:name"
        element={<StudentProfile />}
      />

    </Routes>
  );
}

export default App;
