import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SearchResults from "./SearchResults";
import PropertyDetail from "./PropertyDetail";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/property/:propertyId">
          <PropertyDetail />
        </Route>
        <Route>
          <SearchResults />
        </Route>
      </Switch>
    </Router>
  )
};

export default Routing;