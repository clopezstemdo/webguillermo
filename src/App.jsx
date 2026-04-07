import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <main className="main-content">
        <AppRouter />
      </main>

      <Footer />
    </div>
  );
}
