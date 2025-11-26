import React, { useState } from "react";
import successful from "../../assets/successful.svg";
import pending from "../../assets/pending.svg";
import unsuccessful from "../../assets/Unsuccessful.svg";

const Transactions = () => {
  const [active, setActive] = useState("transactions");

  const handleActive = (e) => {
    setActive(e);
  };

  const transactionItems = [
    {
      title: "Airtime Purchase",
      date: "Dec, 30, 2022",
      name: "pending",
      icon: pending,
      TelId: "1234567890",
      amount: "N1000",
      color: "#FFFCED99",
    },
    {
      title: "Airtime Purchase",
      date: "Dec, 30, 2022",
      name: "Successful",
      icon: successful,
      TelId: "1234567890",
      amount: "N1000",
      color: "white",
    },
    {
      title: "Airtime Purchase",
      date: "Dec, 30, 2022",
      name: "Unsuccessful",
      icon: unsuccessful,
      TelId: "1234567890",
      amount: "N1000",
      color: "#FEF2F4",
    },
  ];

  const NotSuccess = transactionItems.filter((item) => item.name === "Unsuccessful" || item.name === "pending" );
  const Success = transactionItems.filter((item) => item.name === "Successful");

const formatAmount = (amount) => {
  const numeric = parseFloat(amount.replace(/[^\d]/g, ""));
  return isNaN(numeric) ? "0" : `N${new Intl.NumberFormat().format(numeric)}`;
};


  return (
    <div className="p-8">
      <div className="p-4">
        <div className="flex flex-row gap-4">
          <button
            onClick={() => handleActive("transactions")}
            className={`text-[14px] py-2 px-7 rounded-[20px] ${
              active === "transactions"
                ? "bg-[#E8EAFD] text-[#0F227A]"
                : "text-[#7B7B7B]"
            }`}
          >
            All Transactions
          </button>
          <button
            onClick={() => handleActive("successful")}
            className={`text-[14px] py-2 px-7 rounded-[20px] ${
              active === "successful"
                ? "bg-[#E8EAFD] text-[#0F227A]"
                : "text-[#7B7B7B]"
            }`}
          >
            Successful
          </button>
          <button
            onClick={() => handleActive("unsuccessful")}
            className={`text-[14px] py-2 px-7 rounded-[20px] ${
              active === "unsuccessful"
                ? "bg-[#E8EAFD] text-[#0F227A]"
                : "text-[#7B7B7B]"
            }`}
          >
            Unsuccessful
          </button>
        </div>
      </div>
      {active === "transactions" && (
        <div className="p-8">
          {/** Transactions */}
          <div>
            {transactionItems.map((item, index) => (
              <div
                className="grid grid-cols-5 items-center m-4"
                key={index}
              >
                <img src={item.icon} alt="" />
                <div className="mt3 flex flex-col gap-0">
                  <p className="text-[15px]">{item.title}</p>
                  <p className="text-[12px] text-[#7B7B7B]">{item.date}</p>
                </div>
                <p className="mt-3 text-[15px]">{item.TelId.slice(0, 0) + "*************" + item.TelId.slice(-3)}</p>
                <p className={item.name === "pending" ? "mt-3 text-[15px] text-[#FFD504]" : item.name === "Unsuccessful" ? "mt-3 text-[15px] text-[#E2001099]" : "mt-3 text-[15px] text-[#01CA76]"}>{item.name.toLowerCase()}</p>
                <p className="mt-3 text-[15px]">{formatAmount(item.amount)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {active === "successful" && (
        <div className="p-8">
          {Success.map((item, index) => (
            <div
              className="grid grid-cols-5 items-center m-4"
              key={index}
            >
              <img src={item.icon} alt="" />
              <div className="mt3 flex flex-col gap-0">
                <p className="text-[15px]">{item.title}</p>
                <p className="text-[12px] text-[#7B7B7B]">{item.date}</p>
              </div>
              <p className="mt-3 text-[15px]">{item.TelId.slice(0, 0) + "*************" + item.TelId.slice(-3)}</p>
              <p className={item.name === "pending" ? "mt-3 text-[15px] text-[#FFD504]" : item.name === "Unsuccessful" ? "mt-3 text-[15px] text-[#E2001099]" : "mt-3 text-[15px] text-[#01CA76]"}>{item.name.toLowerCase()}</p>
              <p className="mt-3 text-[15px]">{formatAmount(item.amount)}</p>
            </div>
          ))}
        </div>
      )}
      {active === "unsuccessful" && (
        <div className="p-8"> 
          {NotSuccess.map((item, index) => (
            <div
              className="grid grid-cols-5 items-center m-4" 
              key={index}
            >
              <img src={item.icon} alt="" />
              <div className="mt3 flex flex-col gap-0">
                <p className="text-[15px]">{item.title}</p>
                <p className="text-[12px] text-[#7B7B7B]">{item.date}</p>
              </div>
              <p className="mt-3 text-[15px]">{item.TelId.slice(0, 0) + "*************" + item.TelId.slice(-3)}</p>
              <p className={item.name === "pending" ? "mt-3 text-[15px] text-[#FFD504]" : item.name === "Unsuccessful" ? "mt-3 text-[15px] text-[#E2001099]" : "mt-3 text-[15px] text-[#01CA76]"}>{item.name.toLowerCase()}</p>
              <p className="mt-3 text-[15px]">{formatAmount(item.amount)}</p>
            </div>
          ))}
        </div>
      )} 
    </div>
  );
};

export default Transactions;
