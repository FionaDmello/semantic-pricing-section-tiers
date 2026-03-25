import Tier from "./Tier";
import { TIER_DATA } from "../constants.ts";
import type { Tier as TierType } from "../types.ts";

interface TiersProps {
  billingFrequency?: "annual" | "monthly";
}
const Tiers = ({ billingFrequency = "annual" }: TiersProps) => {
  const tiers: TierType[] = TIER_DATA[billingFrequency];

  return (
    <div
      id="tiers-container"
      className="flex flex-col gap-y-8 justify-center items-center"
    >
      {tiers.map((tier: TierType) => (
        <Tier tier={tier} />
      ))}
    </div>
  );
};

export default Tiers;
