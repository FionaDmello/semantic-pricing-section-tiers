import Button from "@features/base/components/Button";
import type { Tier as TierType } from "../types";
interface TierProps {
  tier: TierType
}

const Tier = ({ tier }: TierProps) => {
  const {title, description, price, billed, sellingPoints, mostPopular} = tier
  return (
  <>
    
    <div className={`${mostPopular ? "border-indigo-600 shadow-2xl": "p-4  border-neutral-200 shadow-sm"} space-y-8 rounded-lg border`}>
      {
        mostPopular !== undefined && mostPopular === true ?
          <div className="flex py-4 px-2 justify-center bg-indigo-50 text-xl leading-5 font-bold text-indigo-700">
            Most Popular
          </div>
          :
          null
      }
      <div className={`space-y-2 ${mostPopular ? "px-4": ""}`}>
        <h2 className="text-2xl font-semibold leading-6">{title}</h2>
        <p className="text-base leading-4 font-normal text-neutral-600">{description}</p>
      </div>
      <div className={`space-y-2 ${mostPopular ? "px-4": ""}`}>
        <div className="inline-block text-5xl leading-12 font-semibold">{price}<span className="text-base leading-4 font-normal">/month</span></div>
        <div className="text-base leading-4 text-neutral-600">{billed}</div>
      </div>
        <ul className={`space-y-5 ${mostPopular ? "px-4": ""}`}>
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
        <div className={`flex ${mostPopular ? "px-4 pb-4": ""}`}>
          <Button
            className={`${mostPopular ?
              "bg-indigo-700 text-white hover:bg-indigo-800 focus:outline-4 focus:outline-indigo-200 disabled:bg-neutral-100 disabled:text-neutral-400"
              :
              "border-neutral-200 hover:bg-neutral-50 focus:outline-4 focus:outline-indigo-200 shadow disabled:bg-neutral-100 disabled:text-neutral-400"} flex-1 rounded px-5 py-3 gap-1.5 border-0.5`
            }
            text="Buy now" />
      </div>
      </div>
      
  </>
  )
}

export default Tier;