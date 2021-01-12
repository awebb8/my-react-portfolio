import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import AllHues from "./pages/PortfolioPages/AllHues";
import WhatsForDinner from "./pages/PortfolioPages/WhatsForDinner";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/about"]}>
            <About />
          </Route>
          <Route exact path={"/contact"}>
            <Contact />
          </Route>
          <Route exact path={"/portfolio"}>
            <Portfolio />
          </Route>
          <Route exact path={"/AllHues"}>
            <AllHues />
          </Route>
          <Route exact path={"/WhatsForDinner"}>
            <WhatsForDinner />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
