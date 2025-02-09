'use client'

import { useState } from 'react'
import { type Property } from '@/types/property'

interface EnquiryModalProps {
  property: Property
  onClose: () => void
}

export default function EnquiryModal({ property, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `Hi, I am interested in ${property.title} listed for $${property.price.toLocaleString()}. Please contact me with more information.`
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Enquiry submitted:', formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-xl w-full">
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-xl text-[--charcoal] font-semibold">
            Enquire About This Property
          </h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Name</label>
            <input
              type="text"
              className="search-input w-full"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Email</label>
            <input
              type="email"
              className="search-input w-full"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Phone (optional)</label>
            <input
              type="tel"
              className="search-input w-full"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Message</label>
            <textarea
              rows={4}
              className="search-input w-full"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>

          <div className="flex gap-4">
            <button type="submit" className="primary-button flex-1">
              Send Enquiry
            </button>
            <button 
              type="button" 
              onClick={onClose}
              className="px-6 py-2 border border-gray-200 rounded hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 