import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddTransaction } from "../screens/AddTransaction/AddTransaction.js";
import { Home } from "../screens/Home/Home.js";
import { Detail } from "../screens/Home/Detail.js";
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tx" element={<AddTransaction />} />
      <Route path="/tx/:id" element={<Detail />} />
    </Routes>
  );
};
