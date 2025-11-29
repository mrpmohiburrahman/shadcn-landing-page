
import "./App.css";
import { Cta } from "./components/Cta";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col gap-8 md:gap-12">
        <Hero />
        <Features />
        <HowItWorks />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
