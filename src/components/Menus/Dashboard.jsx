import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import cellphone from "../../assets/cellphone-fill 3.svg";
import wifiRouter from "../../assets/wifi-router 1.svg";
import Group1234 from "../../assets/Group 1284.svg";
import bulb from "../../assets/lightbulb 1.svg";
import card from "../../assets/Group 1501.svg";
import Transaction from "../../assets/Group 1420.svg";
import ticket from "../../assets/ticket 1.svg";
import internet from "../../assets/internet 1.svg";


const Dashboard = () => {

  console.log(window.innerWidth);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "",
        data: [100_000, 35_000, 20_000, 40_000, 10000, 100_000, 35_000],
        borderColor: "#03B66B99",
        backgroundColor: "#03B66B99",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: function (value) {
            if (value === 0) return "";
            return `₦${value.toLocaleString()}`;
          },
          stepSize: 50000,
        },
        grid: {
          display: false,
        },
        suggestedMin: 10000,
        suggestedMax: 200000,
      },
    },
  };

  const GridList = [
    {
      id: 1,
      icon: cellphone,
      text: "Buy Airtime",
      color: "#B4E9D538",
      route: "/buy-airtime",
    },
    {
      id: 2,
      icon: Group1234,
      text: "Buy Data",
      color: "#B1D6D138",
    },
    {
      id: 3,
      icon: wifiRouter,
      text: "By Cable tv",
      color: "#AFC7EC38",
    },
    {
      id: 4,
      icon: bulb,
      text: "Buy Electricity",
      color: "#B4E9D538",
    },
    {
      id: 5,
      icon: ticket,
      text: "Event Ticket",
      color: "#B4E9D538",
    },
    {
      id: 6,
      icon: Transaction,
      text: "Insurance",
      color: "#b1d6d138",
    },
    {
      id: 7,
      icon: card,
      text: "WAEC PIN",
      color: "#AFC7EC38",
    },
    {
      id: 8,
      icon: internet,
      text: "Internet service",
      color: "#B4E9D538",
    },
  ];

  const scrollRef = useRef(null);
  function HandleScroll(direction) {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <div className="w-full h-full">
      <div className="p-4 mt-auto">
        <h3 className="text-[#46446A] text-[18px] inline">Good Morning,</h3>
        <span> Samuel</span>
        <p className="text-[12px] text-[#46446A]">
          What will you like to do today?
        </p>
      </div>
      <div className="p-4">
        <div className="flex flex-row justify-between mb-8">
          <div>
            <p className="text-[#3E3D75] text-[12px] font-bold inline">
              Overview:
            </p>
            <span className="text-[12px] text-[#3E3D75]"> Data</span>
          </div>
          <div>
            <p className="text-black text-[12px]">Jan 2025 - July 2025 </p>
          </div>
        </div>
        <Line data={data} options={options} />
      </div>

      {/* Next */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-5 p-5 text-[16px] scroll-smooth"
          style={{
            overflowX: "auto",
            scrollbarWidth: "none", 
            msOverflowStyle: "none", 
            width: "700px",
            margin: "0 auto",
          }}
          ref={scrollRef}
        >
          {/* Hide scrollbar for WebKit browsers */}
          <style>
            {`
        div::-webkit-scrollbar {
          display: none;
        }
      `}
          </style>

          {GridList.map((item, index) => (
            <div key={index}>
              <div
                className="w-[95px] h-[114px] py-4 px-4 rounded-[15px] shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200"
                style={{ backgroundColor: item.color }}
                onClick={() => setActiveModal(true)}
              >
                <img className="w-8 h-8 mb-8" src={item.icon} alt={item.text} />
                <p className="text-[10px] font-bold">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 justify-end px-8 py-6">
        <button
          onClick={() => HandleScroll("next")}
          className="bg-white shadow-md text-[#03B66B] text-[20px] font-bold pl-4 pr-4 rounded-lg cursor-pointer hover:text-white hover:bg-[#0078c8]"
        >
          &larr;
        </button>
        <button
          onClick={() => HandleScroll("prev")}
          className="bg-white shadow-md text-[#03B66B] pl-4 pr-4 rounded-lg cursor-pointer hover:text-white hover:bg-[#0078c8]"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
