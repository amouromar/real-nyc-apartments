import PageHeader from "@/components/PageHeader"
import AboutContent from "@/components/AboutContent"

export default function AboutPage() {
  return (
    <main>
      <PageHeader 
        title="About Us" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" }
        ]} 
      />
      <AboutContent />
    </main>
  )
} 