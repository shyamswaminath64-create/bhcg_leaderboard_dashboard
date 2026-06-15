export default function SummaryCards({ students }) {
  const total = students.length;

  const avgPoints =
    students.reduce((sum, s) => sum + s.points, 0) / total;

  const highest = Math.max(...students.map((s) => s.points));

  const avgCompletion =
    students.reduce((sum, s) => sum + s.completion, 0) / total;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-sm text-gray-500">Total Learners</h3>
        <p className="text-xl font-bold">{total}</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-sm text-gray-500">Average Points</h3>
        <p className="text-xl font-bold">{avgPoints.toFixed(0)}</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-sm text-gray-500">Highest Score</h3>
        <p className="text-xl font-bold">{highest}</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-sm text-gray-500">Avg Completion %</h3>
        <p className="text-xl font-bold">
          {avgCompletion.toFixed(0)}%
        </p>
      </div>
    </div>
  );
}