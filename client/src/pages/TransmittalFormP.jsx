import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Slidebar } from "../components/slide";
import { TransmittalForm } from "../components/TransmittalForm";
import "../styles/TableMain.css";

export const TransmitFormP = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <Navbar setSidebar={setSidebar} />
      <Slidebar sidebar={sidebar} />
      <div
        className={`table-view-cont ${sidebar ? "reduce-table-view-cont" : ""}`}
      >
        <TransmittalForm sidebar={sidebar} />
      </div>
    </>
  );
};
