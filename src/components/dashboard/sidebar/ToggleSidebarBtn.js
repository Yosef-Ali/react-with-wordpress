import React from "react";

const ToggleSidebarBtn = (props) => {
  console.log("handleSidebarToggleClick", props.handleSidebarToggleClick);
  return (
    <button
      type="button"
      id="sidebarCollapse"
      onClick={props.handleSidebarToggleClick}
      className={`btn btn-secondary ml-2 ${props.active ? "active" : ""}`}
    >
      <i className="fa fa-align-left"></i>
    </button>
  );
};

export default ToggleSidebarBtn;
