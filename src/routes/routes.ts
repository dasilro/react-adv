import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

export interface Route {
  path: string;
  component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    path: "/lazyload",
    component: LazyLayout,
    name: "LazyLoading Nested",
  },
  {
    path: "/no-lazy",
    component: NoLazy,
    name: "No Lazy Loading",
  },
];
