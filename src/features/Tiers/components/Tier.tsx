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
        <h2 className="text-2xl font-semibold leading-6">{title}</h2>
        <p className="text-base leading-4 font-normal text-neutral-600">{description}</p>
      </div>
      <div className="space-y-2">
        <div className="inline-block text-5xl leading-12 font-semibold">{price}<span className="text-base leading-4 font-normal">/month</span></div>
        <div className="text-base leading-4 text-neutral-600">{billed}</div>
      </div>
      <ul className="space-y-5">
        {
          sellingPoints.map((point, idx) => (
            <li key={idx} className="flex gap-x-3 text-neutral-600 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="min-w-6 h-6 w-6 rounded-full bg-indigo-50 fill-indigo-500 aspect-ratio">
                <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z">
                </path>
              </svg>
              <span className="text-base leading-5 font-normal">{point}</span>
            </li>
          ))
        }
      </ul>
      <div className="flex">
        <Button className="flex-1 rounded px-5 py-3 gap-1.5 border-0.5 border-neutral-200 shadow" text="Buy now" />
      </div>
    </div>
  )
}

export default Tier;