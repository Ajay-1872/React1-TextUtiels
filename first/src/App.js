import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
// import TextForm from "./component/TextForm";

function App() {
  return (
    <>
      <Navbar />

      <div className="container my-3">
        {/* <TextForm /> */}
        <About/>
      </div>
      
    </>
  );
}
export default App;

