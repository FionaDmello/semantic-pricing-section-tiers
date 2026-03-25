
interface ButtonProps {
  type: "monthly" | "annual",
  className: string,
  text: string
}

const Button = ({ type, className, text} : ButtonProps ) => {
  return (
    <button id={`${type}-button`} className={className}>{text}</button>
  )
}

export default Button;