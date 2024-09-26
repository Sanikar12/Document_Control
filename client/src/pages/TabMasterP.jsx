import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Slidebar } from "../components/slide";
import { Table1 } from "../components/Table1";
import "../styles/TableMain.css";

export const MasterTableP = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <Navbar setSidebar={setSidebar} />
      <Slidebar sidebar={sidebar} />
      {/* <div className = {`container ${sidebar?"":"large-container"}`}> */}
      <div
        className={`table-view-cont ${sidebar ? "reduce-table-view-cont" : ""}`}
      >
        <Table1 sidebar={sidebar} />
      </div>
    </>
  );
};
