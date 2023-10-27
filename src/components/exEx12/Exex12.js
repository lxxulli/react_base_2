import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Exex12 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/sub01" />
        <Route path="/sub02" />
        <Route path="/*" />
      </Routes>
    </BrowserRouter>
  );
};
