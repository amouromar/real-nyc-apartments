'use client'

export default function Map() {
  return (
    <div className="mt-12 h-[400px] rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d-87.47099868255615!3d41.654431979241415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811db2d1f1ab939%3A0x8a5bc43a7b56ea3d!2s101%20E%20129th%20St%2C%20East%20Chicago%2C%20IN%2046312%2C%20USA!5e0!3m2!1sen!2s!4v1644834387623!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
} 