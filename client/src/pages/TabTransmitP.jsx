import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Slidebar } from "../components/slide";
import { TranmitTable } from "../components/TransmitTable";
import "../styles/TableMain.css";

export const TransmitTab = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <Navbar setSidebar={setSidebar} />
      <Slidebar sidebar={sidebar} />
      <div
        className={`table-view-cont ${sidebar ? "reduce-table-view-cont" : ""}`}
      >
        <TranmitTable sidebar={sidebar} />
      </div>
    </>
  );
};
