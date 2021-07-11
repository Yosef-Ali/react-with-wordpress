import React, { useState } from "react";
import { getUserName } from "../../function";
import NavLink from "../../NavLink";

const SidebarMenu = (props) => {
  const [subMenuActive, setSubMenuActive] = useState(false);
  const userName = getUserName() ? getUserName() : "";

  console.log("hello from sidbarmenu:", userName, subMenuActive);

  return (
    <nav id="sidebar" className={props.active ? "active" : ""}>
      <div className="sidebar-header">
        <NavLink to={`/dashboard/${userName}`}>React with WP</NavLink>
      </div>

      <ul className="list-unstyled components">
        <li className="active">
          <NavLink
            to="#"
            data-toggle="collapse"
            aria-expanded={subMenuActive}
            className={`dropdown-toggle ${!subMenuActive ? "collapsed" : ""}`}
            onClick={() => setSubMenuActive(!subMenuActive)}
          >
            Posts
          </NavLink>
          <ul
            className={`collapse list-unstyled ${subMenuActive ? "show" : ""}`}
            id="homeSubmenu"
          >
            <li>
              <NavLink to="#">All Posts</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/create-post">Add New</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="#">Pages</NavLink>
        </li>
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
