import About from "./components/about";
import Contack from "./components/contack";
import Header from "./components/header";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="about-page" element={ <About/> }/>
        <Route path="contack-page" element={ <Contack/> }/>
        <Route path="home-page" element={ <Home/> }/>
      </Routes>
    </div>
  );
}

export default App;
