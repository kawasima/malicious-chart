import "bulma/css/versions/bulma-no-dark-mode.min.css";
import "bulma-slider/dist/css/bulma-slider.min.css";

import { createRoot } from "react-dom/client";
import PieChart3d from "./components/PieChart3d";

const App = () => (
  <div>
    <PieChart3d />
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
