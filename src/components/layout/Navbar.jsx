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
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <button
          onClick={() => handleScroll("home")}
          className="text-xl font-bold tracking-tight"
        >
          Madesh
        </button>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item.name}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;