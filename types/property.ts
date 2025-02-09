export type PropertyStatus = "For Sale" | "For Rent" | "Sold" | "Reserved"
export type PropertyType = "Apartment" | "House" | "Condo" | "Villa" | "Office"

export interface Property {
  id: number
  title: string
  image: string
  price: number
  location: string
  beds: number
  baths: number
  size: number
  type: PropertyType
  status: PropertyStatus
  featured: boolean
  description?: string
  amenities?: string[]
  agent?: {
    name: string
    image: string
    phone: string
    email: string
  }
} 