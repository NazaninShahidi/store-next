import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

function Header() {
  return (
    <nav className=" flex justify-between items-center mt-6 py-4 border-b  space-x-3">
      <div className="w-full flex justify-between">
        <Link href="/">
          <img src="img/logo.png" alt="logo" />
        </Link>

        <ul className="flex items-center space-x-8 font-DM text-[16px] leading-[27px] font-normal">
          <li className="relative hover:after:border hover:after:w-[40px] hover:after:bottom-[-16px] hover:after:right-0 hover:after:absolute hover:after:border-black">
            <Link href="/">Shop</Link>
          </li>
          <li className="relative hover:after:border hover:after:w-[40px] hover:after:bottom-[-16px] hover:after:right-0 hover:after:absolute hover:after:border-black">
            <Link href="/">blog</Link>{" "}
          </li>
          <li className="relative hover:after:border hover:after:w-[40px] hover:after:bottom-[-16px] hover:after:right-0 hover:after:absolute hover:after:border-black">
            <Link href="/">Our Story</Link>
          </li>
          <div className="w-[17px] rotate-90 border border-[#707070] h-0"></div>
        </ul>
      </div>

      <ul className="flex items-center space-x-8">
        <li>
          <Link href="/">
            <IoIosSearch className=" w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <PiShoppingCartLight className=" w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link href="/">
            {" "}
            <CiUser className=" w-5 h-5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
