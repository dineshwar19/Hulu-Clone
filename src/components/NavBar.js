import React from "react";
import { Link } from "react-router-dom";
import requests from "../components/utils/requests";

function NavBar() {
  return (
    <nav className="relative text-white">
      <div className="flex whitespace-nowrap mt-10 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title }]) => (
          <Link
            to={`${key}`}
            key={key}
            className="first:pl-10 last:pr-24 cursor-pointer transition duration-100 hover:scale-125 px-5 sm:px-10 active:text-red-500"
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}

export default NavBar;
