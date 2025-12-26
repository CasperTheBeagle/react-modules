import "./App.css";
import { Header,MainContent,ProductSection,Footer,FAQ } from "./components/comp";
import { Provider } from "@/components/ui/provider";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
