import { ReactNode } from "react";

import { FaUser } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { PiCowFill } from "react-icons/pi";
import { IoIosHome } from "react-icons/io";

interface IPropMenu {
  id: string;
  path: string;
  label: string;
  icon: ReactNode;
}

let menuList: IPropMenu[] = [
  {
    id: `dashboard`,
    path: `/manager/dashboard`,
    label: `Dashboard`,
    icon: <FaShoppingBasket size={28} />,
  },
  {
    id: `hewan`,
    path: `/manager/hewan`,
    label: `Hewan`,
    icon: <PiCowFill size={28} />,
  },
  {
    id: `dataUser`,
    path: `/manager/user-data`,
    label: `User Data`,
    icon: <FaUser size={28} />,
  },
  {
    id: `History`,
    path: `/manager/history`,
    label: `History`,
    icon: <IoIosHome size={28} />,
  },
];

export default menuList;
