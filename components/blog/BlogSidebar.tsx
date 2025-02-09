export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-[--charcoal] mb-4">
          Search Posts
        </h3>
        <input
          type="search"
          placeholder="Search..."
          className="search-input w-full"
        />
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-[--charcoal] mb-4">
          Categories
        </h3>
        <div className="space-y-2">
          {['Market Trends', 'Property Tips', 'Investment', 'Lifestyle'].map(category => (
            <button
              key={category}
              className="block w-full text-left px-4 py-2 rounded hover:bg-gray-100 text-gray-600 hover:text-[--charcoal]"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-[--charcoal] mb-4">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {['NYC', 'Real Estate', 'Investment', 'Market Analysis', 'Tips', 'Trends'].map(tag => (
            <button
              key={tag}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-[--gold] hover:text-white transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 