import Image from 'next/image'

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[--gold] mb-2">Why Choose us</p>
            <h2 className="text-3xl text-[--charcoal] mb-6">
              We Provide Latest Properties For Our Valuable Clients.
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="flex gap-4 items-start">
                <div className="text-[--gold] text-2xl">💰</div>
                <div>
                  <h3 className="text-xl text-[--charcoal] mb-2">Budget Friendly</h3>
                  <p className="text-gray-600">
                    Properties are most budget friendly to you have opportunity to find the best one
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="text-[--gold] text-2xl">📍</div>
                <div>
                  <h3 className="text-xl text-[--charcoal] mb-2">Prime Location</h3>
                  <p className="text-gray-600">
                    Properties are most budget friendly to you have opportunity to find the best one
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="text-[--gold] text-2xl">🤝</div>
                <div>
                  <h3 className="text-xl text-[--charcoal] mb-2">Trusted By Thousand</h3>
                  <p className="text-gray-600">
                    Properties are most budget friendly to you have opportunity to find the best one
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 rounded-full overflow-hidden">
              <Image
                src="/images/building-four.jpg"
                alt="Feature property"
                width={300}
                height={300}
                className="rounded-tl-full"
              />
              <Image
                src="/images/building-three.jpg"
                alt="Feature property"
                width={300}
                height={300}
                className="rounded-tr-full"
              />
              <Image
                src="/images/building-two.jpg"
                alt="Feature property"
                width={300}
                height={300}
                className="rounded-bl-full"
              />
              <Image
                src="/images/building-one.jpg"
                alt="Feature property"
                width={300}
                height={300}
                className="rounded-br-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 