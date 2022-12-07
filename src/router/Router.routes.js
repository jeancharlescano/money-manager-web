import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddTransaction } from "../screens/AddTransaction/AddTransaction.js";
import { Home } from "../screens/Home/Home.js";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tx" element={<AddTransaction />} />
    </Routes>
  );
};
