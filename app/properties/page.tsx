import PageHeader from "@/components/PageHeader"
import PropertyFilters from "@/components/properties/PropertyFilters"
import PropertyGrid from "@/components/properties/PropertyGrid"
import { type Property } from "@/types/property"

// Mock data - In real app, this would come from your API/database
const properties: Property[] = [
  {
    id: 1,
    title: "Modern Apartment in Downtown",
    image: "/building-one.jpg",
    price: 550000,
    location: "Manhattan, NY",
    beds: 2,
    baths: 2,
    size: 1200,
    type: "Apartment",
    status: "For Sale",
    featured: true
  },
  // ... add more properties
]

export default function PropertiesPage() {
  return (
    <main>
      <PageHeader 
        title="Our Properties" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Properties", href: "/properties" }
        ]} 
      />
      <div className="container mx-auto px-6 py-12">
        <PropertyFilters />
        <PropertyGrid properties={properties} />
      </div>
    </main>
  )
} 