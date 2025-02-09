'use client'

import { useState } from 'react'
import { type Property } from '@/types/property'
import PropertyCard from './PropertyCard'
import PropertyModal from './PropertyModal'

interface PropertyGridProps {
  properties: Property[]
}

export default function PropertyGrid({ properties }: PropertyGridProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard 
            key={property.id}
            property={property}
            onClick={() => setSelectedProperty(property)}
          />
        ))}
      </div>

      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </>
  )
} 