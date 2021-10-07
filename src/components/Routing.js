import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SearchResults from "./search-results/SearchResults";
import PropertyDetail from "./property-detail/PropertyDetail";

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