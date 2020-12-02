import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Overview from "../Pages/Overview";
import { Contact } from "../Pages/Contact";
import { Favorites } from "../Pages/Favorites";
import { Header, Nav, Wrapper, Brand, Form } from "../Components";
import { useShowForm } from "../Hooks";

export default function Routes() {
  const { show, setShow } = useShowForm()
  return (
    <BrowserRouter>
      <Header>
        <Wrapper space="2" flex alignItems="center" justifyContent="space-between">
          <Brand size={3} />
          <Nav action={() => setShow(!show)}/>
        </Wrapper>
      </Header>
      {show && <Form />}
      <Switch>
        <Route path="/" exact>
          <Overview />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
