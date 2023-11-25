import React from "react";
import hulu from "../assets/Hulu_Logo.svg.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HeaderItems from "./HeaderItems";
import { TiHomeOutline } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { MdOutlineVerified } from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { CiUser } from "react-icons/ci";

function Header() {
  const icons = [
    {
      id: 1,
      title: "HOME",
      Icon: TiHomeOutline,
    },
    {
      id: 2,
      title: "TRENDING",
      Icon: HiOutlineLightningBolt,
    },
    {
      id: 3,
      title: "VERIFIED",
      Icon: MdOutlineVerified,
    },
    {
      id: 4,
      title: "COLLECTIONS",
      Icon: HiOutlineCollection,
    },
    {
      id: 5,
      title: "SEARCH",
      Icon: IoIosSearch,
    },
    {
      id: 6,
      title: "ACCOUNT",
      Icon: CiUser,
    },
  ];
  return (
    <div>
      <header className="flex flex-col sm:flex-row items-center m-5 justify-between">
        <div className="flex flex-grow max-w-2xl justify-evenly">
          {icons.map((icon) => (
            <HeaderItems key={icon.id} title={icon.title} Icon={icon.Icon} />
          ))}
        </div>
        <LazyLoadImage
          src={hulu}
          alt="hulu"
          width={100}
          height={100}
          loading="lazy"
          className="object-contain "
        />
      </header>
    </div>
  );
}

export default Header;
