import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import { Table1 } from "./components/Table1";//
import {Transmittal_form} from "./components/Transmittal_form"
import {Upload_form} from "./components/Upload_form"
import {TableSelect} from './components/Master_Table'//
import {SelectDoc} from "./components/SelectDoc";//
import Example from "./components/ModalComponent";
import { New_Upload } from "./components/new_upload";//
import { ClearButton } from "./components/clear";//
import { UploadExcel } from "./components/ExcelUpload";

 

const App = ()=>{

return <>
<BrowserRouter>
  
   <Routes>
     <Route path="/"  element={<Home />} />
     <Route path="/about"  element={<About />} />
     <Route path = "/master" element={<Table1/>}/>  
     <Route path = "/transm" element={<Transmittal_form/>}/>
     <Route path = "/upload" element={<Upload_form/>}/>
     <Route path = "/select" element={<TableSelect/>}/>
     <Route path = "/transmittal" element={<SelectDoc/>}/>
     <Route path = "/ex" element={<Example/>}/>
     <Route path = "/upload1" element={< New_Upload/>}/>
     <Route path = "/clear" element={< ClearButton/>}/>
     <Route path = "/excel" element={< UploadExcel/>}/>


  </Routes>
  </BrowserRouter>
</>;
};

export default App;