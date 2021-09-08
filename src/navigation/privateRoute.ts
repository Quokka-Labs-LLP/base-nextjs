import React from "react";
import { LazyExoticComponent } from "react";

const Home = React.lazy(() => import('../modules/Home'));
interface Route {
    path: string;
    exact: boolean;
    isProtected: boolean;
    component: LazyExoticComponent<() => JSX.Element>
}

const home: Route = {
    path: '/',
    exact: true,
    isProtected: false,
    component: Home
}

export const routeList = [
    home
]