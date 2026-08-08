import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <header>
        <Navbar />
      </header>

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;