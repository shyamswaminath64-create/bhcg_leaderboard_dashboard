import Leaderboard from "./components/Leaderboard";
import SummaryCards from "./components/SummaryCards";
import { students } from "./data/students";

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Learning Leaderboard Dashboard
      </h1>

      <SummaryCards students={students} />
      <Leaderboard />
    </div>
  );
}

export default App;