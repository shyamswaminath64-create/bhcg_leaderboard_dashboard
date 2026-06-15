export default function SummaryCards({ students }) {
const total = students.length;

const avgPoints =
students.reduce((sum, s) => sum + s.points, 0) / total;

const highest = Math.max(...students.map((s) => s.points));

const avgCompletion =
students.reduce((sum, s) => sum + s.completion, 0) / total;

return ( <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">


  <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded shadow hover:shadow-md transition">
    <h3 className="text-sm text-gray-500 dark:text-gray-400">
      Total Learners
    </h3>
    <p className="text-xl font-bold">{total}</p>
  </div>

  <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded shadow hover:shadow-md transition">
    <h3 className="text-sm text-gray-500 dark:text-gray-400">
      Average Points
    </h3>
    <p className="text-xl font-bold">{avgPoints.toFixed(0)}</p>
  </div>

  <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded shadow hover:shadow-md transition">
    <h3 className="text-sm text-gray-500 dark:text-gray-400">
      Highest Score
    </h3>
    <p className="text-xl font-bold">{highest}</p>
  </div>

  <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded shadow hover:shadow-md transition">
    <h3 className="text-sm text-gray-500 dark:text-gray-400">
      Avg Completion %
    </h3>
    <p className="text-xl font-bold">
      {avgCompletion.toFixed(0)}%
    </p>
  </div>

</div>
);
}
