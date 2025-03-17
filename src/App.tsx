import "./App.css";
import logo from "./assets/devux_logo_original.svg";
import Schema from "./components/Schema/Schema";
import useSessions from "./hooks/useSessions";

const App = () => {
  const { sessions } = useSessions();
  return (
    <>
      <div>
        <a href="https://sessionize.com/p2p-opdevux-25" target="_blank">
          <img src={logo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>DevUx Schedule Viewer</h1>
      {sessions.length > 0 && <Schema sessions={sessions} />}
    </>
  );
};

export default App;
