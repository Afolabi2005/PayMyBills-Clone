import React from "react";
import { useState } from "react";
import CenterBody from "../Middle_Container/CenterBody";
import BuyElectricity from "./BuyElectricity";
import { Link, useNavigate } from "react-router-dom";

function BuyAirtime({ onclose, setActiveModal, ActiveModal }) {
  const navigate = useNavigate();

  const handleBuyAirtime = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      const phone = form.phoneNumber.value;
      const amount = form.amount.value;
      const network = form.networkProvider.value;
      const PaymentMethod = form.paymentMethod.value;

      navigate("/order-summary", {
        state: {
          phone,
          amount,
          network,
          PaymentMethod,
        },
      });
    } else {
      form.reportValidity();
    }
  };

  return (
    <>

      <div className="bg-[#0000009e] flex justify-center items-center  w-screen top-0 left-0 h-screen fixed z-9999">
        <div className="bg-white rounded-md h-screen w-[500px] overflow-hidden overflow-x-auto overflow-y-hidden">
          <nav className="flex flex-row justify-between p-4">
            <div>
              <p
                onClick={onclose}
                className="text-gray-500 text-[15px] mt-2 cursor-pointer"
              >
                &larr; Back to home
              </p>
            </div>
            <div className=" border border-gray-300 p-2 rounded-md">
              <select
                value={ActiveModal}
                className="text-gray-500 text-[15px]"
                name="serviceType"
                id="serviceType" 
                onChange={(e) => {
                  setActiveModal(e.target.value);
                }}
                aria-label="Service type"
              >
                <option value="BuyAirtime">
                  Airtime
                </option>
                <option value="BuyElectricity">Electricity</option>
                <option value="BuyData">Data Subscription</option>
              </select>
            </div>
          </nav>

          <div>
            <form
              className="flex flex-col gap-8 p-8"
              onSubmit={handleBuyAirtime}
              noValidate
            >
              <input
                className="p-4 border border-gray-300 bg-[#F9FFFBCC] rounded-[15px] indent-2.5"
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                pattern="[0-9+ ]{7,20}"
                required
                placeholder="Enter phone number"
              />

              <input
                className="p-4 border border-gray-300 bg-[#F9FFFBCC] rounded-[15px] indent-2.5"
                type="number"
                name="amount"
                id="amount"
                min="1"
                required
                placeholder="Enter Amount"
              />

              <div className="w-full">
                <select
                  defaultValue=""
                  className="p-4 w-full border border-gray-300 bg-[#F9FFFBCC] rounded-[15px] text-gray-500 focus:outline-none"
                  name="networkProvider"
                  id="networkProvider"
                  required
                >
                  <option value="" disabled>
                    Select Network Provider
                  </option>
                  <option value="mtn">MTN</option>
                  <option value="airtel">Airtel</option>
                  <option value="glo">GLO</option>
                  <option value="9mobile">9Mobile</option>
                </select>
              </div>

              <div className="w-full">
                <select
                  defaultValue=""
                  className="p-4 w-full border border-gray-300 bg-[#F9FFFBCC] rounded-[15px] text-gray-500 focus:outline-none"
                  name="paymentMethod"
                  id="paymentMethod"
                  required
                >
                  <option value="" disabled>
                    Select Payment method
                  </option>
                  <option value="transfer">Pay with transfer</option>
                  <option value="ussd">Pay with USSD</option>
                </select>
              </div>

              <button
                className="w-full text-center text-white bg-[#03B66B] p-4 rounded-[15px]"
                type="submit"
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyAirtime;
