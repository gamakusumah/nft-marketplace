import Image from "next/image";
import Link from "next/link";

export default function ArtistInfo() {
  return (
    <section className="container py-10 grid gap-[30px] lg:grid-cols-2">
      {/* Artist Name */}
      <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
        Animakid
      </h1>

      {/* CTAs */}
      <div className="md:flex lg:row-span-3 lg:justify-self-end">
        <button
          className="btn-secondary-fill w-full mb-5 md:w-[186px] md:mb-0 md:mr-5"
          id="button-copy"
        >
          <Image
            src="/icons/Copy.svg"
            width={20}
            height={20}
            alt="Button Icon"
            className="mr-3"
          />
          0xc0E3...B79C
        </button>
        <button
          className="btn-secondary-outline w-full md:w-[145px]"
          id="button-follow"
        >
          <Image
            src="/icons/Plus.svg"
            width={20}
            height={20}
            alt="Button Icon"
            className="mr-3"
          />
          Follow
        </button>
      </div>

      {/* Stats */}
      <div className="w-full grid grid-cols-3 md:w-[510px]">
        <div>
          <h2 className="font-mono font-bold text-lg lg:text-xl">250k+</h2>
          <span className="lg:text-md">Volume</span>
        </div>
        <div className="justify-self-center">
          <div>
            <h2 className="font-mono font-bold text-lg lg:text-xl">50k+</h2>
            <span className="lg:text-md">NFTs Sold</span>
          </div>
        </div>
        <div className="justify-self-end">
          <h2 className="font-mono font-bold text-lg lg:text-xl">3000+</h2>
          <span className="lg:text-md">Follower</span>
        </div>
      </div>

      {/* Bio */}
      <div>
        <h2 className="font-mono text-caption mb-[10px] lg:text-lg">Bio</h2>
        <p className="lg:text-md">The internet's friendliest designer kid.</p>
      </div>

      {/* Web Links */}
      <div>
        <h2 className="font-mono text-caption mb-[10px] lg:text-lg">Links</h2>
        <div className="flex space-x-[10px] text-caption">
          <Link href="/">
            <Image
              src="/icons/Globe.svg"
              width={32}
              height={32}
              className="w-6 h-6 lg:w-8 lg:h-8"
              alt="Youtube Logo"
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/DiscordLogo.svg"
              width={32}
              height={32}
              className="w-6 h-6 lg:w-8 lg:h-8"
              alt="Youtube Logo"
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/YoutubeLogo.svg"
              width={32}
              height={32}
              className="w-6 h-6 lg:w-8 lg:h-8"
              alt="Youtube Logo"
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/TwitterLogo.svg"
              width={32}
              height={32}
              className="w-6 h-6 lg:w-8 lg:h-8"
              alt="Youtube Logo"
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/InstagramLogo.svg"
              width={32}
              height={32}
              className="w-6 h-6 lg:w-8 lg:h-8"
              alt="Youtube Logo"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
