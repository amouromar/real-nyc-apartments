import Image from 'next/image'

export default function PopularProperties() {
  const properties = [
    {
      id: 1,
      title: "Orchid Casel de Paradise",
      image: "/images/building-one.jpg",
      date: "25 November 2021",
      price: 255500,
      stats: { views: 1200, beds: 4, baths: 2 }
    },
    {
      id: 2,
      title: "Ruposibangla de parlosia",
      image: "/images/building-two.jpg",
      date: "25 November 2021",
      price: 255500,
      stats: { views: 1200, beds: 3, baths: 2 }
    },
    {
      id: 3,
      title: "Sinomen Studio Palace",
      image: "/images/building-three.jpg",
      date: "25 November 2021",
      price: 255500,
      stats: { views: 1200, beds: 2, baths: 1 }
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <p className="text-center text-[--gold] mb-2">Best Choice</p>
        <h2 className="text-3xl text-center text-[--charcoal] mb-12">Popular Properties.</h2>
        
        <div className="grid grid-cols-3 gap-8">
          {properties.map(property => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl text-[--charcoal] mb-2">{property.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{property.date}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>👁 {property.stats.views}</span>
                  <span>🛏 {property.stats.beds}</span>
                  <span>🚿 {property.stats.baths}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-[--charcoal] font-semibold">
                    Price: ${property.price.toLocaleString()}
                  </p>
                  <button className="text-[--gold]">♡</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 