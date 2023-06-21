interface AuctionProp {
  btnHidden: boolean;
}

export default function AuctionTimer(prop: AuctionProp) {
  return (
    <div className="w-[295px] min-h-[144px] p-[30px] bg-sec bg-opacity-50 rounded-[20px] flex flex-col justify-between">
      <p className="font-mono text-sm">Auction ends in:</p>
      <div className="flex justify-between">
        <div>
          <h3 className="font-mono font-bold text-2xl">59</h3>
          <p className="font-mono text-sm">Hours</p>
        </div>
        <span className="font-mono font-bold text-2xl">:</span>
        <div>
          <h3 className="font-mono font-bold text-2xl">59</h3>
          <p className="font-mono text-sm">Minutes</p>
        </div>
        <span className="font-mono font-bold text-2xl">:</span>
        <div>
          <h3 className="font-mono font-bold text-2xl">59</h3>
          <p className="font-mono text-sm">Seconds</p>
        </div>
      </div>

      <button
        className={`btn-secondary-fill w-full mt-[30px] ${
          prop.btnHidden ? "hidden" : null
        }`}
      >
        Place Bid
      </button>
    </div>
  );
}
