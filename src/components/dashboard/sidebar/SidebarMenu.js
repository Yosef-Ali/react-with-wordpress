import React, { useContext } from "react";
import NavLink from "../../NavLink";
import PostMenu from "./menus/PostMenu";
import PageMenu from "./menus/PageMenu";
import AppContext from "../../context/AppContext";

const SidebarMenu = () => {
  const [store, setStore] = useContext(AppContext);

  return (
    <nav id="sidebar" className={store.sidebarActive ? "active" : ""}>
      <div className="sidebar-header">
        <NavLink to={`/dashboard`}>React with WP</NavLink>
      </div>

      <ul className="list-unstyled components">
        <PostMenu />
        <PageMenu />
        <li>
          <NavLink to="#">Media</NavLink>
        </li>
        <li>
          <NavLink to="#">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarMenu;
