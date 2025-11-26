import React, { useState } from 'react'

function HamburgerMenu({ menus = [] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen(prev => !prev)}
        className="p-2 rounded-md bg-white shadow-md mr-2 flex flex-col items-center justify-center"
      >
        <span className={`block w-6 h-0.5 bg-[#0078c8] my-0.5 transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
        <span className={`block w-6 h-0.5 bg-[#0078c8] my-0.5 transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`block w-6 h-0.5 bg-[#0078c8] my-0.5 transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
          <ul className="flex flex-col">
            {menus.map((m, i) => (
              <li
                key={i}
                className="px-4 py-2 text-sm text-[#0078c8] hover:bg-[#f1f5f9] cursor-pointer"
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu