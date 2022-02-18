import { Component } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function PublicRoute({ component: Component, ...rest }) {

    const auth = useAuth();
    const location = useLocation();

    return (

        <Route {...rest}>
            {
                !auth.isLogged() ? 
                <Component /> : 
                <Redirect to="/dashboard" />
            }
        </Route>

    )
}
