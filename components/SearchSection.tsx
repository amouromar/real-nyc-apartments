export default function SearchSection() {
  return (
    <div className="container mx-auto px-6 mt-16 relative z-10">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex gap-4 mb-6">
          <button className="px-6 py-2 text-[--charcoal] hover:text-[--gold] border-b-2 border-transparent hover:border-[--gold] transition-colors">
            Buy
          </button>
          <button className="px-6 py-2 text-[--charcoal] hover:text-[--gold] border-b-2 border-transparent hover:border-[--gold] transition-colors">
            Sell
          </button>
          <button className="px-6 py-2 text-[--charcoal] hover:text-[--gold] border-b-2 border-transparent hover:border-[--gold] transition-colors">
            Rent
          </button>
          <button className="px-6 py-2 text-[--charcoal] hover:text-[--gold] border-b-2 border-transparent hover:border-[--gold] transition-colors">
            Co-Living
          </button>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Location</label>
            <input 
              type="text" 
              placeholder="Choose location" 
              className="search-input w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Property Type</label>
            <input 
              type="text" 
              placeholder="Property type" 
              className="search-input w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Price Range</label>
            <input 
              type="text" 
              placeholder="$500-$2500" 
              className="search-input w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Property Size</label>
            <input 
              type="text" 
              placeholder="2500 sq ft" 
              className="search-input w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 