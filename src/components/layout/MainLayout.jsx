import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <header>
        <Navbar />
      </header>

      <main>
        {children}
      </main>

      <footer>
        Footer will go here
      </footer>
    </div>
  );
}

export default MainLayout;