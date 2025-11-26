import React from "react";
import notification from "../../assets/Group 1455.svg";
import profile from "../../assets/Group 1446.svg";
import { Chart } from "chart.js/auto";
import { Bar, Line, Doughnut } from "react-chartjs-2";

function RightBoard({ activeMenu }) {
  return (
    <div className="sticky top-0">
      {activeMenu == "Services" || activeMenu == "Dashboard" ? (
        <div className="bg-[#F4FFF7] hidden md:block sticky top-0">
          <div className="flex flex-col h-full">
            <div className="p-4 mt-3.5 flex justify-between items-start">
              <div>
                <p className="text-[13px] text-[#0F227A]">U-balance</p>
                <p className="text-[36px] font-bold text-[#0F227A]">₦500.00</p>
              </div>
              <div className="flex gap-2">
                <img
                  className="w-[45px] h-[45px]"
                  src={notification}
                  alt="Notifications"
                />
                <img className="w-12 h-[46px]" src={profile} alt="Profile" />
              </div>
            </div>

            <div className="p-4">
              <p className="text-[13px] text-[#0F227A]">Total Spending ...</p>
              <p className="text-[20px] font-bold text-[#0F227A]">
                ₦1,000,000.00
              </p>
              <p className="text-[10px] font-light text-[#00000080] mt-4">12 Months</p>
              <div className="grow flex flex-col gap-6 items-center justify-center p-6">
              <div className="bg-white shadow-lg rounded-md p-2 w-[289px] h-[232px] flex items-center justify-center">
                <Doughnut
                  data={{
                    labels: ["Data", "Airtime", "Cable TV", "Electricity","Internet"],
                    datasets: [
                      {
                        label: "Spending Breakdown",
                        data: [200, 200, 250, 250],
                        backgroundColor: [
                          "#20C979",
                          "#70DA6D",
                          "#0D58C7",
                          "#138C6C",
                        ],
                        weight: 1
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    cutout: "65%",
                    layout: {
                      padding: {
                        top: 30,
                        bottom: 20,
                      }
                    },
                    plugins: {
                      legend: {
                        position: "bottom",
                        labels: {
                          usePointStyle: true,
                          pointStyle: "circle",
                          boxWidth: 5,
                          boxHeight: 5,
                          padding: 10,
                          font: {
                            size: 12,
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
                <button className="border-2 border-[#03B66B] w-full p-4 rounded-[5px] text-[#03B66B] text-[14px]">View</button>
            </div>
            </div>

            
          </div>
        </div>
      ) : null}
      {activeMenu === 'Transactions' && null}
    </div>
  );
}

export default RightBoard;
