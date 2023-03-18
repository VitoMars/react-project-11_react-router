import { BrowserRouter as Router, Link } from "react-router-dom";
import RouterComponent from "./RouterComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="d-flex flex-row justify-content-center mx-auto gap-2 mb-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/profile/1">Profile 1</Link>
        </nav>
        <RouterComponent />
      </Router>
    </div>
  );
}

export default App;
