import "./App.css";
import Homepage from "./components/screens/Homepage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Hotels from "./components/screens/Hotels";
import Restaurants from "./components/screens/Restaurants";
import ThingsToDo from "./components/screens/ThingsToDo";
import Travel from "./components/screens/Travel";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path ="/" element = {<Homepage/>}/>
    <Route path = "/hotels" element = {<Hotels/>} />
    <Route path = "/restaurants" element = {<Restaurants/>} />
    <Route path = "/thingstodo" element = {<ThingsToDo/>} />
    <Route path = "/travel" element = {<Travel/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
