import * as React from "react";
import * as ReactDOM from "react-dom";

import PieChart3d from "./components/PieChart3d";

const App = () => (<div>
  <PieChart3d />
</div>)

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
