import Link from "next/link";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <div className="container relative z-2">
      <Heading
        title="Choose Your Adventure"
        text="Find the perfect package for your play style"
        className="h1 flex-col text-center"
      />

      <div className="relative">
        <PricingList />
        <LeftLine />
        <RightLine />
      </div>

      <div className="text-center mt-12">
        <div className="text-gray-400">
          <p className="mb-2">All prices are inclusive of GST</p>
        </div>
        <Link
          href="/pricing"
          className="text-xs font-code font-bold tracking-wider uppercase border-b lg:hover:text-color-1 transition-colors"
        >
          See the full details
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
