import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SearchResults from "./SearchResults";

const Routing = () => {
  return(
    <Router>
      <Switch>
        <Route path="/">
          <SearchResults />
        </Route>
      </Switch>
    </Router>
  )
};

export default Routing;