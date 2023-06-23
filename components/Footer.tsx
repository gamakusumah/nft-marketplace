import Link from "next/link";
import Image from "next/image";
import Storefront from "@/public/images/Storefront.png";

export default function Footer() {
  return (
    <footer className="py-10 lg:py-20 bg-sec">
      <div className="container">
        <div className="grid gap-[30px] lg:grid-cols-3 lg:flex lg:justify-between">
          {/* Info */}
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={Storefront}
                alt="logo"
                className="text-cta w-6 h-6 lg:w-8 lg:h-8"
              />
              <span className="font-mono font-bold">NFT Marketplace</span>
            </Link>
            {/* Additional Info */}
            <div className="text-caption mt-5">
              <p className="mb-5 lg:w-[238px]">
                NFT marketplace UI created with Anima for Figma.
              </p>
              <div>
                <p className="mb-[15px]">Join our community</p>
                <div className="flex space-x-[10px]">
                  <Link href="/">
                    <Image
                      src="/icons/DiscordLogo.svg"
                      width={32}
                      height={32}
                      alt="Youtube Logo"
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/icons/YoutubeLogo.svg"
                      width={32}
                      height={32}
                      alt="Youtube Logo"
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/icons/TwitterLogo.svg"
                      width={32}
                      height={32}
                      alt="Youtube Logo"
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/icons/InstagramLogo.svg"
                      width={32}
                      height={32}
                      alt="Youtube Logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h5 className="font-mono font-bold text-lg mb-5">Explore</h5>
            <ul className="grid gap-5 text-caption">
              <Link href="/marketplace">
                <li className="cursor-pointer hover:text-white">Markteplace</li>
              </Link>
              <Link href="/rankings">
                <li className="cursor-pointer hover:text-white">Rankings</li>
              </Link>
              <Link href="/connect-wallet">
                <li className="cursor-pointer hover:text-white">
                  Connect a wallet
                </li>
              </Link>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <div className="mb-5">
              <h5 className="font-mono font-bold text-lg mb-5">
                Join Our Weekly Digest
              </h5>
              <p className="text-caption lg:w-[330px]">
                Get exclusive promotions & updates straight to your inbox.
              </p>
            </div>

            <div className="md:flex md:relative md:w-[420px]">
              <div className="w-full bg-white rounded-[20px] md:h-[60px] flex items-center px-5 py-3 mb-4">
                <input
                  type="email"
                  id="input-email"
                  placeholder="Enter your email here"
                  className="w-full text-prim focus:outline-none md:w-[47%] "
                />
              </div>
              <button className="btn-tertiary-fill md:btn-secondary-fill w-full md:absolute md:w-[211px] md:right-0">
                <Image
                  src="/icons/EnvelopeSimple.svg"
                  width={20}
                  height={20}
                  alt="Button Icon"
                  className="mr-3"
                />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-[1px] border-caption mt-[49px]">
          <p className="text-sm text-caption mt-5">
            Ⓒ NFT Market. Use this template freely.
          </p>
        </div>
      </div>
    </footer>
  );
}
