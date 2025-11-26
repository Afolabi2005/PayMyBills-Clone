import React from "react";
import wifiRouter from "../../assets/wifi-router 1.svg";
import Group1234 from "../../assets/Group 1284.svg";
import bulb from "../../assets/lightbulb 1.svg";
import card from "../../assets/Group 1501.svg";
import Transaction from "../../assets/Group 1420.svg";
import ticket from "../../assets/ticket 1.svg";
import internet from "../../assets/internet 1.svg";
import cellphone from "../../assets/cellphone-fill 3.svg";
import Rectangle from "../../assets/Rectangle 23.svg";
import SavingsImg from "../../assets/Group 1514.svg";

const Services = () => {
  const GridList = [
    {
      id: 1,
      icon: cellphone,
      text: "Buy Airtime",
      color: "#B4E9D538",
      modal: "BuyAirtime",
    },
    {
      id: 2,
      icon: Group1234,
      text: "Buy Data",
      color: "#B1D6D138",
      modal: "BuyData",
    },
    {
      id: 3,
      icon: wifiRouter,
      text: "By Cable tv",
      color: "#AFC7EC38",
      modal: "BuyCable",
    },
    {
      id: 4,
      icon: bulb,
      text: "Buy Electricity",
      color: "#B4E9D538",
      modal: "BuyElectricity",
    },
    {
      id: 5,
      icon: ticket,
      text: "Event Ticket",
      color: "#B4E9D538",
      modal: "EventTicket",
    },
    {
      id: 6,
      icon: Transaction,
      text: "Insurance",
      color: "#b1d6d138",
      modal: "Insurance",
    },
    {
      id: 7,
      icon: card,
      text: "WAEC PIN",
      color: "#AFC7EC38",
      modal: "WaecPin",
    },
    {
      id: 8,
      icon: internet,
      text: "Internet service",
      color: "#B4E9D538",
      modal: "BuyInternet",
    },
  ];

  return (
    <div>
      <>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 text-[16px] text-wrap max-w-5xl-lg mx-auto">
          {GridList.map((item, index) => (
            <div key={index}>
              <div
                className="w-[132px] h-[139px] py-4 px-4 rounded-[15px] shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200"
                style={{ backgroundColor: item.color }}
                onClick={() => setActiveModal(item.modal)}
              >
                <img
                  className="w-[42px] h-[42px] mb-10"
                  src={item.icon}
                  alt={item.text}
                />
                <p className="text-[12px]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 justify-end px-8 py-6">
          <button className="bg-white shadow-md text-[#03B66B] text-[20px] font-bold pl-4 pr-4 rounded-lg cursor-pointer hover:text-white hover:bg-[#0078c8]">
            &larr;
          </button>
          <button className="bg-white shadow-md text-[#03B66B] pl-4 pr-4 rounded-lg cursor-pointer hover:text-white hover:bg-[#0078c8]">
            &rarr;
          </button>
        </div>

        <div className="flex flex-row justify-between">
          <div
            className="bg-contain bg-no-repeat object-contain h-full w-[303px] pt-8 pl-8 pb-8 pr-8 text-wrap justify-center"
            style={{ backgroundImage: `url(${Rectangle})` }}
          >
            <div>
              <p className="text-[15px] font-bold text-[#FF449B] mb-3">
                Edusponsor
              </p>
              <p className="text-[12px] font-light mb-3">
                Get Inclined with <br /> Computer-Based Test Practices
              </p>
              <div className="bg-[#FF449B] w-[101px] rounded-[10px_10px_20px_20px] text-center text-white text-[12px] p-2 font-medium">
                Check Out
              </div>
            </div>
          </div>

          <div
            className="bg-contain bg-no-repeat object-contain h-full w-[303px] pt-28 pl-4 pb-8 pr-8 text-wrap justify-center"
            style={{ backgroundImage: `url(${SavingsImg})` }}
          >
            <div className="bg-[#0F227A] w-[101px] rounded-[10px_10px_20px_20px] text-center text-white text-[12px] p-2 font-medium">
              Check Out
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Services;
