import Image from "next/image";

export default function SubscribeWidget() {
  return (
    <section className="container py-10 md:pb-20 lg:py-20">
      <div className="grid md:grid-cols-2 md:gap-[30px] md:bg-sec md:px-[30px] md:py-10 md:rounded-[20px] lg:p-[60px] lg:gap-[80px]">
        <div className="w-full h-[255px] md:h-[280px] lg:h-[310px] rounded-[20px] overflow-hidden">
          <Image
            src="/images/Subscribe.jpg"
            width={300}
            height={300}
            alt="Subscribe Photo"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="self-center">
          <div className="mb-10 mt-[30px] md:mt-0">
            <h4 className="font-sans font-semibold text-xl mb-[10px] lg:text-2xl">
              Join Our Weekly Digest
            </h4>
            <p className="lg:text-md">
              Get exclusive promotions & updates straight to your inbox.
            </p>
          </div>

          <div className="lg:flex lg:relative">
            <div className="w-full bg-white rounded-[20px] lg:h-[60px] flex items-center px-5 py-3 mb-4">
              <input
                type="email"
                id="input-email"
                placeholder="Enter your email here"
                className="w-full text-prim focus:outline-none lg:w-[47%] "
              />
            </div>
            <button className="btn-tertiary-fill lg:btn-secondary-fill w-full lg:absolute lg:w-[211px] lg:right-0">
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
    </section>
  );
}
