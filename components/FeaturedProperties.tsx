import Image from 'next/image'

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      image: "/images/building-four.jpg",
      stats: { beds: 4, baths: 2 }
    },
    {
      id: 2,
      image: "/images/building-three.jpg",
      stats: { beds: 3, baths: 2 }
    },
    {
      id: 3,
      image: "/images/building-two.jpg",
      stats: { beds: 2, baths: 1 }
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <p className="text-[--gold] mb-2">Newly Added</p>
        <h2 className="text-3xl text-[--charcoal] mb-8">Featured Properties.</h2>
        
        <div className="flex gap-4 mb-8">
          <button className="px-6 py-2 text-[--charcoal] hover:text-[--gold] transition-colors">
            All Properties
          </button>
          <button className="px-6 py-2 text-[--charcoal] hover:text-[--gold] transition-colors">
            For Buy
          </button>
          <button className="px-6 py-2 text-[--charcoal] hover:text-[--gold] transition-colors">
            For Sale
          </button>
          <button className="px-6 py-2 text-[--charcoal] hover:text-[--gold] transition-colors">
            For Rent
          </button>
          <button className="px-6 py-2 text-[--charcoal] hover:text-[--gold] transition-colors">
            Co-Living
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          {properties.map(property => (
            <div key={property.id} className="relative group">
              <div className="relative h-96">
                <Image
                  src={property.image}
                  alt="Featured property"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-white px-2 py-1 rounded text-sm">
                    🛏 {property.stats.beds}
                  </span>
                  <span className="bg-white px-2 py-1 rounded text-sm">
                    🚿 {property.stats.baths}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
