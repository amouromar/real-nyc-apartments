'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl text-[--charcoal] font-semibold mb-6">Drop Us A Line</h2>
      <p className="text-gray-600 mb-8">
        Feel free to connect with us through our online channels for updates, news, and more.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="search-input"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="search-input"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <input
            type="tel"
            placeholder="Phone Number"
            className="search-input"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <input
            type="text"
            placeholder="Subject"
            className="search-input"
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
            required
          />
        </div>
        
        <textarea
          placeholder="Your Message"
          rows={6}
          className="search-input w-full"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
        />
        
        <button type="submit" className="primary-button">
          Send Message
        </button>
      </form>
    </div>
  )
} 