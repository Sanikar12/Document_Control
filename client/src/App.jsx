import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Registration } from "./pages/Registration";
import { UploadFormP } from "./pages/UploadFormP";
import { LoginP } from "./pages/LoginPage";
import { TransmitFormP } from "./pages/TransmittalFormP";
import { MasterTableP } from "./pages/TabMasterP";
import { UploadTab } from "./pages/TabUploadP";
import { TransmitTab } from "./pages/TabTransmitP";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/table" element={<UploadFormP />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<LoginP />} />
          <Route path="/TransmitP" element={<TransmitFormP />} />
          <Route path="/MasterP" element={<MasterTableP />} />
          <Route path="/UploadTab" element={<UploadTab />} />
          <Route path="/TransmitTab" element={<TransmitTab />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
