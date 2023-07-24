// "use client";
import React from "react";

import { HomeIcon, BoltIcon, UserIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="max-w-4xl flex m-5 justify-around items-center h-auto mx-auto p-5">
      <div className="flex flex-grow justify-start">
        <HeaderItem title="HOME" Icon={HomeIcon} url="/" />
        <HeaderItem title="ABOUT" Icon={BoltIcon} url="/about" />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} url="/login" />
      </div>
      <Image
        className="object-contain stroke-white"
        src="/logo.svg"
        alt="MovieHub logo"
        width={100}
        height={100}
      />
    </header>
  );
};

export default Header;
