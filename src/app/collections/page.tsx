"use client"
import {
  Activity,
  Header,
  Items,
  PageFooter,
  Profile,
  Status,
  Traits,
} from "@/components"
import { useState } from "react"

const Collection = () => {
  // State to keep track of the selected radio button value
  const [selectedValue, setSelectedValue] = useState("option-one")
  return (
    <div>
      <Header profileInfo={true} button={false} />
      <Profile />
      <div className="flex border-t border-gray-800">
        <div className="border-r w-[20%] border-gray-800">
          <Status setSelectedValue={setSelectedValue} />
          <Traits />
        </div>
        <div className="w-[55%]">
          <Items selectedValue={selectedValue} />
        </div>
        <div className="w-[25%]">
          <Activity />
        </div>
      </div>
      <PageFooter />
    </div>
  )
}

export default Collection
