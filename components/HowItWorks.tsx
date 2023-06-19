import InfoCard from "./InfoCard";

export default function HowItWorks() {
  return (
    <section className="container py-10 lg:py-20 ">
      {/* Headline */}
      <div className="mb-10 lg:mb-12">
        <h2 className="font-sans font-semibold text-xl lg:text-2xl mb-[10px]">
          How It Works
        </h2>
        <p className="font-sans lg:text-md">Find out how to get started</p>
      </div>

      <div className="grid gap-5 md:grid-cols-3 md:gap-[30px]">
        <InfoCard
          title="Setup Your Wallet"
          text="Set up your wallet of choice. Connect it to the NFT market by clicking
          the wallet icon in the top right corner."
          imgSrc="/icons/info-card/Start-Earning-Icon.svg"
        />
        <InfoCard
          title="Setup Your Wallet"
          text="Set up your wallet of choice. Connect it to the NFT market by clicking
          the wallet icon in the top right corner."
          imgSrc="/icons/info-card/Start-Earning-Icon.svg"
        />
        <InfoCard
          title="Setup Your Wallet"
          text="Set up your wallet of choice. Connect it to the NFT market by clicking
          the wallet icon in the top right corner."
          imgSrc="/icons/info-card/Start-Earning-Icon.svg"
        />
      </div>
    </section>
  );
}
