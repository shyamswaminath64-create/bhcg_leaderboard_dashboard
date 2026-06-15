export default function PerformanceChart({ data }) {
  if (!data) return null; // ✅ prevents crash

  const chartData = data.map((val, i) => ({
    week: `W${i + 1}`,
    score: val,
  }));

  return (
    <LineChart width={300} height={200} data={chartData}>
      <XAxis dataKey="week" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="score" stroke="#3b82f6" />
    </LineChart>
  );
}