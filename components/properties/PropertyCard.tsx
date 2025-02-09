import Image from 'next/image'
import { type Property } from '@/types/property'

interface PropertyCardProps {
  property: Property
  onClick: () => void
}

export default function PropertyCard({ property, onClick }: PropertyCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-64">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-[--gold] text-white px-3 py-1 rounded">
          {property.status}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl text-[--charcoal] font-semibold mb-2">
          {property.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {property.location}
        </p>

        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
          <span>🛏 {property.beds} Beds</span>
          <span>🚿 {property.baths} Baths</span>
          <span>📏 {property.size} sqft</span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[--charcoal] font-semibold text-xl">
            ${property.price.toLocaleString()}
          </p>
          <button className="text-[--gold] hover:text-[--charcoal]">
            View Details →
          </button>
        </div>
      </div>
    </div>
  )
} 