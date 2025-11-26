import { useState } from "react";
import "./App.css";
import LeftBoard from "./components/Left_Container/LeftBoard";
import CenterBody from "./components/Middle_Container/CenterBody";
import RightBoard from "./components/RIght_Container/RightBoard";
import BuyAirtime from "./components/Form Page/BuyAirtime";
import OrderSummary from "./components/Form Submitted/OrderSummary";
import USSDOrder from "./components/Form Submitted/USSDOrder";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Menus/Dashboard";
import Services from "./components/Menus/Services";
import Transactions from "./components/Menus/Transactions";
import Account from "./components/Menus/Account";
import Settings from "./components/Menus/Settings";
import PayMyBills from "./components/Menus/PayMyBillsEvent";
import { useLocation } from "react-router-dom";

function App() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div
              className={
                location.pathname === "/transactions"
                  ? `grid grid-cols-[200px_9fr] gap-4`
                  : `grid grid-cols-1 md:grid-cols-[250px_2fr_1fr] gap-4`
              }
            >
              <LeftBoard
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
              <CenterBody activeMenu={activeMenu} />
              <RightBoard activeMenu={activeMenu} />
            </div>
          }
        >
          <Route
            path="/dashboard"
            element={
              <div className="w-[600px]">
                <Dashboard />
              </div>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/account" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/events" element={<PayMyBills />} />
        </Route>

        <Route path="/buy-airtime" element={<BuyAirtime />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/ussd-order" element={<USSDOrder />} />
      </Routes>
    </>
  );
}

export default App;
