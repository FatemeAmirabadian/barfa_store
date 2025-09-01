export default function ArticleCard({ title, summary, date }) {
    return (
      <div className="border p-4 rounded shadow hover:shadow-lg transition">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{summary}</p>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
    );
  }
  