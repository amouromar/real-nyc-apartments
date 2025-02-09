import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/building-two.jpg"
          alt="Modern building"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[--charcoal]/80 to-[--charcoal]/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-32">
        <div className="max-w-xl">
          <p className="mb-4 font-medium text-[--gold]">
            A new way to find Properties
          </p>
          <h1 className="mb-6 font-serif text-5xl text-[--yinmn-blue]">
            Find your Most Suitable Property
          </h1>
          <p className="text-[--yinmn-blue] mb-8">
            Discover the perfect property that matches your needs and
            preferences. Our extensive database of real estate listings makes
            finding your dream home easier than ever.
          </p>

          {/* Search Bar 
          <div className="flex gap-4 rounded-lg bg-white p-4 shadow-lg">
            <input
              type="text"
              placeholder="Search by location..."
              className="search-input flex-1"
            />
            <button className="primary-button whitespace-nowrap">
              Search Property
            </button>
          </div>*/}

          {/* Stats */}
          <div className="mt-12 flex gap-12">
            <div>
              <div className="mb-2 text-3xl font-bold text-[--yinmn-blue]">500</div>
              <div className="text-[--yinmn-blue]">Renters</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-[--yinmn-blue]">200</div>
              <div className="text-[--yinmn-blue]">Properties</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-[--yinmn-blue]">10</div>
              <div className="text-[--yinmn-blue]">Agents</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
