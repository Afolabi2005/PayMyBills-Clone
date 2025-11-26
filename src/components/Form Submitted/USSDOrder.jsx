import React from 'react'

const USSDOrder = () => {
  return (
    <div className='flex flex-col p-4 gap-[30px]'>
        <div>
            <p className='text-gray-500 text-[15px] mt-2'>&larr; back</p>
        </div>
        <div className='flex flex-col gap-3 justify-center align-middle text-center pt-2'>
            <p className='text-[14px]'>Order Summary:</p>
            <p className='text-[#03B66B] font-medium text-[16px]'>NGN 10,000 MTN Airtime</p>
      </div>
        <div className='flex justify-center align-middle'>
            <button className='py-4 px-8 bg-[#F4FAF7] border-[#F0F1F2] shadow-sm rounded-[10px] font-inter text-[14px]'>Switch to Payment by USSD</button>
        </div>
      <div className='flex flex-row justify-between text-center'>
        <p className='text-[#999999] text-[14px]'>Select your bank from the list below and dial the code generated to complete the payment</p>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="Banks" className='font-medium mb-4 '>Banks</label>
        <select className='py-4 px-4 bg-[#F4FAF7] border-[#F0F1F2] text-[#676767] cursor-pointer font-Inter font-light text-[14px] rounded-[10px]' name="banks" id="banks">
            <option value="1" selected>United Bank For Africa</option>
            <option value="2">First Bank</option>
            <option value="3">Guarantee Trusted Bank</option>
            <option value="4">Access Bank</option>
            <option value="5">FCMB Bank</option>
            <option value="6">Standard Chattered</option>
        </select>
      </div>
      <div className='border-[1.5px] border-spacing-2.5 border-dashed border-[#03B66B] text-center p-4 rounded-[10px]'>
        *919*000*8376#
      </div>
    </div>
  )
}

export default USSDOrder
