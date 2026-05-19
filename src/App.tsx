import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageProduct from "./features/buy/components/PageProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:nombretienda/productos" element={<PageProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
