function Navbar() {
  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <button onClick={() => handleScroll("home")}>
        Madesh
      </button>

      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleScroll(item.id)}
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
}

export default Navbar