import Nav from "../(components)/Nav"
export default function UserLayout({
    children, 
  }) {
    return (
      <section>
        <Nav />
        {children}
      </section>
    )
  }