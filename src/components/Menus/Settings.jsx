import React, { useState } from "react";

const Settings = () => {
  const [active, setActive] = useState("security");

  const toggleActive = (section) => {
    setActive(section);
  };

  return (
    <div className="p-8">
      <h2 className="mb-5 text-[18px] font-bold">Settings</h2>
      <div className="p-4">
        <div className="flex flex-row gap-4">
          <button
            onClick={() => toggleActive("security")}
            className={`text-[14px] py-2 px-7 rounded-[20px] ${
              active === "security"
                ? "bg-[#E8EAFD] text-[#0F227A]"
                : "text-[#7B7B7B]"
            }`}
          >
            Security
          </button>
          <button
            onClick={() => toggleActive("addCard")}
            className={`text-[14px] py-2 px-7 rounded-[20px] ${
              active === "addCard"
                ? "bg-[#E8EAFD] text-[#0F227A]"
                : "text-[#7B7B7B]"
            }`}
          >
            Add New Card
          </button>
        </div>
      </div>
      {active === "security" && (
        <>
          <div className="mt-4 px-4 py-2">
            <h3 className="text-[18px] text-[#5E5475] mb-2.5">
              Change Password
            </h3>
            <p className="text-[14px] font-light text-[#B8B8B8]">
              Amet minim mollit non deserunt ullamco est sit aliqua
            </p>
          </div>
          <div className="flex flex-row gap-4 px-4 py-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Old-password"
                className="text-[13px] font-bold text-[#7B7B7B]"
              >
                Old Password
              </label>
              <input
                type="text"
                id="Old-password"
                className="w-full border text-[#9E9E9E] indent-2.5 text-[13px] outline-none border-[#E5E5E5] rounded-[10px] p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="New-password"
                className="text-[13px] font-bold text-[#7B7B7B]"
              >
                New Password
              </label>
              <input
                type="text"
                id="New-password"
                className="w-full border text-[#9E9E9E] indent-2.5 text-[13px] outline-none border-[#E5E5E5] rounded-[10px] p-2"
              />
            </div>
          </div>
          <div className="flex p-4 justify-end max-w-[450px]">
            <button className="rounded-[10px_10px_20px_20px] bg-[#03B66B] px-6 py-3 text-white text-[13px] font-light">
              Change Password
            </button>
          </div>
        </>
      )}

      {active === "addCard" && (
        <>
        <div className="mt-4 px-4 py-2">
          <h3 className="text-[18px] text-[#5E5475] mb-2.5">
            Add a new card
          </h3>
          <p className="text-[14px] font-light text-[#B8B8B8]">
            Amet minim mollit non deserunt ullamco est sit aliqua
          </p>
        </div>
        <div className="flex flex-row gap-4 px-4 py-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Old-password"
                className="text-[13px] font-bold text-[#7B7B7B]"
              >
                Card Holder's Name
              </label>
              <input
                type="text"
                id="Old-password"
                className="w-full border text-[#9E9E9E] text-[13px] indent-2.5 outline-none border-[#E5E5E5] rounded-[10px] p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="New-password"
                className="text-[13px] font-bold text-[#7B7B7B]"
              >
                CVC/CVV
              </label>
              <input
                type="text"
                id="New-password"
                className="w-full border text-[13px] text-[#9E9E9E] indent-2.5 outline-none border-[#E5E5E5] rounded-[10px] p-2"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 px-4 py-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Old-password"
                className="text-[13px] font-bold text-[#7B7B7B]"
              >
                Card Number
              </label>
              <input
                type="text"
                id="Old-password"
                className="w-full border text-[13px] text-[#9E9E9E] indent-2.5 outline-none border-[#E5E5E5] rounded-[10px] p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="New-password"
                className="text-[13px] font-bold text-[#7B7B7B]"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="New-password"
                className="w-full border indent-2.5 text-[13px] text-[#9E9E9E] outline-none border-[#E5E5E5] rounded-[10px] p-2"
              />
            </div>
          </div>
          <div className="flex p-4 justify-end max-w-[450px]">
            <button className="rounded-[10px_10px_20px_20px] bg-[#03B66B] px-6 py-3 text-white text-[13px] font-light">
              Add Card
            </button>
            </div>
        </>
      )}
    </div>
  );
};

export default Settings;
