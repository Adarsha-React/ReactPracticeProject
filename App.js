import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import Memo from "./src/components/Memo";
import Parent from "./src/components/Parent";
import FetchData from "./src/components/FetchData";
import Toggle from "./src/components/Toggle";
import Debounce from "./src/components/Debounce";
import TestUseEffect from "./src/components/TestUseEffect";

const AppLayout = () => {
  return (
    <>
      {/* <Memo /> */}
      {/* <Parent /> */}
      {/* <FetchData />
      <Toggle /> */}
      {/* <Debounce /> */}
      <TestUseEffect />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
