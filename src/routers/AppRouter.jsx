/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePages";
import VistaAdministrador from "../pages/VistaAdministrador";
import VistaMesero from "../pages/VistaMesero";
import VistaCocinero from "../pages/VistaCocinero";

export default function AppRouter() {
    return (
    <Router>
        <div>
        <nav>
          {/* Links de navegación */}
            <ul>
            <li>
                <Link to="/administrador">Administrador</Link>
            </li>
            <li>
                <Link to="/mesero">Mesero</Link>
            </li>
            <li>
                <Link to="/cocinero">Cocinero</Link>
            </li>
            </ul>
        </nav>

        {/* Switch y rutas */}
        <Switch>
            <Route exact path="/">
            <HomePage />
            </Route>
            <Route path="/administrador">
            <VistaAdministrador />
            </Route>
            <Route path="/mesero">
            <VistaMesero />
            </Route>
            <Route path="/cocinero">
            <VistaCocinero />
            </Route>
        </Switch>
    </div>
    </Router>
);
}
