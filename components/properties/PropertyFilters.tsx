'use client'

import { useState } from 'react'
import { type PropertyStatus, type PropertyType } from '@/types/property'

export default function PropertyFilters() {
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    priceRange: [0, 2000000],
    beds: 'any',
    location: '',
  })

  const propertyTypes: PropertyType[] = [
    "Apartment", "House", "Condo", "Villa", "Office"
  ]

  const propertyStatus: PropertyStatus[] = [
    "For Sale", "For Rent", "Sold", "Reserved"
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="grid grid-cols-5 gap-6">
        {/* Status Filter */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">Status</label>
          <select 
            className="search-input w-full"
            value={filters.status}
            onChange={(e) => setFilters({...filters, status: e.target.value})}
          >
            <option value="all">Any Status</option>
            {propertyStatus.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        {/* Type Filter */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">Property Type</label>
          <select 
            className="search-input w-full"
            value={filters.type}
            onChange={(e) => setFilters({...filters, type: e.target.value})}
          >
            <option value="all">Any Type</option>
            {propertyTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">Price Range</label>
          <div className="flex gap-2">
            <input 
              type="number"
              placeholder="Min"
              className="search-input w-full"
              value={filters.priceRange[0]}
              onChange={(e) => {
                const newMin = parseInt(e.target.value, 10);
                setFilters({
                  ...filters,
                  priceRange: [isNaN(newMin) ? 0 : newMin, filters.priceRange[1] ?? 0]
                });
              }}
            />
            <input 
              type="number"
              placeholder="Max"
              className="search-input w-full"
              value={filters.priceRange[1]}
              onChange={(e) => {
                const newMax = parseInt(e.target.value, 10);
                setFilters({
                  ...filters,
                  priceRange: [filters.priceRange[0] ?? 0, isNaN(newMax) ? 0 : newMax]
                });
              }}
            />
          </div>
        </div>

        {/* Beds Filter */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">Bedrooms</label>
          <select 
            className="search-input w-full"
            value={filters.beds}
            onChange={(e) => setFilters({...filters, beds: e.target.value})}
          >
            <option value="any">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">Location</label>
          <input 
            type="text"
            placeholder="Enter location"
            className="search-input w-full"
            value={filters.location}
            onChange={(e) => setFilters({...filters, location: e.target.value})}
          />
        </div>
      </div>
    </div>
  )
} 