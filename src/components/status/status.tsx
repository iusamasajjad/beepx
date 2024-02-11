import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface statusProp {
  setSelectedValue?: Function
  selectedValue?: string
  setListValue?: Function
  listValue?: string
  option1: string
  option2: string
}
export const Status = ({
  setSelectedValue,
  selectedValue,
  listValue,
  setListValue,
  option1,
  option2,
}: statusProp) => {
  return (
    <div className="border-b border-gray-800">
      <div className="px-4 py-3">
        <p className="text-white">STATUS</p>
        <RadioGroup className="py-2" defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              className={` ${
                (selectedValue === "option-one" &&
                  "border-green-500 border-2 z-10") ||
                (listValue === "listed" && "border-yellow-400 border-2 z-10")
              } `}
              onClick={() => {
                setListValue ? setListValue("listed") : ""
                setSelectedValue ? setSelectedValue("option-one") : ""
              }}
              value={listValue || selectedValue || ""}
              id={listValue || selectedValue || ""}
            />
            <label htmlFor={listValue || selectedValue || ""}>{option1}</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              className={` ${
                (listValue === "unlisted" && "border-yellow-400 border-2 z-10") ||
                (selectedValue === "option-two" &&
                  "border-red-500 border-2 z-10")
              }`}
              onClick={() => {
                setListValue ? setListValue("unlisted") : ""
                setSelectedValue ? setSelectedValue("option-two") : ""
              }}
              value={listValue || selectedValue || ""}
              id={listValue || selectedValue || ""}
            />
            <label htmlFor={listValue || selectedValue || ""}>{option2}</label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
