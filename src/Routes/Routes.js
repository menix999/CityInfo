import { BrowserRouter as Router, Route } from "react-router-dom";
import SingleTileDisplay from "../pages/SingleTileDisplay/SingleTileDisplay";
import Cities from "../pages/Cities/Cities";

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Cities} />
      <Route path="/:id" component={SingleTileDisplay} />
    </Router>
  );
};

export default Routes;
