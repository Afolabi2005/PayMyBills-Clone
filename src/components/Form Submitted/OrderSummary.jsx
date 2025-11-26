import React from 'react'
import { FaCopy } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function OrderSummary () {

  const location = useLocation()
  const navigate = useNavigate()

  const state = location.state
  if (!state){
    navigate('/buy-airtime')
    return null
  }

  const { amount, network} = state


  return (
    <div className='flex flex-col p-4 gap-[30px]'>
        <Link to={'/buy-airtime'}><div>
            <p className='text-gray-500 text-[15px] mt-2'>&larr; back</p>
        </div>
        </Link>
        <div className='flex flex-col gap-3 justify-center align-middle text-center pt-2'>
            <p className='text-[14px]'>Order Summary:</p>
            <p className='text-[#03B66B] font-medium text-[16px]'>NGN {Number(amount).toLocaleString()} {network.toUpperCase()} Airtime</p>
      </div>
        <div className='flex justify-center align-middle'>
            <button className='py-4 px-8 bg-[#F4FAF7] border-[#F0F1F2] shadow-sm rounded-[10px] font-inter text-[14px]'>Switch to Payment by USSD</button>
        </div>
      <div className='flex flex-row justify-between'>
        <p className='text-[#999999] text-[14px]'>Bank Name</p>
        <p>Fidelity</p>
      </div>
      <div className='flex flex-row justify-between'>
        <p className='text-[#999999] text-[14px]'>Account Number</p>
        <p className='flex gap-2 cursor-copy' onClick={() => navigator.clipboard.writeText('00123007889')}><FaCopy className='mt-1' /> 00123007889</p>
      </div>
      <div className='flex flex-row justify-between'>
        <p className='text-[#999999] text-[14px]'>Beneficiary Name</p>
        <p>Paymybills</p>
      </div>
      <div className='flex flex-row justify-between'>
        <p className='text-[#999999] text-[14px]'>Amount</p>
        <p>NGN {amount}</p>
      </div>
      <div className='flex justify-center align-middle p-4 '>
            <button className='w-full p-4 bg-[#03B66B] border-none text-white shadow-sm rounded-[10px] font-inter font-medium text-[14px]'>I have transferred</button>
        </div>
    </div>
  )
}

export default OrderSummary
