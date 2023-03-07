import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";

import "./App.css";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div>
            <div>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element="" />
                <Route path="/ecommerce" element="" />

                {/* pages  */}
                <Route path="/orders" element="" />
                <Route path="/employees" element="" />
                <Route path="/customers" element="" />

                {/* apps  */}
                <Route path="/kanban" element="" />
                <Route path="/editor" element="" />
                <Route path="/calendar" element="" />
                <Route path="/color-picker" element="" />

                {/* charts  */}
                <Route path="/line" element="" />
                <Route path="/area" element="" />
                <Route path="/bar" element="" />
                <Route path="/pie" element="" />
                <Route path="/financial" element="" />
                <Route path="/color-mapping" element="" />
                <Route path="/pyramid" element="" />
                <Route path="/stacked" element="" />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
