import Image from 'next/image'

export default function AboutContent() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl text-[--charcoal] font-semibold mb-6">
              We're on a Mission to Change View of Real Estate Field
            </h2>
            <p className="text-gray-600 mb-6">
              Our mission is to help people find their perfect homes while making the process as smooth and transparent as possible. With years of experience in the NYC real estate market, we understand the unique challenges and opportunities that come with finding a home in this vibrant city.&apos;
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-[--gold] text-3xl mb-2">15+</div>
                <div className="text-[--charcoal]">Years of Experience</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-[--gold] text-3xl mb-2">200+</div>
                <div className="text-[--charcoal]">Properties Listed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/building-three.jpg"
              alt="Modern building"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-[--gold] text-white p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">1.2k+</div>
              <div>Happy Customers</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-white rounded-lg shadow-sm">
            <div className="text-[--gold] text-4xl mb-4">🏢</div>
            <h3 className="text-xl text-[--charcoal] font-semibold mb-3">
              Modern Properties
            </h3>
            <p className="text-gray-600">
              We focus on modern, well-maintained properties that meet the highest standards of quality and comfort.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-sm">
            <div className="text-[--gold] text-4xl mb-4">💎</div>
            <h3 className="text-xl text-[--charcoal] font-semibold mb-3">
              Quality Services
            </h3>
            <p className="text-gray-600">
              Our team provides comprehensive support throughout your entire real estate journey.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-sm">
            <div className="text-[--gold] text-4xl mb-4">🤝</div>
            <h3 className="text-xl text-[--charcoal] font-semibold mb-3">
              Trusted Partners
            </h3>
            <p className="text-gray-600">
              We work with trusted partners to ensure every aspect of your property search is handled professionally.
            </p>
          </div>
        </div>

        <div className="bg-[--charcoal] rounded-lg p-12 text-center">
          <h2 className="text-3xl text-white mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-[--paynes-gray] mb-8 max-w-2xl mx-auto">
            Let us help you navigate the NYC real estate market and find the perfect property that matches your needs and preferences.
          </p>
          <button className="primary-button">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  )
} 