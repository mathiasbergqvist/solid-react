import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/devux_logo_original.svg";
import Schema from "./components/Schema/Schema";
import { Talk } from "./models/Talk";
import FreeTextForm from "./design-system/FreeTextForm/FreeTextForm";
import Comments from "./components/Comments/Comments";

const App = () => {
  const [talks, setTalks] = useState<Array<Talk>>([]);

  const fetchSchema = async () => {
    try {
      await fetch("http://localhost:3232/talks")
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setTalks(data);
          }
        });
    } catch (_) {
      console.error("Failed to fetch talks");
    }
  };

  useEffect(() => {
    fetchSchema();
  }, []);

  return (
    <>
      <div>
        <a href="https://sessionize.com/p2p-opdevux-25" target="_blank">
          <img src={logo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>DevUx Schema Viewer</h1>
      {talks.length > 0 && <Schema talks={talks} />}
    </>
  );
};

export default App;
