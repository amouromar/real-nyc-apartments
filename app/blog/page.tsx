import PageHeader from "@/components/PageHeader"
import BlogGrid from "@/components/blog/BlogGrid"
import BlogSidebar from "@/components/blog/BlogSidebar"
import { type BlogPost } from "@/types/blog"

// Mock data - In real app, this would come from your API/database
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of NYC Real Estate: Trends to Watch",
    excerpt: "Discover the emerging trends shaping New York City's real estate market in 2024 and beyond...",
    content: "Full article content here...",
    image: "/building-one.jpg",
    author: {
      name: "Sarah Johnson",
      image: "/agent-1.jpg",
      role: "Real Estate Analyst"
    },
    date: "2024-02-01",
    category: "Market Trends",
    tags: ["NYC", "Real Estate", "Market Analysis"],
    likes: 124,
    comments: []
  },
  // Add more blog posts...
]

export default function BlogPage() {
  return (
    <main>
      <PageHeader 
        title="Real Estate Blog" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" }
        ]} 
      />
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-[1fr,300px] gap-12">
          <BlogGrid posts={blogPosts} />
          <BlogSidebar />
        </div>
      </div>
    </main>
  )
} 