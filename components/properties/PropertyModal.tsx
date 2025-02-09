'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { type Property } from '@/types/property'
import EnquiryModal from './EnquiryModal'

interface PropertyModalProps {
  property: Property
  onClose: () => void
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [showEnquiry, setShowEnquiry] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Mock multiple images - in real app, these would come from property data
  const images = [
    property.image,
    '/images/building-two.jpg',
    '/images/building-three.jpg',
    '/images/building-four.jpg'
  ]

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-lg w-[95%] h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-2xl text-[--charcoal] font-semibold">
              {property.title}
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {/* Image Carousel */}
            <div className="relative h-[50vh] bg-gray-100">
              <Image
                src={images[currentImageIndex] ?? '/images/placeholder.jpg'} 
                alt={`Property image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              <button 
                onClick={() => setCurrentImageIndex(i => i > 0 ? i - 1 : images.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white"
              >
                ←
              </button>
              <button 
                onClick={() => setCurrentImageIndex(i => (i + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white"
              >
                →
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-2 h-2 rounded-full ${
                      i === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-[2fr,1fr] gap-8 p-8">
              {/* Main Content */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-gray-600 mb-2">{property.location}</p>
                    <div className="text-2xl text-[--charcoal] font-semibold">
                      ${property.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="primary-button" onClick={() => setShowEnquiry(true)}>
                      Enquire Now
                    </button>
                    <button className="border border-[--gold] text-[--gold] px-6 py-2 rounded hover:bg-[--gold] hover:text-white transition-colors">
                      Schedule Tour
                    </button>
                  </div>
                </div>

                {/* Tour Schedule */}
                <div className="mb-8">
                  <h3 className="text-xl text-[--charcoal] font-semibold mb-4">Schedule a Tour</h3>
                  <div className="flex gap-4 mb-4">
                    <button className="px-6 py-3 border rounded-lg hover:border-[--gold] hover:text-[--gold]">
                      Feb 9
                    </button>
                    <button className="px-6 py-3 border rounded-lg hover:border-[--gold] hover:text-[--gold]">
                      Feb 10
                    </button>
                    <button className="px-6 py-3 border rounded-lg hover:border-[--gold] hover:text-[--gold]">
                      Feb 11
                    </button>
                    <button className="px-6 py-3 border rounded-lg hover:border-[--gold] hover:text-[--gold]">
                      Feb 12
                    </button>
                    <button className="px-6 py-3 text-[--gold]">
                      See more dates
                    </button>
                  </div>
                </div>

                {/* Property Details */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                  <div className="p-4 bg-gray-50 rounded">
                    <div className="text-gray-600">Bedrooms</div>
                    <div className="text-[--charcoal] font-semibold">{property.beds}</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <div className="text-gray-600">Bathrooms</div>
                    <div className="text-[--charcoal] font-semibold">{property.baths}</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <div className="text-gray-600">Size</div>
                    <div className="text-[--charcoal] font-semibold">{property.size} sqft</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <div className="text-gray-600">Type</div>
                    <div className="text-[--charcoal] font-semibold">{property.type}</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl text-[--charcoal] font-semibold mb-4">Description</h3>
                  <p className="text-gray-600">
                    As you enter this remarkable flex 2, you&aposll be immediately captivated by the grandeur of the open concept living
                    area that you can add a flex wall to make a bedroom. The expansive knee-to-ceiling windows...
                  </p>
                  <button className="text-[--gold] mt-2">Read more</button>
                </div>

                <p>
                  This property is listed for $500,000 &apos; negotiable.
                </p>
              </div>

              {/* Sidebar */}
              <div>
                {property.agent && (
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl text-[--charcoal] font-semibold mb-4">Contact Agent</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={property.agent.image}
                        alt={property.agent.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-[--charcoal]">{property.agent.name}</div>
                        <div className="text-gray-600">{property.agent.phone}</div>
                      </div>
                    </div>
                    <button className="w-full primary-button">
                      Contact Agent
                    </button>
                  </div>
                )}

                {/* Additional Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>🏢</span> Property type: Apartment
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>🕒</span> Last updated: 4 weeks ago
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>🐕</span> Pets allowed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showEnquiry && (
        <EnquiryModal 
          property={property}
          onClose={() => setShowEnquiry(false)}
        />
      )}
    </>
  )
} 