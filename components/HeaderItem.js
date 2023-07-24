// "use client";
import React from "react";
import Link from "next/link";

const HeaderItem = ({ Icon, title, url }) => {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white ">
      <Link href={url}>
        <Icon className="h-8 mb-1 group-hover:animate-bounce " />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest text-center">
          {title}
        </p>
      </Link>
    </div>
  );
};

export default HeaderItem;
