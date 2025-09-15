import React from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { cn } from "../../lib/utils";
import Image from "next/image";

interface Props {
  mobile?: boolean
  userProfile: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string
  } | null;
}



const NavItems = ({ mobile, userProfile }: Props) => {
  return (
    <div className={cn("flex items-center justify-center gap-6", mobile ? "flex-col" : "flex-row")}>
      <div className="w-[50px] h-[50px] rounded-full overflow-hidden  shadow-md relative">
        {/* Profile picture container */}
        <Image src={userProfile?.image} alt="Profile Picture" className="object-cover" fill />
      </div>
      <Link
        href="/profile"
        className="text-lg font-medium text-gray-900 hover:text-gray-700 transition"
      >
        {userProfile?.name}
      </Link>

      <button className="nav-btn">Logout</button>
      <button className="nav-btn">Login</button>

      <div className="relative flex items-center h-[60px] w-[60px] justify-center cursor-pointer">
        <FaCartShopping className="text-4xl text-black" />

        <span className="absolute top-0 right-0 px-2 py-1 bg-black rounded-full text-white">
          3
        </span>
      </div>
    </div>
  );
};

export default NavItems;