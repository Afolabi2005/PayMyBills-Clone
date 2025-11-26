import React from 'react'
import Event1 from '../../assets/Events/Event1.jpg'
import Event2 from '../../assets/Events/Event2.jpg'
import Event3 from '../../assets/Events/Event3.jpg'
import Event4 from '../../assets/Events/Event4.jpg'
import Event5 from '../../assets/Events/Event5.jpg'
import Event6 from '../../assets/Events/Event6.jpg'

const PayMyBills = () => {
    const Events = [
        {
            id: 1,
            name: 'Ajitana',
            date: 'July, 24, 2021',
            img: Event1
        },
        {
            id: 2,
            name: 'Comedy',
            date: 'July, 24, 2021',
            img: Event2
        },
        {
            id: 3,
            name: 'Laff to life',
            date: 'July, 24, 2021',
            img: Event3
        },
        {
            id: 4,
            name: 'Evolution',
            date: 'July, 24, 2021',
            img: Event4
        },
        {
            id: 5,
            name: 'Laff',
            date: 'July, 24, 2021',
            img: Event5
        },
        {
            id: 6,
            name: 'Comedy',
            date: 'July, 24, 2021',
            img: Event6
        }

    ]
  return (
    <div className='p-4'>
      <p className='text-[20px] text-[#3E3D75] py-2'>Events on PayMyBills</p>
      <div className='p-4 grid grid-cols-4 gap-4'>
        {Events.map((event, index) => {
            return(
                <div key={index}>
                    <img src={event.img} alt={''} className='w-[167px] h-[177px] rounded-lg' />
                    <div className='flex flex-row justify-between'>
                    <p className='text-[#3E3D75] text-[18px]'>{event.name}</p>
                    <p className='text-[#3E3D75] text-[10px] mt-[7px] font-light'>{event.date}</p>
                    </div>
                    <p className='text-[10px] text-[#03B66B]'>Buy Ticket</p>
                </div>
            ) 
        })}
      </div>
    </div>
  )
}

export default PayMyBills
