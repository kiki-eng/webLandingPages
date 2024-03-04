import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export default function Layout(props) {
  return (
    <Fragment>
      <main className="mx-auto overflow-x-auto">
        <Outlet />
      </main>
    </Fragment>
  );
}
