import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import HamburgerMenu from "../HamburgerMenu";
import BuyAirtime from "../Form Page/BuyAirtime";
import BuyElectricity from "../Form Page/BuyElectricity";
import BuyData from "../Form Page/BuyData";
import { Outlet } from "react-router-dom";

function CenterBody({
  activeMenu,
  Dashboard,
  Services,
  Transactions,
  Account,
  Settings,
  PayMyBills,
}) {
  const Menus = [
    "Dashboard",
    "Services",
    "Transactions",
    "Account",
    "Settings",
  ];
  const [ActiveModal, setActiveModal] = useState(null);

  return (
    <div>
      {ActiveModal === "BuyAirtime" && (
        <BuyAirtime
          onclose={() => setActiveModal(null)}
          setActiveModal={setActiveModal}
          ActiveModal={ActiveModal}
        />
      )}
      {ActiveModal === "BuyElectricity" && (
        <BuyElectricity onclose={() => setActiveModal(null)} />
      )}
      {ActiveModal === "BuyData" && (
        <BuyData
          onclose={() => setActiveModal(null)}
          setActiveModal={setActiveModal}
          ActiveModal={ActiveModal}
        />
      )}
      <div className="flex flex-col gap-2.5">
        <nav className="justify-between bg-white shadow-md flex flex-row items-center p-4 md:hidden">
          <img className="w-[100px] pt-1 ml-2" src={Logo} alt="" />
          <HamburgerMenu menus={Menus} />
        </nav>
        <div className="p-4 md:p-0 max-w-[600px]">
          <div className="shadow-md rounded-lg border border-gray-300 p-2 flex justify-between items-center sticky top-3 bg-white mt-3">
            <FaSearch className="ml-4 text-gray-500 font-light" />
            <input className="w-full indent-2 border-none outline-none" />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default CenterBody;
