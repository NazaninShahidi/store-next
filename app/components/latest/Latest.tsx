import React from "react";
import Card from "../ui/card";
import Link from "next/link";

function Latest() {
  return (
    <div className="mb-60">
      <div className="flex justify-between py-3 my-9 items-center">
        <h1 className="font-DM font-medium text-[33px] leading-[43px]">
          Shop The Latest
        </h1>

        <Link href="/" legacyBehavior>
          <a
            id="link"
            className="text-[#A18A68] capitalize font-DM font-medium text-x leading-7"
          >
            {" "}
            View All
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-3 mx-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Latest;
