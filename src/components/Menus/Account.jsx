import React from "react";
import NigeriaFlag from "../../assets/Nigeria-Flag.png";
import ProfilePic from "../../assets/profile-pic.jpg";

const Account = () => {
  return (
    <div className="p-8">
      <span className="font-light">My </span>
      <h2 className="mb-[20px] text-[18px] font-bold inline">Account</h2>
      <div className="p-4 mb-[-20px]">
        <img src={ProfilePic} alt="profile-pic" className="w-[100px] h-[100px] object-cover shadow-sm rounded-full" />
      </div>
      <div className="flex flex-row gap-4 px-8 py-2 mt-8">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="F-name"
            className="text-[13px] font-bold text-[#7B7B7B]"
          >
            First Name
          </label>
          <input
            type="text"
            id="F-name"
            className="w-full border-[1px] text-[13px] text-[#9E9E9E] border-[#E5E5E5] indent-[10px] outline-none rounded-[10px] p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="L-name"
            className="text-[13px] font-bold text-[#7B7B7B]"
          >
            Last Name
          </label>
          <input
            type="text"
            id="L-name"
            className="w-full border text-[13px] text-[#9E9E9E] border-[#E5E5E5] indent-[10px] outline-none rounded-[10px] p-2"
          />
        </div>
      </div>

      <div className="mt-4 px-4 py-2">
        <div className="flex flex-row gap-4 px-4 py-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[13px] font-bold text-[#7B7B7B]"
            >
              Email Address
            </label>
            <input
              type="text"
              id="email"
              className="w-full border-[1px] text-[13px] text-[#9E9E9E] indent-[10px] outline-none border-[#E5E5E5] rounded-[10px] p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-[13px] font-bold text-[#7B7B7B]"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              className="w-full border text-[13px] text-[#9E9E9E] indent-[10px] outline-none border-[#E5E5E5] rounded-[10px] p-2"
            />
          </div>
        </div>
        <div className="mt-4 px-4 py-2"></div>
        <div className="flex flex-row gap-4 px-4 py-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="dob"
              className="text-[13px] font-bold text-[#7B7B7B]"
            >
              Date Of Birth
            </label>
            <input
              type="text"
              id="dob"
              className="w-full border-[1px] text-[13px] text-[#9E9E9E] indent-[10px] outline-none border-[#E5E5E5] rounded-[10px] p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="gender"
              className="text-[13px] font-bold text-[#7B7B7B]"
            >
              Gender
            </label>
            <input
              type="text"
              id="gender"
              className="w-full border text-[13px] text-[#9E9E9E] border-[#E5E5E5] indent-[10px] outline-none rounded-[10px] p-2"
            />
          </div>
        </div>
        <div className="flex p-4 justify-end max-w-[450px]">
          <button className="rounded-[10px_10px_20px_20px] bg-[#03B66B] px-6 py-3 text-white text-[13px] font-light">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
