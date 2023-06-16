import Link from "next/link";
import Image from "next/image";
import Storefront from "@/public/icons/Storefront.svg";
import List from "@/public/icons/List.svg";
import User from "@/public/icons/User.svg";

export default function Navbar() {
  return (
    <nav className="h-[54px] lg:h-[100px] w-full flex items-center justify-between px-[30px] md:px-[50px]">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={Storefront}
          alt="logo"
          className="text-cta w-6 h-6 lg:w-8 lg:h-8"
        />
        <p className="font-mono font-bold">NFT Marketplace</p>
      </Link>

      {/* Menu Icon */}
      <button type="button" className="lg:hidden">
        <Image
          src={List}
          className="text-cta w-6 h-6 lg:w-8 lg:h-8"
          alt="list"
        />
      </button>

      {/* Menu List */}
      <ul className="lg:flex items-center justify-between space-x-2 hidden">
        <Link href="/marketplace" className="font-sans font-semibold">
          <li className="px-5 py-3 hover:bg-sec">Marketplace</li>
        </Link>
        <Link href="/rankings" className="font-sans font-semibold">
          <li className="px-5 py-3 hover:bg-sec">Rankings</li>
        </Link>
        <Link href="/wallet" className="font-sans font-semibold">
          <li className="px-5 py-3 hover:bg-sec">Connect a wallet</li>
        </Link>
        <Link
          href="/signup"
          className="font-sans font-semibold flex items-center justify-center"
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
  );
}
