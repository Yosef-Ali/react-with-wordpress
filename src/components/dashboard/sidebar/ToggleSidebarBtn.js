import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const ToggleSidebarBtn = (props) => {
  console.log("handleSidebarToggleClick", props.handleSidebarToggleClick);
  const [store, setStore] = useContext(AppContext);
  return (
    <button
      type="button"
      id="sidebarCollapse"
      onClick={() =>
        setStore({
          ...store,
          sidebarActive: !store.sidebarActive,
        })
      }
      className={`btn btn-secondary ml-2 ${
        store.sidebarActive ? "active" : ""
      }`}
    >
      <i className="fa fa-align-left"></i>
    </button>
  );
};

export default ToggleSidebarBtn;
