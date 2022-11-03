import { FC } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { HomePage } from "../pages/add/home.page";
import { AddPage } from "../pages/home/add.page";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </BrowserRouter>
  );
};
