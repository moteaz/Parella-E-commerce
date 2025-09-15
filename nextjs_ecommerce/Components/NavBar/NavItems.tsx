import React from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { cn } from "../../lib/utils";
import Image from "next/image";
import { logout, login } from "@/lib/action";
import { Span } from "next/dist/trace";

interface Props {
  mobile?: boolean;
  userProfile: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  } | null;
}

const NavItems = ({ mobile, userProfile }: Props) => {
  return (
    <nav
      className={cn(
        "flex items-center justify-between gap-6 w-full px-4 py-2",
        mobile ? "flex-col" : "flex-row"
      )}
    >
      {/* Profile Section */}
      <div className="flex items-center gap-3">
        {userProfile?.image && (
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-black shadow-md relative">
            {/* Profile picture container */}
            <Image
              src={userProfile.image}
              alt="Profile Picture"
              className="object-cover"
              fill
              sizes="48px"
              priority
            />
          </div>
        )}

        {userProfile?.name && (
          <Link
            href="/profile"
            className="text-lg font-medium text-gray-900 hover:text-gray-700 transition"
          >
            {userProfile.name}
          </Link>
        )}
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-2">
        {userProfile ? (
          <button className="nav-btn" onClick={logout}>Logout</button>
        ) : (
          <button className="nav-btn" onClick={login}>Login</button>
        )}
      </div>

      {/* Cart Icon */}
      <div className="relative flex items-center h-12 w-12 justify-center cursor-pointer">
        <FaCartShopping className="text-3xl text-black" />
        <span className="absolute -top-1 -right-1 px-2 py-0.5 bg-black rounded-full text-white text-xs font-semibold">
          3
        </span>
      </div>
    </nav >
  );
};

export default NavItems;
