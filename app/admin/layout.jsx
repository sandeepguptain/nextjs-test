import Nav from "../(components)/Nav"
export default function AdminLayout({
    children, 
  }) {
    return (
      <section>
        <Nav />
        {children}
      </section>
    )
  }