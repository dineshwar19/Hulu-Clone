import React from 'react'

function HeaderItems({title , Icon }) {
  return (
    <div
      className="flex flex-col w-12 sm:w-20 items-center cursor-pointer group hover:text-white justify-"
    >
      <Icon size={30} className="group-hover:animate-bounce" />
      <p className=" tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  )
}

export default HeaderItems