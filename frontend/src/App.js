import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./bootstrap.min.css"
function App() {
  return (
    <div>
      <Header />
      <div className="App">Hello World</div>
      <main style={{ minHeight: "93vh" }}></main>
      <Footer />
    </div>
  );
}

export default App;
