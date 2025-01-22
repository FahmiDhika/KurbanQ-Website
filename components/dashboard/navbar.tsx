"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import MenuItem from "./menuItem";
import logo from "../../public/logo.svg";

import { CiSearch } from "react-icons/ci";

type MenuType = {
  id: string;
  icon: ReactNode;
  path: string;
  label: string;
};
type DashboardProp = {
  children: ReactNode;
  id: string;
  menuList: MenuType[];
};

const Navbar = ({ children, id, menuList }: DashboardProp) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="w-full min-h-dvh">
      {/* nav section */}
      <div className="flex justify-between py-2 px-10 min-h-fit w-full shadow-xl">
        <div className="flex font-semibold text-lg">
          {menuList.map((menu, index) => (
            <MenuItem
              icon={menu.icon}
              label={menu.label}
              path={menu.path}
              active={menu.id === id}
              key={`keyMenu${index}`}
            />
          ))}
        </div>

        {/* search section */}
        <div className="flex p-2 rounded-full border border-[#254212] w-1/2 gap-2">
          <CiSearch size={28} />
          <input
            type="search"
            className="border-l-2 border-[#254212] bg-slate-50 w-full pl-3 outline-none"
            placeholder="Search"
          />
        </div>

        {/* logo section */}
        <div className="flex items-center">
          <h1 className="font-bold text-xl">QurbanQ</h1>
          <Image src={logo} alt="logo" sizes="28" />
        </div>
      </div>

      {/* content section */}
      <div className="px-10 py-6 flex flex-wrap justify-center">
          {children}
      </div>
    </div>
  );
};

export default Navbar;
