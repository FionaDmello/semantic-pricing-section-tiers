import React from "react";
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
      className="flex flex-col gap-y-8 xl:grid xl:grid-cols-12 xl:gap-8"
    >
      {tiers.map((tier: TierType, idx) => {
        return <Tier key={idx} tier={tier} />
      })}
    </div>
  );
};

export default Tiers;
