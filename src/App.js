import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./container/Home";
import UseCase from "./container/UseCase";
import Blog from "./container/Blog";
import Partnership from "./container/Partnership";
import BlogUtama from "../src/components/Blog-comp/BlogUtama";

import AdminDasboard from "./container/AdminDasboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/usecase/" Component={UseCase} />
        <Route path="/blog/" Component={Blog} />
        <Route path="/partnership" Component={Partnership} />
        <Route path="/blog-utama" Component={BlogUtama} />

        <Route path="/admin-dashboard" Component={AdminDasboard} />
      </Routes>
    </Router>
  );
}

export default App;
