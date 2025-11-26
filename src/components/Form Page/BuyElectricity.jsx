import React from "react";

const BuyElectricity = ({ onclose, setActiveModal, ActiveModal }) => {
  const handleBuyElectricity = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      const ElectrictyType = form.phoneNumber.value;
      const amount = form.amount.value;

      navigate("/order-summary", {
        state: {
          ElectrictyType,
          amount,
        },
      });
    } else {
      form.reportValidity();
    }
  };
  return (
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
          <div className=" border border-gray-300 p-1 justify-center rounded-md">
            <select
              value={ActiveModal}
              className="text-gray-500 text-[14px]"
              name="serviceType"
              id="serviceType"
              aria-label="Service type"
              onChange={(e) => {
                setActiveModal(e.target.value)
              }}
            >
              <option value="BuyElectricity">
                Electricity
              </option>
              <option value="BuyAirtime">Airtime</option>
              <option value="BuyData">Data Subscription</option>
            </select>
          </div>
        </nav>

        <div>
          <form
            className="flex flex-col gap-8 p-8"
            onSubmit={handleBuyElectricity}
            noValidate
          >
            <div className="w-full">
              <select
                defaultValue=""
                className="p-4 w-full border border-gray-300 bg-[#F9FFFBCC] rounded-[15px] text-gray-500 focus:outline-none"
                name="networkProvider"
                id="networkProvider"
                required
              >
                <option className="text-center" value="" disabled>
                  Select Electricity Type
                </option>
                <option value="mtn">MTN</option>
                <option value="airtel">Airtel</option>
                <option value="glo">GLO</option>
                <option value="9mobile">9Mobile</option>
              </select>
            </div>
            <input
              className="p-4 border border-gray-300 bg-[#F9FFFBCC] rounded-[15px] text-center indent-2.5"
              type="number"
              name="meterNumber"
              id="meterNumber"
              pattern="[0-9+ ]{7,20}"
              required
              placeholder="Enter meter number"
            />

            <input
              className="p-4 border border-gray-300 bg-[#F9FFFBCC] text-center rounded-[15px] indent-2.5"
              type="number"
              name="amount"
              id="amount"
              min="1"
              required
              placeholder="Amount"
            />

            <div className="w-full">
              <select
                defaultValue=""
                className="p-4 w-full border border-gray-300 bg-[#F9FFFBCC] rounded-[15px] text-gray-500 focus:outline-none"
                name="networkProvider"
                id="networkProvider"
                required
              >
                <option className="text-center" value="" disabled>
                  Select Card
                </option>
                <option value="mtn">MTN</option>
                <option value="airtel">Airtel</option>
                <option value="glo">GLO</option>
                <option value="9mobile">9Mobile</option>
              </select>
            </div>
            <div className="justify-end text-right">
                <button className="bg-[#03b66b] rounded-full py-0.5 px-2.5 text-white justify-center">+</button>
                <span className="inline ml-2 text-[#03b66b]">Add New Card</span>
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
  );
};

export default BuyElectricity;
