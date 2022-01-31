import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SearchResults from "./search-results/SearchResults";
import PropertyDetail from "./property-detail/PropertyDetail";
import Footer from "./common/Footer";

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
      <Footer />
    </Router>
  )
};

export default Routing;