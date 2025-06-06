import { createRoot } from "react-dom/client";
import typescriptLogo from "/typescript.svg";
import { Header, Counter, Button } from "@repo/ui";
import "./style.css";

const App = () => (
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" className="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img
        src={typescriptLogo}
        className="logo vanilla"
        alt="TypeScript logo"
      />
    </a>
    <Header title="Web" />
    <div className="card">
      <Counter />
    </div>
    <Button />
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
