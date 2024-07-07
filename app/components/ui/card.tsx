import Link from "next/link";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React from "react";

function Card() {
  return (
    <div className="flex flex-col items-start font-DM space-y-3">
      <div className=" overlay-outer">
        <div className="overlay"></div>
        <img src="img/products/pro-1.png" alt="" />

        <div className="content-details fadeIn_bottom">
          <div className="flex items-center space-x-5 justify-center">
            <button>
              <AiOutlineShoppingCart className="w-5 h-5" />
            </button>
            <button>
              <IoEyeOutline className="w-5 h-5" />
            </button>

            <button>
              <IoIosHeartEmpty className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <Link href="/" legacyBehavior>
        <a id="link" className="font-normal leading-[26px] text-xl ">
          {" "}
          Lira Earrings
        </a>
      </Link>

      <span className="text-[#A18A68] leading-[26px] text-xl font-medium">
        $ 20,00
      </span>
    </div>
  );
}

export default Card;
