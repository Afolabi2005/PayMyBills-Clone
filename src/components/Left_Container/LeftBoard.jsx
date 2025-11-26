import React from "react";
import Logo from "../../assets/Logo.png";
import DashboardIcon from "../../assets/Menus/Vector.svg";
import Services from "../../assets/service.svg";
import Transactions from "../../assets/Menus/ph_cards-bold.svg";
import Account from "../../assets/Menus/ic_outline-account-circle.svg";
import Settings from "../../assets/Menus/ant-design_setting-outlined.svg";
import PaymyBillEvent from "../../assets/PaymyBill-Event.jpg";
import DashboardGreen from "../../assets/DashBoard-Green.svg";
import serviceGreen from "../../assets/service-Green.svg";
import TransactionsGreen from "../../assets/transactions-Green.svg";
import AccountGreen from "../../assets/account-Green.svg";
import SettingsGreen from "../../assets/setting-Green.svg";
import Logout from "../../assets/bx_bx-log-out.png";
import CenterBody from "../Middle_Container/CenterBody";
import { Link } from "react-router-dom";

function LeftBoard({ activeMenu, setActiveMenu }) {
  const MenuItems = [
    {
      name: "Dashboard",
      icon: DashboardIcon,
      activeIcon: DashboardGreen,
      route: "/dashboard",
    },
    {
      name: "Services",
      icon: Services,
      activeIcon: serviceGreen,
      route: "/services",
    },
    {
      name: "Transactions",
      icon: Transactions,
      activeIcon: TransactionsGreen,
      route: "/transactions",
    },
    {
      name: "Account",
      icon: Account,
      activeIcon: AccountGreen,
      route: "/account",
    },
    {
      name: "Settings",
      icon: Settings,
      activeIcon: SettingsGreen,
      route: "/settings",
    },
  ];

  return (
    <div className="bg-white hidden md:block h-screen w-full border-r-2 font-Mollen border-[#B4E9D538] sticky top-0 ">
      <div className="p-2.5">
        <img className="w-[100px] mb-6 m-3.5" src={Logo} alt="Logo" />
      </div>

      <div className="flex flex-col justify-between h-[calc(100vh-120px)] p-4">
        <div className="flex flex-col gap-6 text-black">
          {MenuItems.map((item, index) => (
            <div key={index}>
              <Link to={item.route}>
                <div
                  key={item.title}
                  onClick={() => setActiveMenu(item.name)}
                  className={`flex flex-row gap-2 cursor-pointer ${
                    activeMenu === item.name ? "text-[#03B66B]" : ""
                  }`}
                >
                  <img
                    className="w-[18px] h-[18px] mt-0.5"
                    src={activeMenu === item.name ? item.activeIcon : item.icon}
                    alt={`${item.name} icon`}
                  />
                  <p className="text-[14px]">{item.name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-[30px]">
          <Link to={'/events'}>
          <p className="text-[#0F227A] text-[14px] cursor-pointer">
            <span className="font-bold">PayMyBills</span>
            <span className="font-light"> Event</span>
          </p>
          </Link>
          <img
            className="w-[167px] h-[177px] mt-4"
            src={PaymyBillEvent}
            alt="PayMyBills Event"
          />
        </div>
        <div className="flex flex-row gap-2 mt-6">
          <div className="w-[18px] h-[18px] mt-0.7">
            <img src={Logout} alt="" />
          </div>
          <p className="cursor-pointer">Log out</p>
        </div>
      </div>
    </div>
  );
}

export default LeftBoard;
