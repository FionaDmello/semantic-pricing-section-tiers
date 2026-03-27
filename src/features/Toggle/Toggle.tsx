import type { Dispatch, SetStateAction } from "react"
import Button from "@features/base/components/Button"
import BUTTON_STATE_OPTIONS from "./constants";

interface ToggleProps {
  billingFrequency: "annual" | "monthly",
  setBillingFrequency: Dispatch<SetStateAction<"annual" | "monthly">>;
}

const Toggle = ({ billingFrequency ,setBillingFrequency }: ToggleProps) => {
  return (
    <div id="toggle-container" className="flex gap-4 rounded md:inline-block xl:space-x-8">
      <Button type="monthly" className={`${billingFrequency === "monthly"? BUTTON_STATE_OPTIONS.selected : BUTTON_STATE_OPTIONS.selected}`} text="Monthly" setBillingFrequency={setBillingFrequency} />
      <Button
        type="annual"
        className={`${billingFrequency === "annual" ? BUTTON_STATE_OPTIONS.selected : BUTTON_STATE_OPTIONS.selected}`}
        text="Annually"
        setBillingFrequency={setBillingFrequency}
      />
    </div>
  )
}

export default Toggle;