export default function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl text-[--charcoal] font-semibold mb-6">Contact Us</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-[--charcoal] font-semibold mb-2">Address:</h3>
          <p className="text-gray-600">
            101 E 129th St, East Chicago, IN 46312<br />
            United States
          </p>
        </div>
        
        <div>
          <h3 className="text-[--charcoal] font-semibold mb-2">Information:</h3>
          <p className="text-gray-600">
            <a href="tel:1-333-345-6868" className="hover:text-[--gold]">1-333-345-6868</a><br />
            <a href="mailto:hi.Demoadmin@gmail.com" className="hover:text-[--gold]">hi.Demoadmin@gmail.com</a>
          </p>
        </div>
        
        <div>
          <h3 className="text-[--charcoal] font-semibold mb-2">Opentime:</h3>
          <p className="text-gray-600">
            Monday – Friday: 08:00 – 20:00<br />
            Saturday – Sunday: 10:30 – 18:30
          </p>
        </div>
        
        {/* <div>
          <h3 className="text-[--charcoal] font-semibold mb-2">Follow Us:</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-[--gold]">
              <FacebookIcon />
            </a>
            <a href="#" className="text-gray-600 hover:text-[--gold]">
              <InstagramIcon />
            </a>
            <a href="#" className="text-gray-600 hover:text-[--gold]">
              <TwitterIcon />
            </a>
            <a href="#" className="text-gray-600 hover:text-[--gold]">
              <LinkedInIcon />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  )
} 