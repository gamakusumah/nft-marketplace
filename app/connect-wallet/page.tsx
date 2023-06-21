import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <main className="grid md:grid-cols-2 md:gap-10 md:items-center lg:gap-[60px]">
      <section className="h-[232px] md:h-[615px] lg:h-[651px]">
        <Image
          src="/images/Signup.jpg"
          width={651}
          height={651}
          className="object-cover h-full w-full"
          alt="Signup Picture"
        />
      </section>
      <section className="pt-[30px] pb-10 px-[30px] md:py-0 md:px-0 md:w-[325px]">
        <div className=" mb-[30px] md:mb-10 lg:w-[460px]">
          <h1 className="font-semibold text-2xl mb-5 lg:text-3xl">
            Connect Wallet
          </h1>
          <p>
            Choose a wallet you want to connect. There are several wallet
            providers.
          </p>
        </div>
        <div className="grid gap-5 md:w-80">
          <Link
            href="/"
            className="text-lg font-semibold flex items-center bg-sec rounded-[20px] h-[60px] px-10 border-[1px] border-cta box-content lg:h-[72px]"
          >
            <Image
              src="/icons/Metamask.svg"
              width={32}
              height={32}
              alt="Metamask Logo"
              className="mr-5 md:w-8 md:h-8 lg:w-10 lg:h-10"
            />
            Metamask
          </Link>
          <Link
            href="/"
            className="text-lg font-semibold flex items-center bg-sec rounded-[20px] h-[60px] px-10 border-[1px] border-cta box-content lg:h-[72px]"
          >
            <Image
              src="/icons/WalletConnect.svg"
              width={32}
              height={32}
              alt="WalletConnect Logo"
              className="mr-5 md:w-8 md:h-8 lg:w-10 lg:h-10"
            />
            Wallet Connect
          </Link>
          <Link
            href="/"
            className="text-lg font-semibold flex items-center bg-sec rounded-[20px] h-[60px] px-10 border-[1px] border-cta box-content lg:h-[72px]"
          >
            <Image
              src="/icons/Coinbase.svg"
              width={32}
              height={32}
              alt="Coinbase Logo"
              className="mr-5 md:w-8 md:h-8 lg:w-10 lg:h-10"
            />
            Coinbase
          </Link>
        </div>
      </section>
    </main>
  );
}
