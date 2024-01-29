import { createRoot } from "react-dom/client";
import React from "react";
import Navbar from "./Navbar/Navbar";
import SearchBox from "./SearchBox/SearchBox";
import Products from "./Products/Products";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Filters from "./Filters/Filters";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <Navbar />
    <SearchBox />
    <Filters />
    <Products />
    <About />
    <Footer />
  </>
);
