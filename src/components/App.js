import React from "react";
import { Switch, Route } from "react-router-dom";
import Grooming from "./Grooming";
import Shirt from "./Shirt";
import Trouser from "./Trouser";
import Jewellery from "./Jewellery";
import Index1 from "./Index1";
import Women from "./Women";
import Layout from "./Layout";

const App = () => {
  return (
    <div>
        <Layout/>
      <Switch>
        <Route exact path="/" component={Index1} />
        <Route path="/women" component={Women} />
        <Route path="/women/grooming" component={Grooming} />
        <Route path="/women/shirt" component={Shirt} />
        <Route path="/women/trouser" component={Trouser} />
        <Route path="/women/jewellery" component={Jewellery} />
      </Switch>
    </div>
  );
};

export default App;
