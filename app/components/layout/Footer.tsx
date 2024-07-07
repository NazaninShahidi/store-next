import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" flex flex-col py-6 border-t my-3 space-y-9 mb-9 font-DM">
      <div className="flex justify-between ">
        {" "}
        <ul className=" flex space-x-6 text-[#707070] font-normal text-[16px] leading-7 my-3">
          <li>CONTACT</li>
          <li>TERMS OF SERVICES</li>
          <li>SHIPPING AND RETURNS</li>
        </ul>
        <div className="flex w-[398px] border-b border-b-black ">
          <input
            type="email"
            placeholder="Give an email, get the newsletter."
            className="w-full placeholder:text-[#707070] focus-within:outline-none my-3"
          />
          <button className="w-6">
            <FaArrowRightLong className="text-[#707070] " />
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-[#707070] ">
          <span className="text-black">© 2021 Shelly.</span> Terms of use{" "}
          <span className="text-black">and</span> privacy policy.
        </p>
        <ul className=" flex space-x-6 text-[#707070] font-normal text-[16px] leading-7">
          <li>
            <FaLinkedinIn />
          </li>
          <li>
            <IoLogoInstagram />
          </li>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
