

const NavBar = () => {

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/Explore" },
    { name: "Help", path: "/Help" }
  ]

  return (
    <nav className="flex gap-6">
      {navLinks.map((link) => (
        <button
          key={link.name}
          className="cursor-pointer hover:text-[#509E2F]" >
          {link.name}
        </button>
      ))}
    </nav>
  )
}

export default NavBar