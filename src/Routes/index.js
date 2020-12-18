import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Overview from "../Pages/Overview";
import { Contact } from "../Pages/Contact";
import { Favorites } from "../Pages/Favorites";
import { Header, Nav, Wrapper, Brand, Form, Footer } from "../Components";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header>
        <Wrapper space="2"
          flex alignItems="center"
          justifyContent="space-between"
        >
          <Brand size={3} />
          <Nav/>
        </Wrapper>
      </Header>
      <Form />
      <Switch>
        <Route path="/" exact component={Overview} />
        <Route path="/contact" exact component={Contact}/>
        <Route path="/favorites" exact component={Favorites}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
