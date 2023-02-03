import React, { useState } from "react";

import HeaderApp from "./AppBar";
import LeftMenu from "./LeftMenu";
import { Outlet } from "react-router-dom";

export default function Main() {
  const [status, setStatus] = useState(false);

  const handleMenuOpen = (status) => {
    setStatus(status);
  };

  const handleClose = (status) => {
    setStatus(status);
  };

  return (
    <div>
      <HeaderApp handleMenu={handleMenuOpen} />
      <div>
        <LeftMenu status={status} handleClose={handleClose} />
      </div>
      <div className="MainApp">
        <Outlet />
      </div>
    </div>
  );
}
