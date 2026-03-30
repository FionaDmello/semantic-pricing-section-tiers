import type { Dispatch, SetStateAction } from "react";

interface ButtonProps {
  type?: "monthly" | "annual",
  className: string,
  text: string,
  setBillingFrequency?: Dispatch<SetStateAction<"annual"|"monthly">>
}

const Button = ({ type, className, text, setBillingFrequency } : ButtonProps ) => {
  const toggleHandler = () => {
    if(type && setBillingFrequency) setBillingFrequency(type)
  } 
  
  return (
    <button id={`${type}-button`} className={className} onClick={toggleHandler}>{text}</button>
  )
}

export default Button;