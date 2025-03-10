import "./App.css";
import logo from "./assets/devux_logo_original.svg";
import Schema from "./components/schema/Schema";

const App = () => (
  <>
    <div>
      <a href="https://sessionize.com/p2p-opdevux-25" target="_blank">
        <img src={logo} className="logo" alt="React logo" />
      </a>
    </div>
    <h1>DevUx Schema Viewer</h1>
    <Schema />
  </>
);

export default App;
