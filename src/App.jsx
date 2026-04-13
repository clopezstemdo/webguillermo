import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="app-wrapper">
      <ScrollToTop />
      <Navbar />

      <main className="main-content">
        <AppRouter />
      </main>

      <Footer />
    </div>
  );
}
