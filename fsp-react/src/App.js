import Headers from "./components/Header";
import Center from "./components/Center";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import "./Css/main.css";

function App() {
  return (
    <div className="App">
      <Headers />
      <Center />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
