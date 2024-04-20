import React from "react";
import "./styles.css";

export type SideMenuProps = {
  logoUrl?: string;
  expand?: boolean;
  onToggle?: VoidFunction;
};

export const SideMenu = (props: SideMenuProps) => {

  const { expand, onToggle} = props;
  // props
  return (
    <div className={`main-side-menu ${expand ? "expand" : ""}`}>
      <header>
        <button className="main-aside-toggle-button" onClick={onToggle}>
          {expand ? "" : ""}
        </button>
      </header>

      <main>
       
      </main>
    </div>
  );
};

export default SideMenu;
