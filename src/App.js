import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/body/Body";
import More from "./components/more/More";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [profile, setProfile] = useState(false);
  const [apps, setApps] = useState(false);

  const handleBars = () => {
    setSidebar(false);
    setProfile(false);
    setApps(false);
  };
  return (
    <div className="App">
      <div className="app">
        <header>
          <Header
            sidebar={sidebar}
            setSidebar={setSidebar}
            profile={profile}
            setProfile={setProfile}
            apps={apps}
            setApps={setApps}
          />
        </header>
        <section onClick={handleBars}>
          <Body />
        </section>
        <section className="send-feedback-container">
          <button className="send-feedback">send feedback</button>
        </section>
        <section onClick={handleBars}>
          <More />
        </section>
      </div>
    </div>
  );
}

export default App;
