interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-[--charcoal] py-20 relative">
      <div className="absolute inset-0 bg-[url('/images/building-one.jpg')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl text-white font-semibold mb-4">{title}</h1>
        <div className="flex gap-2 text-[--paynes-gray]">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.href} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              <a 
                href={crumb.href}
                className="hover:text-[--gold] transition-colors"
              >
                {crumb.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 