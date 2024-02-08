import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface statusProp {
  setSelectedValue?: Function
}
export const Status = ({ setSelectedValue }: statusProp) => {
  return (
    <div className="border-b border-gray-800">
      <div className="px-4 py-3">
        <p className="text-white">STATUS</p>
        <RadioGroup className="py-2" defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              onClick={() => {
                setSelectedValue ? setSelectedValue("option-one") : ""
              }}
              value="option-one"
              id="option-one"
            />
            <label htmlFor="option-one">BUY MODE</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              onClick={() => {
                setSelectedValue ? setSelectedValue("option-two") : ""
              }}
              value="option-two"
              id="option-two"
            />
            <label htmlFor="option-two">SALE MODE</label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
