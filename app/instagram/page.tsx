import PageHeader from "@/components/PageHeader"
import InstagramFeed from "@/components/instagram/InstagramFeed"
import InstagramStats from "@/components/instagram/InstagramStats"
import { type InstagramPost } from "@/types/instagram"

// Mock data - In real app, this would come from Instagram API
const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    image: "/building-one.jpg",
    caption: "Luxury penthouse with stunning city views 🌆 #RealEstate #LuxuryLiving",
    likes: 234,
    comments: 12,
    date: "2024-02-01T12:00:00Z",
    location: "Manhattan, NY"
  },
  // Add more posts...
]

export default function InstagramPage() {
  return (
    <main>
      <PageHeader 
        title="Instagram Feed" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Instagram", href: "/instagram" }
        ]} 
      />
      <div className="container mx-auto px-6 py-12">
        <InstagramStats />
        <InstagramFeed posts={instagramPosts} />
      </div>
    </main>
  )
} 