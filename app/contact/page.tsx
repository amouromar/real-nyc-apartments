import PageHeader from "@/components/PageHeader"
import ContactForm from "@/components/ContactForm"
import ContactInfo from "@/components/ContactInfo"
import Map from "@/components/Map"

export default function ContactPage() {
  return (
    <main>
      <PageHeader 
        title="Contact Us" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" }
        ]} 
      />
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
        <Map />
      </div>
    </main>
  )
} 