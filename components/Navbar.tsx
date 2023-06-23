"use client";

import Link from "next/link";
import Image from "next/image";
import Storefront from "@/public/images/Storefront.png";
import List from "@/public/icons/List.svg";
import User from "@/public/icons/User.svg";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="h-[54px] px-[30px] lg:h-[100px] w-full flex items-center justify-between md:px-[50px] relative bg-prim">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={Storefront}
          alt="logo"
          className="text-cta w-6 h-6 lg:w-8 lg:h-8"
        />
        <span className="font-mono font-bold">NFT Marketplace</span>
      </Link>

      {/* Navbar */}
      <div>
        {/* Menu Icon */}
        <button
          type="button"
          className="relative z-50 w-6 h-6 md:w-8 md:h-8 lg:hidden"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? "X" : <Image src={List} alt="list" />}
        </button>
        <nav
          className={`bg-prim w-[70%] md:w-1/3 h-screen absolute right-0 top-0 p-5 z-40 lg:static lg:block lg:w-full lg:h-auto lg:p-0 ${
            !navbar ? "hidden" : null
          }`}
        >
          {/* Menu List */}
          <ul className="flex flex-col lg:flex-row space-y-2 py-[30px] lg:py-0 lg:space-x-2 lg:space-y-0 lg:items-center">
            <Link href="/marketplace" className="font-sans font-semibold">
              <li className="px-5 py-3 hover:bg-sec">Marketplace</li>
            </Link>
            <Link href="/rankings" className="font-sans font-semibold">
              <li className="px-5 py-3 hover:bg-sec">Rankings</li>
            </Link>
            <Link href="/connect-wallet" className="font-sans font-semibold">
              <li className="px-5 py-3 hover:bg-sec">Connect a wallet</li>
            </Link>
            <Link
              href="/signup"
              className="font-sans font-semibold flex items-center px-5 lg:px-0"
            >
              <li className="btn-secondary-fill w-[152px] flex items-center justify-center">
                <Image
                  src={User}
                  width={20}
                  height={20}
                  className="mr-3"
                  alt="User"
                />
                Signup
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
