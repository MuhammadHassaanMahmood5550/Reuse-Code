import Navbar from "./components/Navbar";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import SignIn from "./components/SignIn";
import FirePage from "./components/FirePage";
import EkkoLight from "./components/EkkoLight";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>

      <Route path="/Detail:id" element={<Detail/>}>
      </Route>

      <Route path="/SignIn" element={<SignIn/>}>
      </Route>

      <Route path="/FirePage" element={<FirePage/>}>
      </Route>

      <Route path="/EkkoLight" element={<EkkoLight/>}>
      </Route>

    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
