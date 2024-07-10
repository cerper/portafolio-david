import NavBlog from '@/components/AdminNav'

export default function BlogInfoLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="">
      {/* Include shared UI here e.g. a header or sidebar */}
      <NavBlog />
      {children}
    </section>
  )
}
