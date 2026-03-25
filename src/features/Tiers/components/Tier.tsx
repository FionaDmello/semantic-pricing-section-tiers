import Button from "@features/base/components/Button";
import type { Tier as TierType } from "../types";
interface TierProps {
  tier: TierType
}

const Tier = ({ tier }: TierProps) => {
  const {title, description, price, billed, sellingPoints} = tier
  return (
    <div className="p-4 space-y-8 rounded-lg border border-neutral-200 shadow-sm">
      <div className="space-y-2">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <div>{price}</div>
        <div>{billed}</div>
      </div>
      <ul>
        {
          sellingPoints.map(point => <li>{point}</li>)
        }
      </ul>
      <Button type="general-focused" className="" text="Buy now" />
    </div>
  )
}

export default Tier;