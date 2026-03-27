import Button from "@features/base/components/Button"

const Toggle = () => {
  return (
    <div id="toggle-container" className="flex gap-4 rounded md:inline-block xl:space-x-8">
      <Button type="monthly" className="flex-1 text-base gap-1.5 px-4 py-2.5 leading-6 text-neutral-600" text="Monthly" />
      <Button
        type="annual"
        className="flex-1 gap-1.5 px-4 py-2.5 border-0.5 border-neutral-200 rounded shadow"
        text="Annually" />
    </div>
  )
}

export default Toggle;