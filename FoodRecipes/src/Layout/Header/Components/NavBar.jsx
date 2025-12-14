import {
  Link,
} from 'react-router-dom';

const NavBar = () => {

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/Explore" },
    { name: "Help", path: "/Help" }
  ]

  return (
    <nav className="flex gap-6">
      {navLinks.map((link) => (
        <Link key={link.name} to={`/`}>
          <button
            className="cursor-pointer hover:text-[#509E2F]" >
            {link.name}
          </button>
        </Link>
      ))}
    </nav>
  )
}

export default NavBar