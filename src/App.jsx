import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Character from "./Character";
export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="character/:id" element={<Character />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
