import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "LazyLayout - Dashboard",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
