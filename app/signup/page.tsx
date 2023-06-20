import Image from "next/image";

export default function page() {
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
            Create Account
          </h1>
          <p>
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </p>
        </div>
        <form className="lg:w-[330px]">
          <div className="grid gap-[15px] mb-[30px]">
            {/* Username Input Text */}
            <div className="w-full h-[46px] px-5 rounded-[20px] flex items-center bg-white">
              <Image
                src="/icons/User.svg"
                width={20}
                height={20}
                alt="Username Icon"
                className="mr-3 bg-caption"
              />
              <input
                type="text"
                placeholder="Username"
                className="text-prim w-full focus:outline-none"
              />
            </div>
            {/* Email Input Text */}
            <div className="w-full h-[46px] px-5 rounded-[20px] flex items-center bg-white">
              <Image
                src="/icons/EnvelopeSimple.svg"
                width={20}
                height={20}
                alt="Email Icon"
                className="mr-3 bg-caption"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="text-prim w-full focus:outline-none"
              />
            </div>
            {/* Password Input Text */}
            <div className="w-full h-[46px] px-5 rounded-[20px] flex items-center bg-white">
              <Image
                src="/icons/LockKey.svg"
                width={20}
                height={20}
                alt="Password Icon"
                className="mr-3 bg-caption"
              />
              <input
                type="password"
                placeholder="Password"
                className="text-prim w-full focus:outline-none"
              />
            </div>
            {/* Confirm Password Input Text */}
            <div className="w-full h-[46px] px-5 rounded-[20px] flex items-center bg-white">
              <Image
                src="/icons/LockKey.svg"
                width={20}
                height={20}
                alt="Confirm Password Icon"
                className="mr-3 bg-caption"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="text-prim w-full focus:outline-none"
              />
            </div>
          </div>
          {/* Create Account Button */}
          <button type="submit" className="btn-tertiary-fill w-full">
            Create Account
          </button>
        </form>
      </section>
    </main>
  );
}
