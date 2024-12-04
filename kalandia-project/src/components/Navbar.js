import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
      <div className="navbar-center">
        <Link href="/">Kalandia</Link>
      </div>
      <ul className="navbar-right">
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
